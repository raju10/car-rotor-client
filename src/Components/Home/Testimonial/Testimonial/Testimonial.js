import React, { useEffect, useState } from "react";
import TestimonialDetails from "../TestimonialDetails/TestimonialDetails";

const Testimonial = () => {
  const [myReview, setMyReview] = useState([]);
  useEffect(() => {
    fetch("https://arcane-gorge-96812.herokuapp.com/orderReviews")
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data);
      });
  }, []);
  return (
    <div>
      <div
        className="d-flex justify-content-center mt-5 container"
        style={{ marginBottom: "150px" }}
      >
        <div className="row ">
          <h3 style={{ textAlign: "center", paddingTop: "150px" }}>
            Testimonial
          </h3>
          {myReview.map((review) => (
            <TestimonialDetails review={review}></TestimonialDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
