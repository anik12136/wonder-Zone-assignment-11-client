import { useForm } from "react-hook-form";
import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";

const UpdateToys = () => {

    const ToyDetails = useLoaderData();

    // const  [updateData,setUpdateData]= useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    

    const handleUpdateToy = (data) => {
        // fetch(`http://localhost:5000/updateToy/${data?._id}`,{
        fetch(`https://assignment-11-serve-site.vercel.app/updateToy/${data?._id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      
                }
            }
            )
    };

// console.log(addedToy)

return (
    <form className='mx-40' onSubmit={handleSubmit(handleUpdateToy)}>

        <div className=" mt-10 mb-10 w-50%">

            {/* hidden id */}
            <div className="form-control invisible">
                <label className="label">
                </label>
                <input type="text" defaultValue={ToyDetails?._id} {...register("_id",)} className="input input-bordered" />
            </div>
            {/* ......... */}

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>

                <input {...register("price", { required: true })} defaultValue={ToyDetails?.price} type="text" className="input input-bordered" />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <input defaultValue={ToyDetails?.quantity} type="text" {...register("quantity", { required: true })} placeholder="email" className="input input-bordered" />

            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input type="text" {...register("toy_name", { required: true })} className="input input-bordered" />
                {errors.toy_name && <span className='text-rose-400'>This field is required</span>}
            </div>

        </div>
        <input className="btn btn-primary btn-block mb-10" type="submit" />
    </form>
);

};

export default UpdateToys;