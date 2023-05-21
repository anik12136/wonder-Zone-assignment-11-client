
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MytoysRow from './MytoysRow';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    console.log(user.email)
    const [myToys, setMyToys] = useState([])
    // const [searchQuery, setSearchQuery] = useState("All");

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
            .catch(error => console.error(error))
    }, [user]);

    console.log(myToys);

    return (
        <div>
            <div className="overflow-x-auto mx-20 my-10 ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>seller</th>
                            <th>Sub-category</th>
                            <th>Toy name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myToys.map(toy => <MytoysRow

                                key={toy._id}
                                toy={toy}
                            // handleDelete={handleDelete}

                            ></MytoysRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;