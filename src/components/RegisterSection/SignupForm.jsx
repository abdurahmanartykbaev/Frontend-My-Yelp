import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../authTools/AuthHandler.js";
import React, { useRef, useState, useEffect } from "react";

const Rounds = React.lazy(() => import("../pages/Rounds.jsx"));

const Signup = () => {
  const portal = useHistory();
  const inputEmail = useRef();
  const { signup } = useAuth();
  const inputPassword = useRef();
  const inputPasswordConfirm = useRef();
  // eslint-disable-next-line
  const [ setPageLoading ] = useState(false);

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputPassword.current.value !== inputPasswordConfirm.current.value) {
      return alert("Check the password");
    };

    try {
      await signup(inputEmail.current.value, inputPassword.current.value);
      portal.push("/");
    } catch {
      alert("Something went wrong");
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
            <div style={{ textAlign: "center", color: "#db4a40", fontSize: "25px" }}>
            <p style={{ display: "inline-block", textAlign: "center"}}>My Yelp Abdurahman</p>
            </div>
            <div style={{ textAlign: "center", fontSize: "25px" }}>
                <h1 style={{display: "inline-block", textAlign: "center", fontSize: "20px", fontFamily: "sans-serif"}}>Sign Up To Yelp</h1>
            </div>
                <div className="form-floating mb-3">
                    <input type="email" ref={inputEmail} className="form-control text-dark" id="floatingInput" placeholder="name@example.com" required />
                    <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" ref={inputPassword} className="form-control" id="floatingPassword" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="password" ref={inputPasswordConfirm} className="form-control" id="floatingPassword" placeholder="Password" autoComplete="current-password" required />
                    <label for="floatingPassword">Password confirmation</label>
                </div>
                      <button type="submit" className="btn btn-success w-100 mb-4">Sign Up</button>
            </form>
            <p className="text-center text-muted fs-6">Already on Yelp?  <Link to="/login" role="button" className="text-success text-decoration-underline">Sign In</Link></p>
        </div>
      </div>
    </>
  );
};

export default Signup;