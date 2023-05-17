// import React, { useState } from "react";
import "./Fetch.css";

// const Fetch = () => {
//   const [array, setArray] = useState([]);

//   fetch("https://perfume-backend.onrender.com/filter?random=true", {
//     method: "GET",
//     // credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => array.length === 0 && setArray(data.list.slice(0, 7)));
//   console.log(array);

//   const grid = array.map((product, index) => {
//     return (
//       <img
//         className={`img-${index + 1}`}
//         src={product.image[0]}
//         alt={product.name}
//         key={product._id}
//       />
//     );
//   });

//   return <div className="grid-img"> {grid}</div>;
// };

// export default Fetch;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://perfume-backend.onrender.com/products?name=${value}`
        );
        // console.log(data.list);
        setSuggestions(res.data.list || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [value]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search data..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setHideSuggestions(false);
        }}
        onBlur={() => {
          setTimeout(() => {
            setHideSuggestions(true);
          }, 100);
        }}
        style={{ width: "300px", height: "40px", fontSize: "20px" }}
      />
      <div className="bar">
        {!hideSuggestions && (
          <div>
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  onClick={() => {
                    setValue(suggestion.title);
                    setHideSuggestions(true);
                  }}
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fetch;
