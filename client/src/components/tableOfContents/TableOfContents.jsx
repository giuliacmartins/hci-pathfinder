import React from "react";
import { useNavigate } from "react-router-dom";
import "./assets/tableOfContentsStyle.css"

function TableOfContents(){
    let navigate = useNavigate();
    return(
        <div className="tableOfContentsPage">
            <div>
                Hello! This is the Table of Contents Page!
            </div>
            
            <button onClick={() => {navigate("/spellPages")}}>
                Go to Spell Pages!
            </button>

            <button onClick={() => {navigate("/")}}>
                Go to Home!
            </button>
        </div>
    )
}

export default TableOfContents;