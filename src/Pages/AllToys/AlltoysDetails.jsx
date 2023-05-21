import { useLoaderData } from 'react-router-dom';

const AlltoysDetails = () => {

    const ToyDetails = useLoaderData();
    console.log(ToyDetails);


    return (
        <div className=''>
            <div className="hero py-20 bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={ToyDetails.image} className="max-w-sm rounded-lg shadow-2xl " />
                    <div>
                        <h1 className="text-5xl font-bold mb-2">{ToyDetails.toy_name}</h1>
                        <h2>SubCategory: <span>{ToyDetails.subCategory}</span></h2>
                        <p className="py-6">{ToyDetails.description}</p>
                        <div>

                            <div className='flex gap-10 mb-5'>
                                <p>Price:{ToyDetails.price}</p>
                                <p>Quantity:{ToyDetails.quantity}</p>
                                <p>{ToyDetails.rating}</p>
                            </div>
                            <div className='flex gap-2'>
                                <h2>Seller :</h2>
                                <div>
                                    <h2 className='font-bold'>{ToyDetails.seller_name}</h2>
                                    <small className='text-1sm'>{ToyDetails.seller_email}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlltoysDetails;