import { useHistory } from "react-router-dom";
import { useAuth } from "../../authTools/AuthHandler.js";
import React, { useRef, useEffect } from "react";

const Rounds = React.lazy(() => import("../pages/Rounds.jsx"));

const Login = () => {
  const inputEmail = useRef();
  const { login } = useAuth();
  const portal = useHistory();
  const inputPassword = useRef();

  const handleUp = () => {
    portal.push("/signup");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputEmail.current.value, inputPassword.current.value);
      portal.push("/");
    } catch {
      alert("Email or password is incorrect");
    };
  };

  useEffect(() => {
    document.title = "My Yelp";
  }, []);

  return (
    <>
      <Rounds />
      <div className="register d-flex justify-content-center align-items-center position-absolute">
        <div className="container p-5">
          <form onSubmit={handleSubmit}>
            <div>
            <div style={{ textAlign: "center", color: "#db4a40", fontSize: "25px" }}>
            <p style={{ display: "inline-block", textAlign: "center"}}>My Yelp Abdurahman</p>
            </div>
            <div style={{ textAlign: "center", fontSize: "25px" }}>
                <h1 style={{display: "inline-block", textAlign: "center", fontSize: "20px", fontFamily: "sans-serif"}}>Sign In To Yelp</h1>
            </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control text-dark" id="floatingInput" ref={inputEmail} autoComplete="email" required />
                <label for="floatingInput">Email</label>
              </div>
            </div>
              <div>
                <div className="form-floating mb-4">
                  <input type="password" className="form-control" id="floatingPassword" ref={inputPassword} autoComplete="current-password" required />
                  <label for="floatingPassword">Password</label>
                </div>
                    <button type="submit" className="btn btn-success w-100 mb-5">Log In</button>
              </div>
            </form>
            <p className="text-center text-muted fs-6">New to Yelp? <span onClick={handleUp} role="button" className="text-success text-decoration-underline">Sign Up</span></p>
          </div>
      </div>
    </>
  );
};

export default Login;
