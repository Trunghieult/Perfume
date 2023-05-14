import React from "react";
import { useState, useEffect } from "react";
import "./Main.css";
import Mask from "../Mask/Mask";
import Fetch from "../fetch/Fetch";

const Main = () => {
  const API_URL = "https://perfume-backend.onrender.com/products?random=9";

  const [dataFetch, setDataFetch] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setDataFetch(data.list))
      .catch((error) => console.error(error));
  }, []);

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
          <div className="search-txt">Looking for...</div>
          <div className="search-name">
            <input
              className="search-input"
              placeholder="Enter the brand"
            ></input>
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
          <div className="trend-title"> Trending Perfume This Week</div>
          <div className="trend-txt"> Our Handpicked Fragrance</div>
          <div className="trend-prod">{/* <Fetch /> */}</div>
          <body>
            <div class="slider">
              <div class="slide-track">
                <div class="slider">
                  <div class="slide-track">
                    {dataFetch.map((product, index) => {
                      return (
                        <img
                          class={`slide-${index + 1}`}
                          src={product.image[0]}
                          alt={product.name}
                          key={product._id}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </body>
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
    </div>
  );
};

export default Main;
