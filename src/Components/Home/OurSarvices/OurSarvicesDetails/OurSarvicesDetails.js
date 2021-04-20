import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userOrderContext } from "../../../../App";
import "./OurSarvicesDetails.css";
import Order from "../../../Order/Order/Order";

const OurSarvicesDetails = ({ srvsData }) => {
  // const { img, dayPrice, carPrice } = props.srvsData;
  // const [selectedOrder, setSelectedOrder] = useState({});
  const [selcOrder, setSelcOrder] = useContext(userOrderContext);

  // const handelBuyNow = (data) => {
  //   const datas = data;
  //   delete datas._id;
  //   console.log(datas);

  //   fetch("https://arcane-gorge-96812.herokuapp.com/addOrderProducts", {
  //     method: "POST",
  //     body: JSON.stringify(datas),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // };

  return (
    <div className="col-md-4 text-center mt-5">
      <div
        className="OurSarvicesDetails-container"
        style={{ border: "1px solid #ddd", padding: "10px 15px" }}
      >
        <p className="text-secondary text-center">
          2015 Shevrolet Corvette Stingray Z51
        </p>
        <img
          // src={`data:image/png;base64,${srvsData.image.img}`}
          // src={`https://arcane-gorge-96812.herokuapp.com/${srvsData.img}`}
          src={srvsData.image}
          alt=""
          style={{ width: "100%" }}
        />
        {/* <h5 className="py-3">Day price : {srvsData.dayPrice}</h5> */}
        <h5 style={{ padding: "20px 0px" }}>
          <big style={{ color: "darkOrange" }}> Car name : </big>{" "}
          {srvsData.name}{" "}
          <span
            style={{
              paddingLeft: "20px",
              color: "green",
              fontWeight: "500",
              fontSize: "23px",
            }}
          >
            ${srvsData.price}
          </span>
        </h5>
        <Link to="/yourPlasecOrder">
          <button
            onClick={() =>
              setSelcOrder({
                ...selcOrder,
                orderName: srvsData.name,

                orderImg: srvsData.image,
                orderPrice: srvsData.price,
              })
            }
            // onClick={() => handelBuyNow(srvsData)}
            className="btn btn-success"
          >
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurSarvicesDetails;
