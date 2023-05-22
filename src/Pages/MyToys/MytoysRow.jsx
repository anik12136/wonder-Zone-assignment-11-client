import React from 'react';
import { Link } from 'react-router-dom';

const MytoysRow = ({ toy }) => {


    const { description, image, price, quantity, rating, seller_email, seller_name, subCategory, toy_name } = toy;

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
                {subCategory}
            </th>
            <th>
                {toy_name}
            </th>
            <th>
                {price}
            </th>
            <th>
                {quantity}
            </th>
            <th>
                <Link
                    to={`/mytoysDetails/${toy._id}`}> <button className="btn btn-success">Update</button></Link>
            </th>
            <th>

                <button className="btn btn-warning">Delete</button>
            </th>


            {/* <th>
            
            <Link to={`/alltoysDetails/${toy._id}`}><button className="btn btn-primary btn-xs ">details</button></Link>

        </th> */}


        </tr>
    );
};

export default MytoysRow;