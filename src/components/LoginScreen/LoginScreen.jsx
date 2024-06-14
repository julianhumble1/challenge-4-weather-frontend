import "./LoginScreen.css"

import { useState } from "react";
import { Link } from "react-router-dom";
import UserHandler from "../../utils/UserHandler.js";

const LoginScreen = ({loggedIn, setLoggedIn}) => {

  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginAttemptStatus, setLoginAttemptStatus] = useState("")

  const handleLogin = (event) => {
    event.preventDefault()
    // const emailMatch = (email == localStorage.getItem("email"))
    // const passwordMatch = (password == localStorage.getItem("password"));
    const loginID = UserHandler.checkEmailAndPasswordMatchStorage(email, password);

    if (loginID) {
      setLoginAttemptStatus("successful")
      setLoggedIn(loginID);
    } else {
      setLoginAttemptStatus("failed")
      setEmail("")
      setPassword("")
    }
  }

  return (
    <div>
      <div className="container text-center bg-opacity-75 rounded padding-bottom" id="login-box">
        { 
          (loggedIn === "") &&
          <>
          <div className="row text-center" id="tell-me-about">
            <h2>Login</h2>
          </div>
            <form className="container pb-3" onSubmit={handleLogin} noValidate>
              <div className="row text-center mt-3 justify-content-center">
                <div className="col-12 col-md-6">
                  <input className="form-control mx-auto" type="email" placeholder="email@email.com" aria-label="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="row text-center mt-3 justify-content-center">
                <div className="col-12 col-md-6">
                  <input className="form-control mx-auto" type="password" placeholder="Password" aria-label="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <div className="row text-center m-3 justify-content-center">
                <button className="col-md-2 col-6 mx-auto mx-md-0 btn my-2 my-md-0 overflow-hidden " type="submit" id="search-button">Login</button>
              </div>
              {loginAttemptStatus === "failed" &&
                <div className="text-danger">
                  Username or password incorrect. Please try again.
                </div>
              }
            </form>
          </>
        }
      {(loggedIn) &&
        <>
          <h3 className="text-success">
              Login Successful
          </h3>
          <Link to="/">
              Click here to return to home
          </Link>
        </>
      }
      </div>

    </div>
  );
};

export default LoginScreen;