import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formCategory } from "../../interface/categories";

type Props = {
    onAddCategory:(data: formCategory)=> void
}

const categorySchema = z.object({
    title: z.string().min(10).refine(value => value.trim().length > 0),
    thumbnail: z.string().refine(value => value.trim().length > 0),
})
const AddCategory = ({onAddCategory} : Props) => {
    const { 
        register,
        handleSubmit,
        formState: {errors},
    }= useForm<formCategory>({
        resolver: zodResolver(categorySchema),
    })

    const onSubmit = (data: formCategory)=>{
        onAddCategory(data);
    }
  return (
    <form className="max-w-screen-md m-auto" onSubmit={handleSubmit(onSubmit)}>
        <h2  className="text-3xl font-semibold text-center">
            Add category
        </h2>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="" {...register("title", {required: true})} />
            {errors.title && <p className="text-danger">{errors.title?.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="thumbnail" className="form-label">Link thumbnail</label>
            <input type="text" className="form-control" id="" {...register("thumbnail", {required: true})} />
            {errors.thumbnail && <p className="text-danger">{errors.thumbnail?.message}</p>}
        </div>
        <div className="mb-3">
            <button className="btn btn-primary w-full">Submit</button>
        </div>
    </form>
  )
}

export default AddCategory