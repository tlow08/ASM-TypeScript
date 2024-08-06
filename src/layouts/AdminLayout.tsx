import { Link, Outlet } from 'react-router-dom';
import HeaderAdmin from '../components/HeaderAdmin';

const AdminLayout = () => {
  return (
    <>
      <HeaderAdmin />
      <main className="grid grid-cols-5 pt-12 gap-3">
        <section className="grid grid-cols-1 p-2">
          <div className="w-[300px] lg:fixed z-51">
            <div className="w-full flex justify-center items-center ">
              <img
                className="rounded-full w-[80px] h-[80px]"
                src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-84.jpg"
                alt="Admin Avatar"
              />
            </div>
            <p className="text-center py-2">Hello admin</p>
            <ul className="w-full text-base font-semibold text-yellow-700 border-yellow-700 mt-4 grid grid-cols-1">
              <li className="w-full mb-3 border-b-2">
                <Link to="/admin/dashboard" className="p-2">Dashboard</Link>
              </li>
              <li className="w-full mb-3 border-b-2">
                <Link to="/admin/users" className="p-2">List Of Users</Link>
              </li>
              <li className="w-full mb-3 border-b-2">
                <Link to="/admin/products" className="p-2">List Of Products</Link>
              </li>
              <li className="w-full mb-3 border-b-2">
                <Link to="/admin/categories" className="p-2">List Of Categories</Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="col-span-4">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
