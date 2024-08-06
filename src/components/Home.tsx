
import { Link } from 'react-router-dom';
import { IProduct } from './../interface/products';
type Props = {
  products:IProduct[],
  onDelete:(id:number|string)=>void
}
const Home = ({products, onDelete}:Props) => {
  return (
    <>
    <section className='max-w-screen-xl m-auto'>

    <h2 className="text-3xl font-semibold text-center">List of product</h2>

      <Link to="/add-product" className='btn btn-primary'>Add new product</Link>
       <table className='w-full table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(item =>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><img className='max-w-60 h-auto' src={item.image} alt="" /></td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <Link className='btn btn-warning' to={`/edit-product/${item.id}`}>Edit</Link>
                <button className='btn btn-danger' onClick={()=>onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
       </table>
       </section>
    </>
  )
}

export default Home
