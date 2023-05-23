import React, { useContext } from 'react';
import { FormProvider, useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const AddToys = () => {

    const { user } = useContext(AuthContext);

    // const  [addedToy,setAddedToy]= useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://assignment-11-serve-site-anik12136.vercel.app/addedToys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Submited',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    };
    // console.log(addedToy)

    return (
        <div>
            <h2 className='mt-10 ml-40 text-3xl text-orange-300'>Add your toy</h2>
            <form className='mx-40 mb-20' onSubmit={handleSubmit(onSubmit)}>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 mb-10 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>

                        <input {...register("seller_name", { required: true })} value={user?.displayName} type="text" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">seller email</span>
                        </label>
                        <input value={user?.email} type="email" {...register("seller_email", { required: true })} placeholder="email" className="input input-bordered" />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy name</span>
                        </label>
                        <input type="text" {...register("toy_name", { required: true })} className="input input-bordered" />
                        {errors.toy_name && <span className='text-rose-400'>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" {...register("image", { required: true })} className="input input-bordered" />
                        {errors.image && <span className='text-rose-400'>This field is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub category name</span>
                        </label>
                        <input type="text" {...register("subCategory", { required: true })} className="input input-bordered" />
                        {errors.subCategory && <span className='text-rose-400'>This field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} className="input input-bordered" />
                        {errors.price && <span className='text-rose-400'>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" {...register("rating", { required: true })} className="input input-bordered" />
                        {errors.rating && <span className='text-rose-400'>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="number" {...register("quantity", { required: true })} className="input input-bordered" />
                        {errors.quantity && <span className='text-rose-400'>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" {...register("description", { required: true })} className="input input-bordered" />
                        {errors.description && <span className='text-rose-400'>This field is required</span>}
                    </div>

                </div>

                <input className="btn btn-primary btn-block " type="submit" />
            </form>
        </div>
    );
};

export default AddToys;