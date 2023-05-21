import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ toy }) => {


    const { description, image, price, quantity, rating, seller_email, seller_name, subCategory, toy_name } = toy;
    // console.log(description, image, price, quantity, rating, seller_email, seller_name, subCategory, toy_name);
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{seller_name}</div>
                        <div className="text-sm opacity-50">{seller_email}</div>
                    </div>

                </div>
            </td>
            <th>
                <div>{subCategory}</div>
            </th>
            <th>
                <div>{toy_name}</div>
            </th>
            <th>
                <div>{price}</div>
            </th>
            <th>
                <div>{quantity}</div>
            </th>

            <th>
                
                <Link to={`/alltoysDetails/${toy._id}`}><button className="btn btn-primary btn-xs ">details</button></Link>

            </th>
        </tr>
    );
};

export default AllToysRow;