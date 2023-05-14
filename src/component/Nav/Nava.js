import React, { useState } from "react";
import "./Nava.css";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Nava = () => {
  const [lock, setLock] = useState(false);
  lock ? disableBodyScroll(document) : enableBodyScroll(document);

  

  return (
    <div className="nav-giday">
      <div className="nav-closed">
        <div className="nav-all-close">
          <div>
            <div onClick={() => setLock(!lock)}>Menu</div>
            <div></div>
          </div>
          <div>Logo</div>
          <div>hello</div>
        </div>
      </div>
    </div>
  );
};

export default Nava;
