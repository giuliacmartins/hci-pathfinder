import React from "react";
import { useNavigate } from "react-router-dom";
import "./assets/spellPagesStyle.css"

function SpellPages(){
    let navigate = useNavigate();
    return(
        <div className="spellPage">
            <div>
                Hello! This is the Spell Pages!
            </div>
            
            <button onClick={() => {navigate("/")}}>
                Go to Home!
            </button>

            <button onClick={() => {navigate("/tableOfContents")}}>
                Go to Table of Contents!
            </button>
        </div>
    )
}

export default SpellPages;