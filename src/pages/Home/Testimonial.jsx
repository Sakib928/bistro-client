import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const heading = "testimonial";
  const subHeading = "What Out Clients Sat";
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="max-w-4xl mx-auto">
      <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review._id}>
              <div className="my-16 mx-24 text-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                  className="mx-auto"
                />
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
