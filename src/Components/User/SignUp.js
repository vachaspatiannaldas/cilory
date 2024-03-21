import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "../../Style/User/Login.css";
import { UserSignup } from "../../store/Logic/User/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [UserInput, SetUserInput] = React.useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UserInfo = useSelector((state) => {
    return state.User;
  });
  const onchangehandeler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetUserInput({ ...UserInput, [name]: value });
  };
  const onsubmithandler = (e) => {
    e.preventDefault();
    dispatch(UserSignup({ datas: UserInput })).then((response) => {
      if (response.payload.status) {
        setTimeout(() => {
          navigate("/user/login");
        }, [1000]);
      }
    });
  };
  return (
    <Container className="userloginsignup">
      <Row className="justify-content-center">
        <Col lg={4}>
          <form className="signup" onSubmit={onsubmithandler}>
            <h1>Sign up</h1>
            {UserInfo.signupmessege && (
              <div
                className={`successorerror ${
                  !UserInfo.signuploader &&
                  !UserInfo.signupsuccess &&
                  "side-side"
                }`}
              >
                {UserInfo.signupmessege}
              </div>
            )}
            <div className="signup__field mt-4">
              <input
                className="signup__input"
                type="email"
                name="email"
                required
                value={UserInput.email || ""}
                onChange={onchangehandeler}
              />
              <label className="signup__label" htmlFor="email">
                Email
              </label>
            </div>

            <div className="signup__field">
              <input
                className="signup__input"
                type="text"
                name="name"
                required
                onChange={onchangehandeler}
              />

              <label className="signup__label" htmlFor="name">
                name
              </label>
            </div>

            <div className="signup__field">
              <input
                className="signup__input"
                type="tel"
                name="phone"
                required
                onChange={onchangehandeler}
              />
              <label className="signup__label" htmlFor="phone">
                phone
              </label>
            </div>

            <div className="signup__field">
              <input
                className="signup__input"
                type="password"
                name="password"
                required
                value={UserInput.password || ""}
                onChange={onchangehandeler}
              />
              <label className="signup__label" htmlFor="password">
                Password
              </label>
            </div>
            {UserInfo.signuploader ? (
              <div className="login-loader">
                <Spinner animation="border" size="sm" />
              </div>
            ) : (
              <input type="submit" value={"Sign up"} />
            )}
            <h2>
              Already have an account? <Link to="/user/login">login</Link>
            </h2>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
