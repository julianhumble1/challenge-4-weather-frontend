import "./RegistrationScreen.css"
import UserDataValidator from "../../utils/UserDataValidator.js";

import { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationScreen = () => {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [successfulRegistration, setSuccessfulRegistration] = useState("");

    const handleEmailChange = (email) => {
        setEmail(email);
        const validationResult = UserDataValidator.validateEmail(email);
        setEmailError(validationResult);
    }

    const handlePasswordChange = (password) => {
        setPassword(password);
        const validationResult = UserDataValidator.validatePassword(password);
        setPasswordError(validationResult); 
    }

    const handleRegistration = (event) => {
        event.preventDefault();
        handleEmailChange(email);
        handlePasswordChange(password)
        try {
            if (passwordError || emailError) {
                throw new Error("Failed to register due to invalid details")
            }
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            setSuccessfulRegistration("success")
        } catch (error) {
            setSuccessfulRegistration("unsuccessful")
        }
    }

    return (
        <div>
            <div className="container text-center bg-opacity-75 rounded padding-bottom" id="registration-box">
                <div className="row text-center" id="tell-me-about">
                    <h2>Register</h2>
                </div>
                <form noValidate className="container pb-3" onSubmit = {handleRegistration}>
                    <div className="row text-center mt-3 justify-content-center">
                        <div className = "col-12 col-md-6">
                            <input className="form-control mx-auto" type="email" placeholder="email@email.com" aria-label="email" value={email} onChange={(e) => setEmail(e.target.value) } onBlur={(e) => handleEmailChange(e.target.value) } />
                        </div>
                        {emailError && 
                            <div className="text-danger">{emailError}</div>
                        }
                        </div>
                        <div className="row text-center mt-3 justify-content-center">
                        <div className="col-12 col-md-6">
                            <input className="form-control mx-auto" type="password" placeholder="Password" aria-label="password" value={ password } onChange={(e) => setPassword(e.target.value) } onBlur = {e => handlePasswordChange(e.target.value)} />
                        </div>
                        {passwordError &&
                            <div className="text-danger">{passwordError}</div>
                        }
                    </div>
                    <div className="row text-center m-3 justify-content-center">
                        <button className="col-md-2 col-6 mx-auto mx-md-0 btn my-2 my-md-0 overflow-hidden " type="submit" id="register-button">Sign Up</button>
                    </div>
                </form>
                {successfulRegistration == "success" &&
                    <>
                        <div className="text-success">
                            Registration Successful!
                        </div>
                        <Link to="/login-screen">
                            Click here to login
                        </Link>
                    </>
                }
                {successfulRegistration == "unsuccessful" && 
                    <div className="text-danger">Ensure inputted details are valid before registering</div>
                }
            </div>
        </div>
  );
}

export default RegistrationScreen