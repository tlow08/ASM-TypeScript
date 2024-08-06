const FooterPage = () => {
  return (
    <>
      <footer className="bg-[#053D29] text-white text-xs">
        <section className="container max-w-screen-xl grid grid-cols-4 gap-8 pt-[30px]">
          <div>
            <p className="leading-7 mt-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex gap-8 mt-[30px]">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-facebook"></i>
            </div>
          </div>
          <div >
            <p className="text-sm font-semibold">Xung quanh</p>
            <div className="grid grid-cols-1 gap-[10px] mt-[20px]" >
                <p>Liên hệ chúng tôi
                </p>
                <p>Về chúng tôi</p>
                <p>Sự nghiệp
                </p>
                <p>Thông tin công ty
                </p>
            </div>
          </div>
          <div >
            <p className="text-sm font-semibold">Giúp đỡ
            </p>
            <div className="grid grid-cols-1 gap-[10px] mt-[20px]" >
                <p>Nhà sản xuất của chúng tôi</p>
                <p>Sự chi trả
                </p>
                <p>Lô hàng
                </p>
                <p>
                Hủy & Trả hàng </p>
                <p>Báo cáo một sự vi phạm
                </p>
            </div>
          </div>
          <div >
            <p className="text-sm font-semibold">Chính trị
            </p>
            <div className="grid grid-cols-1 gap-[10px] mt-[20px]" >
                <p>Đảm bảo hoàn trả
                </p>
                <p>Điều khoản sử dụng
                </p>
                <p>Bảo vệ
                </p>
                <p>Sự riêng tư
                </p>
                <p>Thư mục trang
                </p>
            </div>
          </div>
        </section>
        <section className=" bg-[#062F21]">
            <div className="container max-w-screen-xl flex justify-between py-2">
            <div>
                <p>tailoi@Copyright</p>
            </div>
            <div>
                <img src="../images/icons_payment 1.png" alt="" />
            </div>
            <div>
                <p>14/07/2024</p>
            </div>
            </div>
        </section>
      </footer>
    </>
  );
};

export default FooterPage;
