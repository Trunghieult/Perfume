import React from "react";
import "./Nav.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Nav = () => {
  return (
    <div>
      <div className="nav-open">
        <div className="nav-all">
          {/* Main Menu */}
          <div className="first">
            <div className="nav-con numx">
              <div className="nav-text">FEEL THE LOVE</div>
              <div className="nav-headline">
                <span className="hi">MEN</span>
                <span>&nbsp;&&nbsp;</span>
                <span className="hi">WOMEN</span>
                <br />
                <span className="hi">UNISEX</span>
              </div>
            </div>
            <div className="nav-cart">YOUR CART</div>
          </div>
          <div className="nav-con numy">
            <div className="nav-text">YOU LOOKING FOR...</div>
            <div className="nav-headline">
              <input
                type="text"
                className="nav-input"
                placeholder="find it here"
              />
            </div>
          </div>
          <div className="nav-con numz">
            <div className="nav-text">ANY QUESTION?</div>
            <div className="nav-headline halo">
              <div className="hi">CONTACT US</div>
              <div className="icon-container">
                <div className="icon hi">
                  {" "}
                  <FacebookOutlined />{" "}
                </div>
                <div className="icon hi">
                  {" "}
                  <InstagramOutlined />
                </div>
                <div className="icon hi">
                  {" "}
                  <TwitterOutlined />{" "}
                </div>
              </div>
            </div>
          </div>

          {/* Credit */}
          <div className="bottom">
            <div className="bottom-credit">
              BTMM © 2023 NVH. All rights reserved
            </div>
            {/* <div className="icon-container">
            <div className="icon">
              {" "}
              <FacebookOutlined />{" "}
            </div>
            <div className="icon">
              {" "}
              <InstagramOutlined />
            </div>
            <div className="icon">
              {" "}
              <TwitterOutlined />{" "}
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
