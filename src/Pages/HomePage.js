import React from "react";
import { Container, Row, Image, Carousel, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/Home/Home.css";
import "../Style/Home/Banner.css";
function HomePage() {
  return (
    <>
      <Container className="Home-page-banner-carousel">
        <Carousel>
          <Carousel.Item interval={10000}>
            <Image
              src="https://static.cilory.com/modules/homepagebanners/slides/ethnic-wear-desk-09.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Image
              className="d-block"
              src="https://static.cilory.com/modules/homepagebanners/slides/women-shirt-desk-10.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block"
              src="https://static.cilory.com/modules/homepagebanners/slides/partykurtis-desk-09.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <h4 className="mt-4 mb-4 text-uppercase top-master-category font-color">
        Top Master Categories
      </h4>
      <div className="categorybannersection">
        <Link to={"/shop/men"}>
          <div className="categorybanner">
            <div className="categorybannerimage">
              <Image src={"/Images/newpreview.png"} className="w-100" />
            </div>
            <div className="categorybannerTitle">
              <p>Men fashion </p>
              <p>Shop Now</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="categorybannersection">
        <Link to={"/shop/women"}>
          <div className="categorybanner flex-row-reverse">
            <div className="categorybannerimage">
              <Image
                className="w-100"
                src={"/Images/Untitled-removebg-preview.png"}
              />
            </div>
            <div className="categorybannerTitle">
              <p>women fashion</p>
              <p>Shop Now</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="categorybannersection">
        <Link to={"/shop/kids"}>
          <div className="categorybanner">
            <div className="categorybannerimage">
              <Image className="w-100" src={"/Images/kids.png"} />
            </div>
            <div className="categorybannerTitle">
              <p>Kids fashion </p>
              <p>Shop Now</p>
            </div>
          </div>
        </Link>
      </div>
      <Container className="mt-3">
        <Row className="mt-3">
          <h4 className="mt-3 mb-3 text-uppercase font-color">
            Top Categories
          </h4>
        </Row>
        <Row
          className="mt-1 Home-Topcategory-list align-items-center"
          xs={3}
          lg={6}
        >
          <Col>
            <Link to={"/men-tshirt"}>
              <Image
                src={
                  "https://i.pinimg.com/564x/b2/81/7c/b2817c6a59107423338e7f0cedeae3a6.jpg"
                }
                alt="none"
              />
            </Link>
            <div className="category-name-discount-title">
              <div className="category-title">T-shirt</div>
            </div>
          </Col>
          <Col>
            <Link to={"/men-tshirt"}>
              <Image
                src={
                  "https://i.pinimg.com/564x/bb/87/ed/bb87ed88a57b4e3dc134b89f33ce33f1.jpg"
                }
                alt="none"
              />
            </Link>
            <div className="category-name-discount-title">
              <div className="category-title"> Plain T-shirt</div>
            </div>
          </Col>

          <Col>
            <Link to="/men-tshirt">
              <Image
                src={
                  "https://i.pinimg.com/564x/38/ad/2b/38ad2be05146924c2ed80f6fdf8c240d.jpg"
                }
                alt="none"
              />
              <div className="category-name-discount-title">
                <div className="category-title"> Collar T-shirt</div>
              </div>
            </Link>
          </Col>
          <Col>
            <Link to="/men-Shirt">
              <Image
                src={
                  "https://i.pinimg.com/564x/0a/76/f9/0a76f9dac14165d46b7abf3638d93425.jpg"
                }
                alt="none"
              />
            </Link>
            <div className="category-name-discount-title">
              <div className="category-title"> Printed shirt</div>
            </div>
          </Col>
          <Col>
            <Link to="/men-Shirt">
              <Image
                src={
                  "https://i.pinimg.com/736x/98/03/9c/98039ced4b8e9a835c4cb93e9f9bebe2.jpg"
                }
                alt="none"
              />
            </Link>
            <div className="category-name-discount-title">
              <div className="category-title"> Shirt</div>
            </div>
          </Col>
          <Col>
            <Link to="/men-Shirt">
              <Image
                src={
                  "https://i.pinimg.com/564x/93/79/20/9379206c926836a05650d3a6541e41ba.jpg"
                }
                alt="none"
              />
            </Link>
            <div className="category-name-discount-title">
              <div className="category-title"> Plain shirt</div>
            </div>
          </Col>
        </Row>
        <Row
          className="mt-4 Home-Topcategory-list align-items-center"
          xs={3}
          lg={6}
        >
          <Col>
            <Link to="/women-Dresses">
              <Image
                src={
                  "https://i.pinimg.com/564x/fc/9b/77/fc9b77ff516a89daad5ec0d01a33b8df.jpg"
                }
                alt="none"
              />
            </Link>
            <div className="category-name-discount-title">
              <div className="category-title"> Plain T-shirt</div>
            </div>
          </Col>
          <Col>
            <Link to="/women-Dresses">
              <Image
                src={
                  "https://i.pinimg.com/564x/1a/45/9b/1a459bfa515adb60b11079c07ccd862d.jpg"
                }
                alt="none"
              />
            </Link>
            <div className="category-name-discount-title">
              <div className="category-title"> Plain T-shirt</div>
            </div>
          </Col>

          <Col>
            <Image
              src={
                "https://i.pinimg.com/564x/a1/13/d8/a113d8c071cac8a45b1b3f74eecba435.jpg"
              }
              alt="none"
            />
            <div className="category-name-discount-title">
              <div className="category-title"> Plain T-shirt</div>
            </div>
          </Col>
          <Col>
            <Link to="/women-tops">
              <Image
                src={
                  "https://i.pinimg.com/564x/54/09/48/5409489b769464694d111ff7e6a0df23.jpg"
                }
                alt="none"
              />
            </Link>
            <div className="category-name-discount-title">
              <div className="category-title"> Plain T-shirt</div>
            </div>
          </Col>
          <Col>
            <Link to="/women-Dresses">
              <Image
                src={
                  "https://i.pinimg.com/564x/d1/35/cf/d135cf6e85dfffedd1f3d83a4eee3d2f.jpg"
                }
                alt="none"
              />
            </Link>
            <div className="category-name-discount-title">
              <div className="category-title"> Plain T-shirt</div>
            </div>
          </Col>
          <Col>
            <Link to="/women-tops">
              <Image
                src={
                  "https://i.pinimg.com/564x/90/04/0e/90040e089223ded5b69e394f08f569a6.jpg"
                }
                alt="none"
              />
            </Link>
            <div className="category-name-discount-title">
              <div className="category-title"> Plain T-shirt</div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="mt-3 m-auto" lg={12}>
            <Image
              src={
                "https://assets.ajio.com/cms/AJIO/WEB/19102022-d-unisex-main-p4-brands-upto80.jpg"
              }
              className="w-100"
              layout={"responsive"}
              alt="none"
            />
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <h5> BEST SELLER </h5>
        </Row>
      </Container>
      <Container className={`mt-3`}>
        <Row lg={6}></Row>
      </Container>
    </>
  );
}

export default HomePage;
