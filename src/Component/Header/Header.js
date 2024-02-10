import React from "react";
import fb from "../../Assets/fb.png";
import coin from "../../Assets/coin.png";
import star from "../../Assets/star.png";

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 ">
        <div className="py-3 sm:rounded-tr-3xl sm:rounded-br-3xl bg-gradient-to-t from-yellow-600 via-amber-200 to-yellow-500">
          <div className="flex justify-between">
            <div>
              <img src={fb} height={30} alt="#" width={20} className="ms-3" />
            </div>
            <div className="flex me-6">
              <img src={coin} height={30} width={20} className="ms-3 relative -right-4" />
              <p className="bg-pink-900 rounded-full px-9 text-center text-white">
                100,214,474
              </p>
            </div>
          </div>
        </div>
        <div className="bg-green-600 text-center outline-offset-  outline-yellow-700 border-orange-700 border-6 text-2xl flex justify-center rounded-full text-white font-bold bg-gradient-to-t from-green-500 via-amber-400 to-green-500">
          <button>BUY</button>
        </div>
        <div className="py-3 sm:rounded-bl-3xl sm:rounded-tl-3xl bg-gradient-to-t from-yellow-600 via-amber-200 to-yellow-500">
          <div className="flex justify-center">
            <div className="flex me-6">
              <img src={star} alt="#" height={20} width={20} className="ms-3 relative -right-3" />
              <div>
                <div className="bg-yellow-900 pe-24 rounded-full">
                  <div className="bg-green-200 rounded-full">
                    <p className="text-end ps-16 pe-2">30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
