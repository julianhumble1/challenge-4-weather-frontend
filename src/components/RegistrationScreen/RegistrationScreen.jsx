import "./RegistrationScreen.css"
import UserDataValidator from "../../utils/UserDataValidator.js";

import UserHandler from "../../utils/UserHandler.js"

import { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationScreen = () => {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [successfulRegistration, setSuccessfulRegistration] = useState("");
    const [registered, setRegistered] = useState("")

    const handleEmailChange = (newEmail) => {
        setEmail(newEmail);
        const validEmail = UserDataValidator.validateEmail(email);
        if (!validEmail) {
            setEmailError("Please enter a valid email address")
        }
        
    }

    const handlePasswordChange = (password) => {
        setPassword(password);
        const validPassword = UserDataValidator.validatePassword(password);
        if (!validPassword) {
            setPasswordError("Password must contain a special character, number and be at least 8 characters long"); 
        }
    }

    const handleRegistration = (event) => {
        event.preventDefault();
        const validEmail = UserDataValidator.validateEmail(email)
        const validPassword = UserDataValidator.validatePassword(password);
        try {
            if (!validEmail || !validPassword) {
                handleEmailChange(email);
                handlePasswordChange(password)
                throw new Error("Failed to register due to invalid details")
            } 
            UserHandler.addUserToLocalStorage(email, password);
            setSuccessfulRegistration("success")
            setRegistered("registered");
        } catch (error) {
            setEmail("")
            setPassword("")
            setSuccessfulRegistration("unsuccessful")
        }
    }

    return (
        
        <div>
            <div className="container text-center bg-opacity-75 rounded padding-bottom" id="registration-box">
                <div className="row text-center" id="tell-me-about">
                    <h2>Registration</h2>
                </div>
                {!registered && 
                    <form noValidate className="container pb-3" onSubmit = {handleRegistration} data-testid = "registration-form">
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
                }
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