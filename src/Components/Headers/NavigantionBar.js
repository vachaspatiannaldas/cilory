import React, { useEffect, useState } from "react";
import { Navbar, Col, Container, Row, Image } from "react-bootstrap";
import RightUserNav from "./RightUserNav";
import { instance } from "../../Services/Axiosservices";
import MasterCategory from "./MasterCategory";
import UsercomponentPhone from "./UsercomponentPhone";
import { Link } from "react-router-dom";

export const NavigantionBar = () => {
  const [NavShow, SetNavShow] = useState(false);
  const [category, setcategory] = useState([]);

  useEffect(() => {
    instance.get("/getcategory").then((response) => {
      setcategory(response.data.Category);
    });
  }, []);

  return (
    <Container fluid>
      <Row className="NavBarRow">
        <Col xs={6} lg={8}>
          <Navbar>
            <div className="LeftSideNav">
              <div className="NavToggle">
                <button onClick={() => SetNavShow(!NavShow)}>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
              <div className="logo">
                <Link to="/">
                  <Image
                    className="img-fuild w-100"
                    src="https://static.cilory.com/static/img/logob.png"
                  ></Image>
                </Link>
              </div>
              <div
                className={`NavBarTopCategory ${
                  NavShow ? "navshow" : "navhid"
                }`}
              >
                <div
                  className="navbar-close-btn"
                  onClick={() => SetNavShow(!NavShow)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="UserLoginDetailPhone">
                  <div className="UserLoginIcon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="UserLoginInfo">
                    <div> login Name</div>
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
                <ul>
                  {category.map((i, index) => {
                    return (
                      <MasterCategory
                        key={index}
                        i={i}
                        index={index}
                        SetNavShow={SetNavShow}
                      ></MasterCategory>
                    );
                  })}
                  <UsercomponentPhone
                    SetNavShow={SetNavShow}
                    NavShow={NavShow}
                  />
                </ul>
              </div>
            </div>
          </Navbar>
        </Col>
        <Col xs={5} lg={2}>
          <RightUserNav></RightUserNav>
        </Col>
      </Row>
    </Container>
  );
};
