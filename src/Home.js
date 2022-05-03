import React, {useState, useEffect, useRef} from "react";
import reactDom from "react-dom";
import CookingVidOne from "./video-backgrounds/CookingVid-2.mp4";
import CookingVidTwo from "./video-backgrounds/CookingVid-1.mp4";
import "./App.css"



const Home = () => {
    
    return(
        <div>
            <video autoPlay loop muted playsInline id = "background"
            style = {{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"

                
            }}
            >
            <source src = {CookingVidOne} type = "video/mp4" />
            </video>

        
            
            
            <div className = "wrapper">
                <div className = "search-input">
                    <input type = "text" placeholder = "Search recipes"/>
                </div>
                
                <div className = "search-button">
                    <button type="button" className="btn btn-success btn-lg">Search</button>
                </div>
                
            </div>

        </div>
        
        
        
    )


}

export default Home;