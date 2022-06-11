import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutReq } from "../Store/auth/authActions";

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutReq());
  }
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        height: "40px",
        padding: "0px 30px",
        alignItems: "center",
        backgroundColor : "whitesmoke"
      }}
    >
      <button onClick={handleClick}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
