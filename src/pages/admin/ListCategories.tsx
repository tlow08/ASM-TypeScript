import { InCategory } from '../../interface/categories'
import { Link } from 'react-router-dom'

type Props = {
    categories : InCategory[],
    onDeleteCategory : (id: number | string)=> void
}

const ListCategories = ({categories, onDeleteCategory}: Props) => {
  return (
    <section className='mt-5'>
        <h2 className=' text-center text-3xl font-semibold'>List Of Categories</h2>
        <Link to="/admin/add-category" className='btn btn-primary'>Add new category</Link>
        <table className='table table-striped '>
            <thead>
                <tr>
                <th>#</th>
                <th>ID</th>
                <th>Title</th>
                <th>Thumbnail</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((item)=>(
                    <tr key={item.id}>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td><img src={item.thumbnail} alt="" className='max-h-[80px] w-auto' /></td>
                        <td>
                            <div  className='flex gap-2'>
                            <Link to={`/admin/update-category/${item.id}`} className='btn btn-warning'>Update</Link>
                            <button onClick={()=>onDeleteCategory(item.id)} className='btn btn-danger'>Delete</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  )
}

export default ListCategories