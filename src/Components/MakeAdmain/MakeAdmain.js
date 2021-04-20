import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import AddAdmainSarvices from "../Admain/AddAdmainSarvices/AddAdmainSarvices";
import Admain from "../Admain/Admain/Admain";
import Sidebar from "../Admain/Sidebar/Sidebar";

const MakeAdmain = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [isAdmain, setIsAdmain] = useState(false);
  //////====================/////////
  const [prddetls, setPrdDetls] = useState([]);
  useEffect(() => {
    fetch("https://arcane-gorge-96812.herokuapp.com/ourProduct")
      .then((res) => res.json())
      .then((data) => {
        setPrdDetls(data);
      });
  }, []);
  ///////====================/////////
  useEffect(() => {
    fetch("https://arcane-gorge-96812.herokuapp.com/isAdmain", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loginUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmain(data));
  }, []);
  return (
    <section>
      {isAdmain && (
        <div className="row " style={{ background: "#f4fdfb" }}>
          <div className="col-md-5">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-7 ">
            <AddAdmainSarvices yoyo={true}></AddAdmainSarvices>
          </div>
        </div>
      )}
    </section>
  );
};

export default MakeAdmain;
