import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/footer.css";
function Footer() {
  return (
    <>
      <Container className="footer-section mb-3" fluid>
        <Row>
          <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="footer-col">
                  <h4
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    Sitesoch
                  </h4>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    Get Help
                  </h4>
                  <ul>
                    <li>
                      <Link to="/">Shipping</Link>
                    </li>

                    <li>Returns</li>
                    <li>
                      <Link to="/">Order Status</Link>
                    </li>
                    <li>
                      <Link to="/">Payment Options</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    Address
                  </h4>
                  <ul>
                    <li>
                      <Link to="/">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Cupiditate adipisci quia ab omnis id ipsum quae
                        inventore{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    follow us
                  </h4>
                  <div className="social-links">
                    <Link to="/">
                      <i className="fab fa-google"></i>
                    </Link>
                    <Link to="/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link to="/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-center">
              This site is for educational purposes only!!
            </h1>
          </footer>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
