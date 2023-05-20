import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import AllToysTable from './AllToysRow';

const AllToys = () => {

    const [allToys, setAllToys] = useState([])
    const [searchToys, setSearchToys] = useState("")
    const [searchQuery, setSearchQuery] = useState("All");

    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${searchQuery}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
            .catch(error => console.error(error))
    }, [searchQuery]);



    const handleSearchClick = (searchName) => {
        setSearchToys(searchName);
    }

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };
    // console.log(searchQuery)
    // useEffect(() => {
    //     fetch('http://localhost:5000/allToys')
    //         .then(res => res.json())
    //         .then(data => setAllToys(data))
    //         .catch(error => console.error(error))
    // }, [])

    console.log(searchQuery);
    return (

        <div>
            <div>
                <input className='border-2'
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