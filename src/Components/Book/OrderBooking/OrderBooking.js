import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext, userOrderContext } from "../../../App";

const OrderBooking = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [selcOrder, setSelcOrder] = useContext(userOrderContext);
  console.log("selcOrder", selcOrder);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const datas = {
      ...selcOrder,
      ...loginUser,
      date: new Date().toDateString(),
      data,
    };
    console.log(datas);
    fetch("http://localhost:10000/addClientOrder", {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input defaultValue="test" {...register("example")} /> */}

        <input
          {...register("clientName", { required: true })}
          defaultValue={loginUser.name}
          className="form-control w-75 mt-5"
          placeholder="Your Name"
        />

        {errors.clientName && <span>Name is required</span>}
        <br />
        <input
          type="tex"
          {...register("clientEmail", { required: true })}
          defaultValue={loginUser.email}
          className="form-control w-75"
          placeholder="Your Email Address"
        />

        {errors.clientEmail && <span>This field is required</span>}
        <br />
        <input
          type="tex"
          {...register("orderName", { required: true })}
          defaultValue={selcOrder.orderName}
          className="form-control w-75"
          placeholder="Your Order Name"
          style={{
            padding: "26px 10px",
          }}
        />

        {errors.orderName && <span>This field is required</span>}
        <br />
        <input
          type="tex"
          {...register("clientAddress", { required: true })}
          className="form-control w-75"
          placeholder="Your Address"
          style={{
            paddingTop: " 22px",
            paddingBottom: "70px",
            paddingRight: "15px",
          }}
        />

        {errors.clientAddress && <span>This field is required</span>}
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default OrderBooking;
