import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="49538094"
            title="Kenwood KMix stand mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://m.media-amazon.com/images/I/614bYyPPLgL._AC_SX180_SY120_QL70_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Lamkei ALAM-1211 Gold Dial White Silicone Strap Analogue Digital"
            price={40.0}
            image="https://m.media-amazon.com/images/I/81228VHOHML._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Purple)"
            price={98.99}
            image="https://m.media-amazon.com/images/I/61V25P7mlyL._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 512GB) - Space Grey (4th Generation)"
            price={598.99}
            image="https://m.media-amazon.com/images/I/811aBwuSuIL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3254354345"
            title="Lenovo G27c-10 Curved Gaming Monitor, 27 VA FHD, 165Hz, 1ms MPRT, AMD FreeSync, 1Display Port, 1HDMI, Audio Out, Tilt & Height Adjustable, VESA Mount, TÜV Rheinland Low Blue Light Certification"
            price={40.99}
            image="https://m.media-amazon.com/images/I/61VK+aPyS6L._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
