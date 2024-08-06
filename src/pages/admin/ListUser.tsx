import { useEffect, useState } from "react"
import { InUser } from "../../interface/users"
import instance from "../../axios";


const ListUser = () => {
    const [users, setUsers] = useState<InUser>([]);

    useEffect(()=>{
        (async ()=>{
            try {
                const {data} = await instance.get("/users");
                setUsers(data);
            }catch(error){
                console.log(error);
            }
        })()
    }, []);
  return (
    <section className="mt-5">
        <h2 className=' text-center text-3xl font-semibold'>List Of Users</h2>
        <table className='table table-striped '>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item) =>(
                    <tr key={item.id}>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  )
}

export default ListUser