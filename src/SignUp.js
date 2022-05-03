import React from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import "./App.css";
import CookingVidOne from "./video-backgrounds/CookingVid-2.mp4";

/*justify-content-center => Centers Items to the center*/
/*mt-5 margin top spacer (x) 3*/
const signUp = () => {
    return (
        
         <div className = "container mt-5 mb-5">
             <div className = "row d-flex align-items-center justify-content-center">
                 <div className = "col-md-6">
                     <div className = "card px-5 py-5">
                         <h2 className = "mt-3" style = {{textAlign: "center"}}>Sign Up</h2>
                         <div className="form-row py-3 pt-5">
                            <div class="offset-1 col-lg-10">
                                <label for="email" id = "inputEmailSignUpLabel">Email</label>
                                <input type="email" className="form-control" id="inputUsername" placeholder="Email"/>
                            </div> 
                        </div>
                        <div className="form-row py-3">
                            <div class="offset-1 col-lg-10">
                                <label for="username" id = "inputProfileSignUpLabel">Choose a Profile Name</label>
                                <input type="text" className="form-control" id="inputUsername" placeholder="Profile Name"/>
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
                                <label for="password" id = "inputPasswordLabel">Retype Password</label>
                                <input type="password" className="form-control" id="inputPassword" placeholder="Retype Password"/>
                            </div> 
                        </div>

                        <div className="form-row py-3">
                            <div className="offset-1 col-lg-10">
                                <button type="button" className="btn btn-dark btn-login">Sign Up</button>
                            </div> 
                        </div>

                        
                     </div>
                 </div>
             </div>
             
            
         </div>  
         
                  
    );
}


export default signUp;