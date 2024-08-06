// import React from 'react'

import { useParams } from "react-router-dom";
import { IProduct } from "../interface/products";
import { useEffect, useState } from "react";
import instance from "../axios";

type Props = {
  products: IProduct[];
}

const DetailPage = ({products} : Props) => {
  const { id } = useParams<{ id: string }>();

  const [item, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  if (!item) return <div>Loading...</div>;
  return (
    <>
      <main>
        <section className="container max-w-screen-xl mt-16 grid grid-cols-2 gap-8">
          <div>
            <div className="h-[355px] w-[355px] mx-auto">
              <img className="w-full h-full" src={item.image} alt="" />
            </div>
            <div className="flex gap-8 justify-center mt-[56px]">
             <div className="w-[106px] h-[106px] p-1 hover:border-2 hover:border-black hover:rounded-md">
             <img className="w-full h-full" src={item.image} alt="" />
             </div>
             <div className="w-[106px] h-[106px] p-1 hover:border-2 hover:border-black hover:rounded-md">
             <img className="w-full h-full" src={item.image} alt="" />
             </div>
             <div className="w-[106px] h-[106px] p-1 hover:border-2 hover:border-black hover:rounded-md">
             <img className="w-full h-full" src={item.image} alt="" />
             </div>
            </div>
          </div>
          {/* <div>
            <div className="slider-for w-[355px] h-[355px] m-auto">
              <div>
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt="Image 1"
                />
              </div>
              <div>
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt="Image 2"
                />
              </div>
              <div>
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt="Image 3"
                />
              </div>
            </div>
            <div className="slider-nav mt-[20px] flex justify-center gap-12">
              <div>
                <img
                  className="w-[100px] h-[100px] object-cover"
                  src={item.image}
                  alt="Thumbnail 1"
                />
              </div>
              <div>
                <img
                  className="w-[100px] h-[100px] object-cover"
                  src={item.image}
                  alt="Thumbnail 2"
                />
              </div>
              <div>
                <img
                  className="w-[100px] h-[100px] object-cover"
                  src={item.image}
                  alt="Thumbnail 3"
                />
              </div>
            </div>
          </div> */}
          <div>
            <p className="text-[#4E7C32] font-semibold text-[14px]">PLANT</p>
            <h1 className="text-[44px] mt-[20px] font-bold ">{item.name}</h1>
            <p className="my-[20px] text-[#68707D] text-[16px] font-medium">
              {item.title}
            </p>
            <div className="flex items-center gap-3">
              <h4 className="text-3xl font-bold">${item.price}</h4>
              <p className="text-[#505F4E] font-bold text-[16px] bg-red-200 px-2 rounded-sm">
                50%
              </p>
            </div>
            <p className="mt-2 line-through text-[16px] font-bold">
              ${item.price}
            </p>
            <div className="flex gap-4 mt-3">
              <div className="bg-[#F7F8FD] flex items-center gap-5 px-3 text-base font-semibold rounded-md">
                <button>-</button>
                <p>4</p>
                <button>+</button>
              </div>
              <div className="bg-[#4E7C32] px-5 py-2 text-white rounded-md hover:bg-[#365721]">
                <button className="flex gap-2">
                  <i className="bi bi-cart2"></i>
                  <p>Add to cart</p>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="container max-w-screen-xl mt-16">
          <h3 className="text-3xl font-medium text-[#4E7C32]">Mô tả </h3>
          <p className="text-[#665345] text-xl leading-7 mt-2 max-w-[950px] ">
            {item.description}
          </p>
          <h3 className="text-3xl font-medium text-[#4E7C32] mt-4">
            Giới thiệu{" "}
          </h3>
          <p className="text-[#665345] text-xl leading-7 mt-2 max-w-[950px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled i
          </p>
        </section>
        <section className="container max-w-screen-xl mt-16 grid grid-cols-2 gap-8">
          <div>
            <div className="flex gap-3 items-center">
              <img
                className="max-w-[183px] h-[183px]"
                src={item.image}
                alt=""
              />
              <div>
                <div className="flex gap-1 text-2xl">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <div className="flex gap-1 justify-center items-center">
                  <h4 className="text-3xl text-[#4E7C32]">5.0</h4>
                  <p>(233)</p>
                </div>
              </div>
            </div>
            <div className="flex items-center  mt-[42px] gap-2">
              <p>1</p>
              <i className="bi bi-star-fill"></i>
              <div className="flex-grow border-t-4 border-[#A2A0A0]"></div>
              <p>(388)</p>
            </div>
            <div className="flex items-center  mt-1 gap-2">
              <p>2</p>
              <i className="bi bi-star-fill"></i>
              <div className=" border-t-4 border-[#D9D9D9] w-[80px]"></div>
            </div>
            <div className="flex items-center  mt-1 gap-2">
              <p>3</p>
              <i className="bi bi-star-fill"></i>
              <div className=" border-t-4 border-[#D9D9D9] w-[80px]"></div>
            </div>
            <div className="flex items-center  mt-1 gap-2">
              <p>4</p>
              <i className="bi bi-star-fill"></i>
              <div className=" border-t-4 border-[#D9D9D9] w-[80px]"></div>
            </div>
            <div className="flex items-center  mt-1 gap-2">
              <p>5</p>
              <i className="bi bi-star-fill"></i>
              <div className=" border-t-4 border-[#D9D9D9] w-[80px]"></div>
            </div>
          </div>
          <div>
            <a
              className="bg-[#4E7C32] text-white text-[14px] py-[6px] px-[16px] rounded-lg hover:bg-green-800"
              href=""
            >
              Write reviews
            </a>
          </div>
        </section>
        <section className="container max-w-screen-xl mt-16 grid grid-cols-2">
          <div className="p-3">
            <div className="flex gap-[23px] items-center ">
              <h4 className="text-[#4E7C32] text-xl">Aman gupta</h4>
              <div className="flex gap-1 text-base">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>

            <div>
              <p className="text-justify text-[#665345] text-md leading-5 mt-2">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
          </div>
          <div className="p-3">
            <div className="flex gap-[23px] items-center ">
              <h4 className="text-[#4E7C32] text-xl">Aman gupta</h4>
              <div className="flex gap-1 text-base">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>

            <div>
              <p className="text-justify text-[#665345] text-md leading-5 mt-2">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
          </div>
          <div className="p-3">
            <div className="flex gap-[23px] items-center ">
              <h4 className="text-[#4E7C32] text-xl">Aman gupta</h4>
              <div className="flex gap-1 text-base">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>

            <div>
              <p className="text-justify text-[#665345] text-md leading-5 mt-2">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
          </div>
          <div className="p-3">
            <div className="flex gap-[23px] items-center ">
              <h4 className="text-[#4E7C32] text-xl">Aman gupta</h4>
              <div className="flex gap-1 text-base">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>

            <div>
              <p className="text-justify text-[#665345] text-md leading-5 mt-2">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-[35px]">
          <a className="text-white bg-[#4E7C32] py-1 px-2 rounded-md" href="">
            See all
          </a>
        </div>
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

export default DetailPage;
