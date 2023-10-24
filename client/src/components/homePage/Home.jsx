import React from "react";
import { useNavigate } from "react-router-dom";
import "./assets/homeStyle.css";

function Home(){
    let navigate = useNavigate();
    return(
        <div className="homePage">
            <div>
                Hello! This is the Home Page!
            </div>

            <button onClick={() => {navigate("/tableOfContents")}}>
                Go to Table of Contents!
            </button>
        </div>
    )
}

export default Home;