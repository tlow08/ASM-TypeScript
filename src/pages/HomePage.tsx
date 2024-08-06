// import React from 'react'

import { Link } from "react-router-dom";
import { IProduct } from "../interface/products";
import { InCategory } from "./../interface/categories";

type Props = {
  products: IProduct[];
  categories: InCategory[];
};

const HomePage = ({ products, categories }: Props) => {
  // console.log(products);
  // console.log(categories);
  return (
    <>
      <main className="bg-[#F8F4F0]">
        <section className="">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner bg-gradient-to-r from-[#B5DCB0] to-[#F9F3EE] max-h-[597px] w-full">
              <div className="carousel-item active relative">
                <img
                  src="./images/banner01.png"
                  className="d-block w-100 object-cover"
                  alt=""
                />
                <div className="absolute inset-0 ">
                  <div className="pt-[120px] pl-[190px] ">
                    <p className="max-w-[720px] h-auto font-semibold text-[#505F4E] text-[55px]">
                      Chúng tôi chăm sóc khu vườn và ngôi nhà xinh đẹp của bạn
                    </p>
                    <p className="my-4 text-[15px] text-[#665345] max-w-[400px] h-auto">
                      Lorem Ipsum Ipsum chỉ đơn giản là văn bản giả của ngành in
                      ấn và sắp chữ. Lorem Ipsum đã là văn bản giả chuẩn của
                      ngành kể từ những năm 1500,
                    </p>
                    <a
                      className=" border-2 text-xl  border-[#505F4E] text-[#505F4E] py-[12px] px-[30px] hover:bg-[#505F4E] hover:text-white"
                      href=""
                    >
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/banner01.png"
                  className="d-block w-100"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./images/banner01.png"
                  className="d-block w-100"
                  alt=""
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <div className="container max-w-screen-xl mt-12">
          <h1 className="text-[#505F4E] text-3xl font-bold">Bán chạy nhất</h1>
        </div>
        <hr className="my-4" />
        <section className="bg-white py-4">
          <div className="container max-w-screen-xl grid grid-cols-4 gap-20">
            {products.map((item) => (
              <div key={item.id}>
                <div className="bg-white text-white max-w-[30px]">abc</div>
                <div className="flex justify-center max-h-[230px] w-auto">
                  <Link to={`/product-detail/${item.id}`}>
                    <img
                      className="h-full w-auto hover:scale-95 duration-75"
                      src={item.image}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="text-[#665345] mt-6">
                  <Link to={`/product-detail/${item.id}`}>
                    <p className="text-base font-semibold ">{item.name}</p>
                  </Link>
                  <div className="flex justify-between text-xs">
                    <p className="text-gray-300">Dress</p>
                    <p className="font-semibold">$ {item.price}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* <div>
              <div className="bg-black text-white max-w-[30px]">
                <p className="p-1 text-[10px]">SALE</p>
              </div>
              <div className="max-h-[230px] flex justify-center overflow-hidden">
                <img
                  className="h-full w-auto  hover:scale-95 duration-75"
                  src="/images/best02.png"
                  alt=""
                />
              </div>
              <div className="text-[#665345] mt-6">
                <p className="text-base font-semibold ">Growbox</p>
                <div className="flex justify-between text-xs">
                  <p className="text-gray-300">Dress</p>
                  <div className="flex gap-4">
                    <p className="font-semibold line-through">$ 963.85</p>
                    <p className="text-red-500 font-semibold">$ 1155.00</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <section className="container max-w-screen-xl mt-[60px] flex gap-4 justify-center">
          <div className="relative">
            <img className="object-cover" src="./images/check01.png" alt="" />
            <div className="absolute inset-0  flex">
              <p className="max-h-[60px] w-full bg-white opacity-55 mt-4  text-black text-2xl font-semibold pl-5 flex items-center">
                Xẻng làm vườn
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <img className="object-cover" src="./images/check02.png" alt="" />
              <div className="absolute inset-0  flex">
                <p className="max-h-[40px] w-full bg-white opacity-55 mt-4  text-black text-xl font-semibold pl-5 flex items-center">
                  Cát
                </p>
              </div>
            </div>
            <div className="relative">
              <img className="object-cover" src="./images/check03.png" alt="" />
              <div className="absolute inset-0 flex">
                <p className="max-h-[40px] w-full bg-white opacity-55 mt-4  text-black text-xl font-semibold pl-5 flex items-center">
                  Người trồng trọt
                </p>
              </div>
            </div>
            <div className="relative">
              <img className="object-cover" src="./images/check02.png" alt="" />
              <div className="absolute inset-0  flex">
                <p className="max-h-[40px] w-full bg-white opacity-55 mt-4  text-black text-xl font-semibold pl-5 flex items-center">
                  Cát
                </p>
              </div>
            </div>
            <div className="relative">
              <img className="object-cover" src="./images/check03.png" alt="" />
              <div className="absolute inset-0 flex">
                <p className="max-h-[40px] w-full bg-white opacity-55 mt-4  text-black text-xl font-semibold pl-5 flex items-center">
                  Người trồng trọt
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="container max-w-screen-xl mt-12">
          <h1 className="text-[#505F4E] text-3xl font-bold">Danh mục</h1>
        </div>
        <hr className="my-4" />
        <section className="container max-w-screen-xl grid grid-cols-4 gap-6">
          {categories.map((item) => (
            <div className="relative h-[368px] w-[303px]" key={item.id}>
              <img
                className="object-cover h-full w-full"
                src={item.thumbnail}
                alt=""
              />
              <div className="absolute inset-0">
                <div className="text-right pt-2 pr-5">
                  <p className="text-xl font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-base text-white">30 items</p>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="container max-w-screen-md mt-16 pb-16">
          <div className="text-[#505F4E] text-[40px] font-semibold ">
            <p>Đăng ký để*</p>
            <p>_ Nhận bản tin</p>
          </div>
          <div className="flex justify-center gap-[90px] mt-[50px]">
            <div className="max-w-[230px] h-auto text-sm text-[#555555]">
              <p className="text-justify">
                Nhận thông tin cập nhật hàng tuần về sản phẩm của chúng tôi qua
                email của bạn, đảm bảo không có thư rác, chúng tôi hứa
              </p>
            </div>
            <form action="" className="w-full">
              <div className="flex bg-white p-2 gap-3">
                <div className="bg-[#F8F8F8]">
                  <i className="bi bi-envelope text-[#6C777C] p-2 text-[20px]"></i>
                </div>
                <input
                  className="placeholder:text-sm outline-none w-full"
                  type="text"
                  name=""
                  id=""
                  placeholder="youremail123@gmail.com"
                />
              </div>
              <div className="text-right ">
                <button className="bg-[#656C66] text-sm font-semibold text-white">
                  <p className="py-2 px-6">ABONNIEREN</p>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
