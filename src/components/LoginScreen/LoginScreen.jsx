import "./LoginScreen.css"

const LoginScreen = () => {
  return (
    <div>
        <div className="container text-center bg-opacity-75 rounded padding-bottom" id="login-box">
            <div className="row text-center" id="tell-me-about">
                <h2>Login</h2>
            </div>
            <form className="container pb-3">
                <div className="row text-center mt-3 justify-content-center">
                        <div className = "col-12 col-md-6">
                            <input className="form-control mx-auto" type="email" placeholder="email@email.com" aria-label="email" />
                        </div>
                    </div>
                    <div className="row text-center mt-3 justify-content-center">
                      <div className="col-12 col-md-6">
                            <input className="form-control mx-auto" type="password" placeholder="Password" aria-label="password" />
                        </div>
                  </div>
                  <div className="row text-center m-3 justify-content-center">
                    <button className="col-md-2 col-6 mx-auto mx-md-0 btn my-2 my-md-0 overflow-hidden " type="submit" id="search-button">Login</button>
                  </div>
            </form>
        </div>
    </div>
  );
};

export default LoginScreen;