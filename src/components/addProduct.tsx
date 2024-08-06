import React from "react";
import { useForm } from "react-hook-form";
import { formData } from "../interface/products";

type Props = {
    onAdd:(data:formData)=>void
};

const AddProduct = ({onAdd}: Props) => {
    const {register, handleSubmit, formState: {errors}} = useForm<formData>();
    const onSubmit = (data:formData)=>{
        onAdd(data);
    }
  return (
    <>
      
      <form className="max-w-screen-md m-auto" action="" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl font-semibold text-center">Add product</h2>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Name</label>
            <input className="form-control" type="text" id="" {...register("name", {required: true, minLength:6})} />
            {errors.name && <p className="text-danger">Name product ko dc bo trong va co 6 ky tu tro len</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Image</label>
            <input className="form-control" type="text" id="" {...register("image", {required: true})} />
            {errors.image && <p className="text-danger">Image ko dc bo trong</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Price</label>
            <input className="form-control" type="number" id="" {...register("price", {required: true, valueAsNumber:true, min:0})} />
            {errors.price && <p className="text-danger">Price ko dc bo trong va phai lon hon 0</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Description</label>
            <input className="form-control" type="text" id="" {...register("description")} />
        </div>
        <div>
        <button type="submit" className="btn btn-primary w-full">Add product</button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
