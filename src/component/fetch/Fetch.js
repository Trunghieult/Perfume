import React, { useState } from "react";
import "./Fetch.css";

const Fetch = () => {
  const [array, setArray] = useState([]);

  fetch("https://perfume-backend.onrender.com/filter?random=true", {
    method: "GET",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => array.length === 0 && setArray(data.list.slice(0, 7)));
  console.log(array);

  const grid = array.map((product, index) => {
    return (
      <img
        className={`img-${index + 1}`}
        src={product.image[0]}
        alt={product.name}
        key={product._id}
      />
    );
  });

  return <div className="grid-img"> {grid}</div>;
};

export default Fetch;
