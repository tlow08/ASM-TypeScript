import { z } from 'zod'
import { formData } from '../../interface/products'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InCategory } from '../../interface/categories'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import instance from '../../axios'

type Props = {
    onUpdateProduct: (data: formData, id: number| string)=> void;
    categories: InCategory[];
}
const productSchema = z.object({
    name: z.string().min(6).refine(value => value.trim().length > 0, {
      message: "Name cannot be empty or just whitespace"
    }),
    price: z.number().min(0, { message: "Price must be greater than 0" }),
    image: z.string().url({ message: "Invalid URL" }).refine(value => value.trim().length > 0, {
      message: "Image URL cannot be empty or just whitespace"
    }),
    description: z.string().refine(value => value.trim().length > 0, {
      message: "Description cannot be empty or just whitespace"
    }),
    title: z.string().refine(value => value.trim().length > 0, {
        message: "Title cannot be empty or just whitespace"
      }),
    category: z.string().refine(value => value.trim().length > 0, {
      message: "Category must be selected"
    }),
  });
const UpdateProduct = ({onUpdateProduct, categories}: Props) => {
    const {id} = useParams<{id: string}>();
    const{ 
        register,
        handleSubmit,
        formState : {errors},
        reset,
    } = useForm<formData>({
        resolver: zodResolver(productSchema),
    });

    useEffect(()=>{
        const fetchProduct = async()=>{
            try{
                if(id){
                    const {data} = await instance.get(`/products/${id}`);
                    reset({
                        ...data,
                        category: data.category.toString()
                    });
                }
            }catch(error){
                console.log(error);
            }
        };
        fetchProduct();
    },[id, reset])
    const onSubmit = (data : formData)=>{
        if(id){
            const transformedData = {...data, category: parseInt(data.category)};
            onUpdateProduct(transformedData, id);
        }else{
            console.log("ID is not defined!")
        }
        // const transformedData = { ...data, category: parseInt(data.category) };
        // onUpdateProduct(transformedData);
    }
  return (
    <form className="max-w-screen-md m-auto" onSubmit={handleSubmit(onSubmit)}>
         <h2  className="text-3xl font-semibold text-center">
            Add product
        </h2> 
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Name</label>
            <input type="text" className="form-control" id="" {...register("name", {required: true})} />
            {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" id="" {...register("price", {required: true, valueAsNumber:true})} />
            {errors.price && <p className="text-danger">{errors.price.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="image" className="form-label">Link image</label>
            <input type="text" className="form-control" id="" {...register("image", {required: true})} />
            {errors.image && <p className="text-danger">{errors.image.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="" {...register("title", {required: true})} />
            {errors.title && <p className="text-danger">{errors.title.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="" {...register("description", {required: true})} />
            {errors.description && <p className="text-danger">{errors.description.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="category" className='form-label'>Category</label>
            <select className="form-control" id="category" {...register("category")}>
                <option value="">Select Category</option>
                {categories.map((category)=>(
                    <option key={category.id} value={category.id}>{category.title}</option>
                ))}
            </select>
            {errors.category && <p className='text-danger'>{errors.category.message}</p>}
        </div>
        <div className="mb-3">
            <button className="btn btn-primary w-full">Submit</button>
        </div>
    </form>
  )
}

export default UpdateProduct