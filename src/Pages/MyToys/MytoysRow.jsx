import { Link } from 'react-router-dom';

const MytoysRow = ({ toy,handleDeletConfirm,deleteHandeler}) => {


    const { description, image, price, quantity, rating, seller_email, seller_name, subCategory, toy_name,_id } = toy;



    return (
        <tr>
            <th>
                <button onClick={() => deleteHandeler(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
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
                <Link to={`/mytoysDetails/${toy._id}`}> <button className="btn btn-success">Update</button></Link>
            </th>


            {/* <th>
            
            <Link to={`/alltoysDetails/${toy._id}`}><button className="btn btn-primary btn-xs ">details</button></Link>

        </th> */}


        </tr>
    );
};

export default MytoysRow;