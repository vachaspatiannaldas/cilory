import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "../../Style/User/Login.css";
import { UserLogin } from "../../store/Logic/User/UserSlice";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Login() {
  const [UserInput, SetUserInput] = React.useState({});
  const [, setCookie] = useCookies(["usertoken"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onchangehandeler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetUserInput({ ...UserInput, [name]: value });
  };
  const UserInfo = useSelector((state) => {
    return state.User;
  });
  const onsubmithandler = (e) => {
    e.preventDefault();

    dispatch(UserLogin({ datas: UserInput })).then((response) => {
      if (response.payload.auth) {
        let d = new Date();
        d.setTime(d.getTime() + 10000 * 60 * 1000);
        setCookie("user", response.payload.token, { path: "/", expires: d });
        navigate("/");
      }
    });
  };

  return (
    <Container className="userloginsignup">
      <Row className="justify-content-center">
        <Col lg={4}>
          <form className="signup" onSubmit={onsubmithandler}>
            <h1>Login</h1>
            {UserInfo.messege && (
              <div
                className={`successorerror ${
                  !UserInfo.loader && !UserInfo.success && "side-side"
                }`}
              >
                {UserInfo.messege}
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

            {UserInfo.loader ? (
              <div className="login-loader">
                <Spinner size="sm" animation="border" />
              </div>
            ) : (
              <input type="submit" value={"login"} />
            )}

            <h2>
              Create new ? <Link to="/user/signup">signup</Link>
            </h2>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
