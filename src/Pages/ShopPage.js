import React from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "../Utils/shop.json";
function ShopPage() {
  const { slug } = useParams();
  let gender = 1;
  if (slug === "men") {
    gender = 1;
  } else if (slug === "women") {
    gender = 2;
  } else if (slug === "kids") {
    gender = 3;
  }
  return (
    <div>
      <Container className="Home-page-banner-carousel" fluid>
        <Row>
          <Col>
            <Carousel>
              {data.tabs[gender].banner_slides.map((i, index) => {
                return (
                  <Carousel.Item interval={10000} key={index}>
                    <Image src={i.imgUrl} alt="First slide" className="w-100" />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <h3
        className="text-uppercase"
        style={{ margin: "30px", marginLeft: "8%" }}
      >
        Categories To Bag
      </h3>

      <Container>
        <Row className="justify-content-around">
          {data.tabs[gender].categories.map((i, index) => {
            return (
              <Col xs={12} lg={6} key={index} className="Shopswiseround mb-3">
                <Link to={i.link}>
                  <Image src={i.imgUrl} style={{ width: "100%" }} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ShopPage;
