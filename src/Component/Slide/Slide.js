import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../../Data";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./index.css";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="bg">
      <Header />
      <div className="flex justify-center h-[82vh]">
        <div className="container m-auto justify-center items-center flex ">
          <div className="m-auto w-3/4">
            <Slider {...settings}>
              {Data.map((item, index) => (
                <div key={index} className="slider-item">
                  <div
                    className="text-white border-2 border-yellow-300 rounded py-14 me-3 justify-center bg-cover bg-no-repeat slider-item-content"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      height: "60vh",
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <h2 className="text-center text-4xl font-bold">
                      {item.title}
                    </h2>
                    <p className="text-center text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Slide;
