// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "./../interface/products";
import { InCategory } from "../interface/categories";

type Props = {
  products: IProduct[];
  categories: InCategory[];
};

const ShopPage = ({ products, categories }: Props) => {
  // console.log(products);
  // console.log(categories);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category === parseInt(selectedCategory)
      )
    : products;
  return (
    <>
      <main>
        <section className="bg-gradient-to-r from-[#BDDFB8] to-[#F2F6EE] w-full">
          <div className="container max-w-screen-xl py-[75px]">
            <h1 className="text-[#505F4E] text-3xl font-semibold">
              Töpfe & Behälter
            </h1>
          </div>
        </section>
        <section className="container max-w-screen-xl mt-[30px] grid grid-cols-4 gap-20 text-[#505F4E] text-xl font-semibold">
          <div className="flex bg-[#D2E8CD] items-center gap-3 p-2 rounded-md max-w-[200px] max-h-[60px]">
            <img src="./images/dm01.png" alt="" />
            <h5 className="text-[15px]">Chậu vuông</h5>
          </div>
          <div className="flex bg-[#D2E8CD] items-center gap-3 p-2 rounded-md  max-w-[200px] max-h-[60px]">
            <img src="./images/dm01.png" alt="" />
            <h5 className="text-[15px]">Chậu tròn</h5>
          </div>
          <div className="flex bg-[#D2E8CD] items-center gap-3 p-2 rounded-md  max-w-[200px] max-h-[60px]">
            <img src="./images/dm01.png" alt="" />
            <h5 className="text-[15px]">Đế lót ly</h5>
          </div>
          <div className="flex bg-[#D2E8CD] items-center gap-3 p-2 rounded-md  max-w-[200px] max-h-[60px]">
            <img src="./images/dm01.png" alt="" />
            <h5 className="text-[15px]">Chậu trồng cây</h5>
          </div>
        </section>
        <section className="container max-w-screen-xl mt-[120px] flex gap-8">
          <div className="flex items-center gap-2">
            <p className="text-xl">Sắp xếp theo danh mục:</p>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="border border-gray-300 w-[220px] p-2 rounded-lg"
              aria-label="Default select example"
            >
              <option value="">Tất cả danh mục</option>
              {categories.map((itemCategory) => (
                <option key={itemCategory.id} value={itemCategory.id}>
                  {itemCategory.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xl">Trình diễn :</p>
            <select
              name=""
              id=""
              className="border border-gray-300 w-[220px] p-2 rounded-lg"
            >
              <option value="0">Default</option>
              <option value="1">Newest</option>
              <option value="2">Newest</option>
            </select>
          </div>
        </section>
        <section className="container max-w-screen-xl mt-2 grid grid-cols-5">
          <div className="col-span-4 grid grid-cols-3 gap-8 mt-4">
            {filteredProducts.map((item) => (
              <div key={item.id}>
                <div className="w-[50px] h-[24px] bg-gray-600 rounded-md text-white text-base">
                  <p className="text-center">Sell</p>
                </div>
                <div className="flex justify-center">
                  <div className="relative image-container max-w-[200px] max-h-[200px]">
                    <img
                      className="object-cover h-full"
                      src={item.image}
                      alt="Image"
                    />
                    <div className="overlay flex gap-2">
                      <a className="  py-1 px-2 bg-[#4E7C32] text-white text-xl font-semibold">
                        <i className="bi bi-cloud-arrow-down"></i>
                      </a>
                      <a className=" py-1 px-2 bg-[#4E7C32] text-white text-xl font-semibold">
                        <i className="bi bi-bag-check font-bold"></i>
                      </a>
                      <a className=" py-1 px-2 bg-[#4E7C32] text-white text-xl font-semibold">
                        <i className="bi bi-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <Link to={`/product-detail/${item.id}`}>
                    <h3 className="text-[16px] font-bold mt-2">{item.name}</h3>
                  </Link>
                  <div className="flex gap-2 text-[15px] text-gray-400">
                    <p>${item.price}</p>
                    <p className="line-through">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* <div>
              <div className="w-[50px] h-[24px]  rounded-md text-white text-base"></div>
              <div className="flex justify-center">
                <div className="relative image-container">
                  <img
                    className="object-cover"
                    src="./images/sp01.png"
                    alt="Image"
                  />
                  <div className="overlay flex gap-2">
                    <a className="text-white  py-1 px-2 hover:bg-[#4E7C32] hover:text-white text-xl font-semibold">
                      <i className="bi bi-cloud-arrow-down"></i>
                    </a>
                    <a className="text-white  py-1 px-2 hover:bg-[#4E7C32] hover:text-white text-xl font-semibold">
                      <i className="bi bi-bag-check font-bold"></i>
                    </a>
                    <a className="text-white py-1 px-2 hover:bg-[#4E7C32] hover:text-white text-xl font-semibold">
                      <i className="bi bi-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[16px] font-bold mt-2">
                  Square cultivation pots
                </h3>
                <div className="flex gap-2 text-[15px] text-gray-400">
                  <p>$38.00</p>
                  <p className="line-through">$58.00</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-span-1">
            <h2 className="text-3xl font-semibold text-[#505F4E] mb-[30px] text-center">
              Thể loại
            </h2>
            <div className="text-base">
              <div className="flex gap-2 mb-[20px] justify-center">
                <input type="checkbox" name="" id="" />
                <p>Chậu vuông</p>
              </div>
              <div className="flex gap-2 mb-[20px] justify-center">
                <input type="checkbox" name="" id="" />
                <p>Chậu vuông</p>
              </div>
              <div className="flex gap-2 mb-[20px] justify-center">
                <input type="checkbox" name="" id="" />
                <p>Chậu vuông</p>
              </div>
              <div className="flex gap-2 mb-[20px] justify-center">
                <input type="checkbox" name="" id="" />
                <p>Chậu vuông</p>
              </div>
            </div>
            <div className="flex justify-center ">
              <img className="mt-[10px]" src="./images/shop01.png" alt="" />
            </div>
            <div className="mt-[20px]  mb-[8px]">
              <h5 className="text-[#333333] text-xl font-semibold">
                Lọc theo giá
              </h5>
              <div className="border-t-4 border-[#4E7C32] flex justify-between text-lg text-gray-400">
                <p>Từ $0 tới $8000</p>
                <p>Lọc</p>
              </div>
            </div>
            <div className="mt-[20px]  mb-[8px]">
              <h5 className="text-[#333333] text-xl font-semibold">
                Lọc theo giá
              </h5>
              <div className="border-t-4 border-[#4E7C32] flex justify-between text-lg text-gray-400">
                <p>Từ $0 tới $8000</p>
                <p>Lọc</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container max-w-screen-md mt-16 pb-16">
          <div className="text-[#505F4E] text-[40px] font-semibold ">
            <p>Đăng ký để*</p>
            <p>_ Nhận bản tin</p>
          </div>
          <div className="flex justify-center gap-[90px] mt-[50px]">
            <div className="max-w-[230px] h-auto text-sm text-[#555555]">
              <p className="text-justify">
              Nhận thông tin cập nhật hàng tuần về sản phẩm của chúng tôi qua email của bạn, đảm bảo không có thư rác, chúng tôi hứa
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

export default ShopPage;
