import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import ProductlistSkeleton from "./ProductlistSkeleton";
import { Link } from "react-router-dom";

function RightSide({ handelFilterItemsShow }) {
  const Products = useSelector((state) => {
    return state.Filter;
  });
  return (
    <Col className="FilterRightSide">
      <Row className="FilterSortForPhone" xs={2}>
        <Col>
          <button>Sort</button>
        </Col>
        <Col>
          <button onClick={handelFilterItemsShow}>Filter</button>
        </Col>
      </Row>
      <Row className="FilterSortByRow">
        <Col lg={3} className="FilterTotalItems">
          <h4>Items ({Products?.ProductListData.length})</h4>
        </Col>
        <Col lg={3} className="FilterSortBy">
          <div className="SortBy">
            Sort By : <span>Popuratity</span>
            <div className="ul">
              <ul>
                <li>Price Low To Heigh</li>
                <li>Price Low To Heigh</li>
                <li>Price Low To Heigh</li>
                <li>Price Low To Heigh</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="ProductList" xs={2} lg={5}>
        {Products.loader ? (
          <ProductlistSkeleton />
        ) : (
          Products?.ProductListData.map((item, index) => {
            return (
              <Col key={index}>
                <Link to={`/productDetail/${item._id}`}>
                  <ProductCard item={item} />
                </Link>
              </Col>
            );
          })
        )}
      </Row>
    </Col>
  );
}

export default RightSide;
