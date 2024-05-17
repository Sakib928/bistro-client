import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Category = () => {
  const heading = <h1>ORDER ONLINE</h1>;
  const subHeading = <p>---From 11:00am to 10:00pm---</p>;
  return (
    <div>
      <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-3xl text-center text-white -mt-16 uppercase pb-6">
            salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-3xl text-center text-white -mt-16 uppercase">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-3xl text-center text-white -mt-16 uppercase">
            soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-3xl text-center text-white -mt-16 uppercase">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="text-3xl text-center text-white -mt-16 uppercase">
            salads
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
