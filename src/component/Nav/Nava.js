import React, { useEffect, useState } from "react";
import "./Nava.css";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Menu from "../Menu/Menu";

const Nava = () => {
  const [lock, setLock] = useState(false);
  lock ? disableBodyScroll(document) : enableBodyScroll(document);

  const [colorChange, setColorchange] = useState(false);

  // window.addEventListener("scroll", changeNavbarColor);

  return (
    <div>
      <div className="nav-giday">
        <div className="nav-closed">
          <div className={"nav-all-close"}>
            <div>
              <div onClick={() => setLock(!lock)}>
                <Menu />
              </div>
            </div>
            <div>
              {" "}
              <img
                src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/olivia-dark.png"
                width="300"
                alt="Perfume Logo, product list anwar fragnances"
              />
            </div>
            <div>hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nava;
