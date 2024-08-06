import React, { useEffect } from 'react'
import { formData } from '../interface/products'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

type Props = {
    onEdit: (data:formData, id:number|string)=> void
}

const EditProduct = ({onEdit}: Props) => {

    const {register, handleSubmit, reset} = useForm<formData>();
    const param = useParams();
    useEffect(()=>{
        fetch(`http://localhost:3000/products/` + param.id)
        .then(res=> res.json())
        .then(product=>{
            reset({
                name: product.name,
                image: product.image,
                price: product.price,
                description: product.description
            })
        })
    },[]);
    const onSubmit = (data:formData)=>{
        onEdit(data, param.id as number|string);
    }
  return (
    <>  <form className="max-w-screen-md m-auto" action="" onSubmit={handleSubmit(onSubmit)}>
    <h2 className="text-3xl font-semibold text-center">Edit product</h2>
      <div className="mb-3">
          <label htmlFor="" className="form-label">Name</label>
          <input className="form-control" type="text" id="" {...register("name")} />
      </div>
      <div className="mb-3">
          <label htmlFor="" className="form-label">Image</label>
          <input className="form-control" type="text" id="" {...register("image")} />
      </div>
      <div className="mb-3">
          <label htmlFor="" className="form-label">Description</label>
          <input className="form-control" type="text" id="" {...register("description")} />
      </div>
      <div className="mb-3">
          <label htmlFor="" className="form-label">Price</label>
          <input className="form-control" type="number" id="" {...register("price")} />
      </div>
      <div>
      <button type="submit" className="btn btn-primary w-full">Update product</button>
      </div>
    </form></>
  )
}

export default EditProduct