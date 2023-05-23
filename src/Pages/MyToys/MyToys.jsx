
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import MytoysRow from './MytoysRow';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    console.log(user.email)
    const [myToys, setMyToys] = useState([])
    // const [searchQuery, setSearchQuery] = useState("All");

    useEffect(() => {
        fetch(`https://assignment-11-serve-site-anik12136.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
            .catch(error => console.error(error))
    }, [user]);

    console.log(myToys);



    const deleteHandeler = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-11-serve-site-anik12136.vercel.app/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            // alert('deleted successful');
                        }
                        const remainingData = myToys.filter(toy => toy._id !== id);
                        setMyToys(remainingData);
                    })

            }
        })
        console.log(id);
    }

    return (
        <div>
            <div className="overflow-x-auto mx-20 my-10 ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>seller</th>
                            <th>Sub-category</th>
                            <th>Toy name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            myToys.map(toy => <MytoysRow

                                key={toy._id}
                                toy={toy}
                                deleteHandeler={deleteHandeler}
                            // handleDeletConfirm={handleDeletConfirm}
                            ></MytoysRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;