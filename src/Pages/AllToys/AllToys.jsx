import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    const [allToys, setAllToys] = useState([])
    const [searchQuery, setSearchQuery] = useState('all');

    useEffect(() => {
        // fetch(`http://localhost:5000/allToys/${searchQuery}`)
        fetch(`https://assignment-11-serve-site-anik12136.vercel.app/search/${searchQuery}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
            .catch(error => console.error(error))
    }, [searchQuery]);


    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };


    console.log(searchQuery);
    return (

        <div>
            <div className='ms-20'>
                <h2 className='text-green-400	mt-10'>search here by <span className='text-sky-500	'>Toy Name</span></h2>
                <input
                    className="input input-bordered input-warning w-full max-w-xs"
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

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
                            <th>Ditails</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allToys.map(toy => <AllToysRow

                                key={toy._id}
                                toy={toy}
                            // handleDelete={handleDelete}

                            ></AllToysRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default AllToys;