import React, { useState } from "react";
import { Image } from "react-bootstrap";
import "../../Style/FilterPage/ProductCard.css";
function ProductCard({ item }) {
  const [imgload, setimgload] = useState(true);

  return (
    <div className="ProductCard">
      <div>
        <div className={imgload ? "imageload" : ""}>
          <Image
            src={item.searchImage}
            alt="none"
            className="w-100"
            onLoad={() => setimgload(false)}
          />
        </div>
        <div className="Productinfo">
          <div className="Productbrand">{item.brand}</div>
          <div className="ProductName">{item.productName}</div>
          <div className="ProductPrice">
            <span className="price">Rs {item.price}</span>

            <span className="mrp">Rs.{item.mrp}</span>
            <span className="discount">{item.discountDisplayLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
