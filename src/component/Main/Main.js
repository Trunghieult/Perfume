import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";
import owner from "./pic/Green Aesthetic Photo Frame Instagram Post.png";
import Mask from "../Mask/Mask";
// import Fetch from "../fetch/Fetch";

const Main = () => {
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
      {/* <Mask /> */}

      {/* Banner of the Page */}
      <div className="bg-banner">
        <div className="banner-title">
          <div className="banner-name">Perfume for the Perfection</div>
          <div className="banner-line">Much More Than Perfume</div>
          <div className="banner-line-small">
            {" "}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit.{" "}
          </div>
          <div className="banner-btn">
            <button className="banner-shop"> Buy Now</button>
            <button className="banner-shop"> See More</button>
          </div>
        </div>
        <div className="banner-img">
          <img
            className="img-leaf"
            src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/leave-2U8ZUJ.png"
            alt=""
          ></img>
        </div>
      </div>

      {/* Quotes of the Page */}
      <div>
        <div className="body-quotes">
          <div className="body-page">
            <div className="body-img">
              <img
                src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/23-ESJ32AL-1024x1024.png"
                className="img-flower"
                alt=""
              />
            </div>
            <div className="body-text-bg">
              <div className="body-text">
                <div className="body-name">About Our Store</div>
                <div className="body-line"> Welcome to Me</div>
                <div className="body-small-line">
                  {" "}
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Duis mollis, est non
                  commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                  sem nec elit. Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula, eget lacinia odio sem nec elit. Duis mollis,
                  est non commodo luctus, nisi erat porttitor ligula, eget
                  lacinia odio sem nec elit. Duis mollis, est non commodo
                  luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                  elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search">
        <div className="search-bar">
          <div className="search-txt">What are you looking for...</div>
          <div className="search-name">
            <input
              className="search-input"
              type="text"
              placeholder="Give us the name..."
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
          <div>{/* <Fetch /> */}</div>
        </div>
      </div>

      {/* Advantage */}
      <div className="intro">
        <div className="intro-layout">
          <div className="intro-left one">
            <img
              className="pic-small"
              src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/5-ESJ32AL.png"
              alt=""
            />
            {/* <img
              className="pic-smallx"
              src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/shape8-TJ3H4MU.png"
              alt=""
            /> */}
          </div>
          <div className="intro-right">Money Back Guarantee</div>
        </div>
        <div className="intro-layout">
          <div className="intro-left two">
            <img
              className="pic-small"
              src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/2-ESJ32AL.png"
              alt=""
            />
            {/* <img
              className="pic-smallx"
              src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/shape27-TJ3H4MU.png"
              alt=""
            /> */}
          </div>
          <div className="intro-right">Fast Delivery</div>
        </div>
        <div className="intro-layout">
          <div className="intro-left three">
            <img
              className="pic-small"
              src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/11-ESJ32AL.png"
              alt=""
            />
            {/* <img
              className="pic-smallx"
              src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/shape10-TJ3H4MU.png"
              alt=""
            /> */}
          </div>
          <div className="intro-right">Gift-Wrapped Packaging</div>
        </div>
        <div className="intro-layout">
          <div className="intro-left four">
            <img
              className="pic-small"
              src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/24-ESJ32AL.png"
              alt=""
            />
            {/* <img
            //   className="pic-smallx"
            //   src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/shape17-TJ3H4MU.png"
            //   alt=""
            // /> */}
          </div>
          <div className="intro-right">Free Ship Worldwide</div>
        </div>
      </div>

      {/* Link to Page */}
      <div>
        <div className="link-page">
          <div className="link-img">
            <img
              src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/S8KH8AE.jpg"
              alt=""
              className="perfume-img"
            ></img>
          </div>
          <div className="link-title">
            <div className="link-name">Men Perfume</div>
            <div className="link-line">What Makes A Man Charming</div>
            <div className="link-line-small">
              {" "}
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit.{" "}
            </div>
            <div className="link-btn">
              <button className="link-shop"> Buy Now</button>
            </div>
          </div>
        </div>

        <div className="link-pagex">
          <div className="link-titlex">
            <div className="link-name">Women Perfume</div>
            <div className="link-line">What Makes A Woman Beatiful</div>
            <div className="link-line-small">
              {" "}
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit.{" "}
            </div>
            <div className="link-btn">
              <button className="link-shop"> Buy Now</button>
            </div>
          </div>
          <div className="link-imgx">
            <img
              src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/perfume-mockup-01.jpg"
              alt=""
              className="perfume-imgx"
            ></img>
          </div>
        </div>
      </div>

      {/* Products */}
      {/* <div>
        <Fetch />
      </div> */}

      {/* Trending */}
      <div className="trend-container">
        <div className="trend-bg-one">
          <div className="trend-img">
            <img
              src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/25-ESJ32AL.png"
              alt=""
              className="trend-img-x"
            ></img>
          </div>
          <div className="trend-title"> Get Discount</div>
          <div className="trend-txt"> Subscribe To Get 50% OFF Storewide</div>
          <div className="trend-prod">
            <input
              type="text"
              className="trend-input"
              placeholder="Email"
            ></input>
          </div>
          <button className="trend-btn">Subscribe</button>
        </div>
        <div className="trend-border">
          <div className="trend-bg-two">
            <div className="trend-txt-x">
              <div className="trend-txt-one">End year sale</div>
              <div className="trend-txt-two">All Item 40% Off</div>
            </div>
            <div className="trend-img">
              <img
                src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/DM3N9SP-1536x1024.png"
                alt=""
                className="trend-border-img"
              />
            </div>
            <div className="trend-txt-y">
              <div className="trend-txt-one">Buy now</div>
              <div className="trend-txt-two">Limited Offer Ends Tonight</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dash */}
      <div className="mainbanner-line">
        <div className="dash left"></div>
        <img
          src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/11-ESJ32AL-1536x1536.png"
          className="star"
          alt=""
        ></img>
        <div className="dash right"></div>
      </div>

      {/* Founder */}

      <div className="founder-con">
        <div className="founder-bg-img">
          <img src={owner} className="founder-bg-pic" alt="" />
        </div>
        <div className="founder-info">
          <div className="founder-word">Words from our founder</div>
          <div className="founder-name">Huong Nguyen</div>
          <div className="founder-txt">
            <div className="founder-txt-left">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
              <br></br>
              <div>
                Maecenas faucibus mollis interdum. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Nulla vitae elit libero.
              </div>
            </div>
            <div className="founder-txt-right">
              Aenean lacinia bibendum nulla sed consectetur. Cras mattis
              consectetur purus sit amet fermentum. Fusce dapibus, tellus ac
              cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
              justo sit amet risus. Nulla vitae elit libero, a pharetra augue.
              Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="founder-txt-sign">
            <img
              src="https://demo.darrelwilson.com/olivia/wp-content/uploads/sites/93/2022/07/Antonin-Scalia-Signature-2016021501.png"
              className="founder-txt-sign-pic"
              alt=""
            />
          </div>
          <div className="founder-txt-name">
            {" "}
            Huong Nguyen, Owner Of Olivia & Co{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
