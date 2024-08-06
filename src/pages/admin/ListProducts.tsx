import { Link } from "react-router-dom"
import { InCategory } from "../../interface/categories"
import { IProduct } from "../../interface/products"

type Props = {
    products: IProduct[],
    categories: InCategory[],
    onDeleteProduct : (id: number | string) =>void,
}

const ListProducts = ({products, categories, onDeleteProduct}: Props) => {
    const getCategoryTitle = (categoryId : number|string)=>{
        const category = categories.find(category => category.id === categoryId);
        return category ? category.title : <p className="text-danger">"Unknown Category"</p>;
    }
  return (
    <section className="mt-5">
        <h2 className=' text-center text-3xl font-semibold'>List Of Products</h2>
        <Link to="/admin/add-product" className="btn btn-primary">Add new product</Link>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item)=>(
                    <tr key={item.id}>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>{item.name}</td>
                        <td><img width={90} src={item.image} alt="" /></td>
                        <td>{item.price}</td>
                        <td>{item.title}</td>
                        <td>{getCategoryTitle(item.category)}</td>
                        <td>
                            <Link  to={`/admin/update-product/${item.id}`} className="btn btn-warning">Update</Link>
                            <button onClick={()=>onDeleteProduct(item.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  )
}

export default ListProducts