import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../styles/CarrouselProducts.css";

const CarrouselProducts = () => {
  const [products, setProducts] = useState([]);

  const [counter, setCounter] = useState(0);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };
  useEffect(() => {
    fetch("https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="containerCarousel">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <p className="carouselText">Mais Vendidos</p>
          <Slider {...settings}>
            {products.map((item, i) => {
              return (
                <div key={item.id}>
                  <img className="productsImg" src={item.img}></img>
                  <p className="productsItem">{item.product}</p>
                  <p className="caruselPrice">por R${item.price}</p>
                  <button
                    className="btnOkBuy"
                    onClick={() => setCounter(counter + 1)}
                  >
                    COMPRAR
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CarrouselProducts;
