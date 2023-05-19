import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const AddAToys = () => {

    const { user } = useContext(AuthContext);

    const handleAddAToys = event => {
        event.preventDefault();

        const form = event.target;
        const sellerName = form.sellerName.value;
        const email = user?.email;
        const pictureURL = form.pictureURL.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const detailDescription = form.detailDescription.value;
        const toyName = form.toyName.value;
        const subCategory1 = form.SubCategory1.value;
        const subCategory2 = form.SubCategory2.value;
        const subCategory3 = form.SubCategory3.value;

        const addedToys = {
            sellerName,
            email,
            toyName,
            img: pictureURL,
            price,
            rating,
            subCategory: {
                subCategory1,
                subCategory2,
                subCategory3
            },
            availableQuantity,
            detailDescription
        }
        console.log(addedToys)

        
    }

    return (
        <div>
            <div className='m-20'>
                <form onSubmit={handleAddAToys}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input defaultValue={user?.displayName} type="text" name="sellerName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">seller email</span>
                            </label>
                            <input defaultValue={user?.email} type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy name</span>
                            </label>
                            <input type="text" name="toyName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" name="pictureURL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="text" name="availableQuantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <input type="text" name="detailDescription" className="input input-bordered" />
                        </div>

                    </div>
                    <h1 className='my-6 '>Add 3 Sub-category of this toy</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category 1</span>
                            </label>
                            <input type="text" name="SubCategory1" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category 2</span>
                            </label>
                            <input type="text" name="SubCategory2" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category 3</span>
                            </label>
                            <input type="text" name="SubCategory3" className="input input-bordered" />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
                <div className="card-body">

                </div>
            </div>
        </div>
    );
};

export default AddAToys;