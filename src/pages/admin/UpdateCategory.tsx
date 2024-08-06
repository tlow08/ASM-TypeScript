import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formCategory } from "../../interface/categories";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import instance from "../../axios";

type Props = {
    onUpdateCategory:(data: formCategory, id: number| string)=> void;
}

const categorySchema = z.object({
    title: z.string().min(10).refine(value => value.trim().length > 0),
    thumbnail: z.string().min(10).refine(value => value.trim().length > 0),
})
const UpdateCategory = ({onUpdateCategory} : Props) => {
    const {id} = useParams<{id : string}>();
    const { 
        register,
        handleSubmit,
        formState: {errors},
        reset,
    }= useForm<formCategory>({
        resolver: zodResolver(categorySchema),
    })

    useEffect(() => {
        const fetchCategory = async () => {
          try {
            if (id) {
              const { data } = await instance.get(`/categories/${id}`);
              reset(data);
            }
          } catch (error) {
            console.log("Failed to fetch category:", error);
          }
        };
    
        fetchCategory();
      }, [id, reset]);
    const onSubmit = (data: formCategory)=>{
        if(id){
          onUpdateCategory(data, id);
        }else{
          console.log("ID is not defined")
        }
    }
  return (
    <form className="max-w-screen-md m-auto" onSubmit={handleSubmit(onSubmit)}>
        <h2  className="text-3xl font-semibold text-center">
            Update Category
        </h2>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="" {...register("title", {required: true})} />
            {errors.title && <p className="text-danger">{errors.title.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="thumbnail" className="form-label">Link thumbnail</label>
            <input type="text" className="form-control" id="" {...register("thumbnail", {required: true})} />
            {errors.thumbnail && <p className="text-danger">{errors.thumbnail.message}</p>}
        </div>
        <div className="mb-3">
            <button className="btn btn-primary w-full">Submit</button>
        </div>
    </form>
  )
}

export default UpdateCategory