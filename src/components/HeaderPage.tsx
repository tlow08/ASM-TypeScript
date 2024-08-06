import { Link } from "react-router-dom";

const HeaderPage = () => {
  return (
    <header className="bg-gradient-to-r from-[#568a35] to-[#aaa89e] w-full">
      <section className="container max-w-screen-xl pt-6">
        <div className="flex gap-32 justify-end text-base">
          <form
            action=""
            className="max-h-[42px] bg-white flex justify-center "
          >
            <input
              className="w-[525px] h-[42px] pl-8 outline-none"
              type="text"
              placeholder="Tìm kiếm theo sản phẩm, nhãn hiệu và hơn thế nữa"
            />
            <button>
              <i className="bi bi-search mr-2"></i>
            </button>
          </form>
          <select
            name=""
            id=""
            className="bg-transparent outline-none text-white"
          >
            <option value="0" className="bg-none text-black">
              EN
            </option>
            <option value="1" className="bg-none text-black">
              VI
            </option>
          </select>
          <div className="flex gap-8 text-white">
            <Link to="/login" className="flex items-center space-x-2">
              <i className="bi bi-person text-[24px]"></i>
              <p>Tài khoản</p>
            </Link>
            <a href="" className="flex items-center space-x-2">
              <i className="bi bi-bag-check text-[24px]"></i>
              <p className="text-[14px]">Cửa hàng</p>
            </a>
          </div>
        </div>
      </section>
      <section className="container max-w-screen-xl mt-2 py-6 text-white flex justify-center gap-3 border-t-2 text-[13px]">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle bg-transparent border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hộp trồng trọt
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                <Link to="/">Home</Link>
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                <Link to="/shop">Shop</Link>
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle bg-transparent border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Phân bón
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle bg-transparent border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Đất & chất nền
          </button >
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle bg-transparent border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Chậu & Hộp đựng
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle bg-transparent border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Thủy lợi
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle bg-transparent border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Cây & Làm vườn
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle bg-transparent border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Thông gió và điều hòa không khí
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
       
      
      </section>
    </header>
  );
};

export default HeaderPage;
