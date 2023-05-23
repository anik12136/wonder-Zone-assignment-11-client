import React from 'react';
import { Link } from 'react-router-dom';

const TabDetails = ({ tab }) => {

    console.log(tab.toys)
    const toys = tab.toys;

    return (
        <div className='flex'>
            {
                toys.map(toy =>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={toy.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{toy.name}</h2>
                            <p>Price:{toy.price}</p>
                            <p>rating:{toy.rating}</p>
                            <div className="card-actions justify-end">
                                <Link
                                toy ={toy}
                                to='/carToyDetails'><button className="btn btn-primary">View Details</button></Link>
                            </div>
                        </div>
                    </div>

                )
            }





            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{card1.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default TabDetails;