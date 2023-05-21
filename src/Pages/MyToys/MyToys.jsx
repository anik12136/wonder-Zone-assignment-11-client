
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {

    const {user} = useContext(AuthContext)
    console.log(user.email)
    const [myToys, setMyToys] = useState([])
    // const [searchQuery, setSearchQuery] = useState("All");

    useEffect(() => {
        fetch(`https://assignment-11-serve-site-anik12136.vercel.app/allToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
            .catch(error => console.error(error))
    }, [user]);

    console.log(myToys);

    return (
        <div>
            <h2>my toys</h2>
        </div>
    );
};

export default MyToys;