import React from "react";
import ReactDOM from 'react-dom';
import loginImage from "./video-backgrounds/login-image.jpg";
import {Link} from 'react-router-dom';
import "./App.css";

const Login = () => {
    return (
        //py is for padding and y is for classes that set both *-top and *-bottom
      <section className = "login py-5 bg-light" id = "login-section">
          <div className = "container">
              <div className = "row g-0" id = "row">
                  <div className = "col-lg-5" >
                      <img src = {loginImage} className = "img-fluid" id = "login-page"/>
                  </div>
                  <div className = "col-lg-7">
                    <h1 id = "loginHeader">Recipe Rocket</h1>
                    <p id = "subHeader">Sign into your account</p>

                    <form>
                        <div className="form-row py-3 pt-5">
                            <div class="offset-1 col-lg-10">
                                <label for="username" id = "inputUsernameLabel">Email</label>
                                <input type="text" className="form-control" id="inputUsername" placeholder="Username"/>
                            </div> 
                        </div>

                        <div className="form-row py-3">
                            <div className="offset-1 col-lg-10">
                                <label for="password" id = "inputPasswordLabel">Password</label>
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                            </div> 
                        </div>

                        <div className="form-row py-3">
                            <div className="offset-1 col-lg-10">
                                <button type="button" className="btn btn-dark btn-login">Login</button>
                            </div> 
                        </div>

                        <div class="form-row py-3">
                            <div class="form-group col-md-6">
                                <Link style = {{color: "black", marginLeft: "50px"}} className="nav-link" to ="/">Forgot password?</Link>
                            </div> 
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <Link style = {{color: "black", marginLeft: "50px"}} className="nav-link" to ="/">Don't have an account? Register Here!</Link>
                            </div> 
                        </div>
                    </form>
                  </div>
              </div>
          </div>
      </section>
    );
}


export default Login;
