import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./Login.css";
import Mask from "../Mask/Mask";

const Log = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <div className="log">
        <div className="log-left">
          <div className="log-con">
            {isLogin ? <Login /> : <Register />}
            <div onClick={handleToggle} className="log-con-ch">
              {isLogin ? "Register" : "Login"}
            </div>
          </div>
        </div>
        <Mask />
      </div>
    </div>
  );
};

export default Log;
