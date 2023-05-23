import { useLoaderData } from 'react-router-dom';

const AlltoysDetails = () => {

    const ToyDetails = useLoaderData();
    // console.log(ToyDetails);


    return (
        <div className=''>
            <div className="hero py-20 bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={ToyDetails.image} className=" rounded-lg shadow-2xl  h-[250px] w-[300px]" />
                    <div className='ms-5'>
                        <h1 className="text-5xl font-bold mb-2">{ToyDetails.toy_name}</h1>
                        <h2 className='font-bold'>SubCategory: <span>{ToyDetails.subCategory}</span></h2>
                        <p className="py-6">{ToyDetails.description}</p>
                        <div>

                            <div className='flex gap-10 mb-5'>
                                <p className='font-bold'>Price:{ToyDetails.price}</p>
                                <p className='font-bold'>Quantity:{ToyDetails.quantity}</p>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <h2 className='font-bold'> Seller :</h2>
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