import React from "react";
import { useNavigate } from "react-router-dom";
import "./assets/tableOfContentsStyle.css"
import tableOfContentsTitle from "./assets/photos/toc1.png";
import spellCartImage from "./assets/photos/spellcart.png";
import searchImage from "./assets/photos/search.png";
import outOfCombatUtilityImage from "./assets/photos/outOfCombatUtility.png";
import leafImage from "./assets/photos/leaf.png";
import homeBlackImage from "./assets/photos/homeBlack.png";
import forwardArrowImage from "./assets/photos/forwardArrow.png";
import debuffImage from "./assets/photos/debuff.png";
import damageImage from "./assets/photos/damage.png";
import combatUtilityImage from "./assets/photos/combatUtility.png";
import buffImage from "./assets/photos/buff.png";
import backArrowImage from "./assets/photos/backArrow.png";

function TableOfContents(){
    let navigate = useNavigate();
    return(
        <div className="tableOfContentsPage">
            <div className="navbar">
                <img src={searchImage} alt="Search" onClick={() => {/* Navigate to search page */}}/>
                <img src={spellCartImage} alt="Spell Cart" onClick={() => {/* Navigate to cart page */}}/>
                <img src={homeBlackImage} alt="Home" onClick={() => navigate("/home")}/>
            </div>
            <div className="tocTitle">
                <img src={tableOfContentsTitle} alt="Table of Contents"/>
                <img src={leafImage} alt="Leaf"/>
            </div>
            <div className="pagination">
                <img src={backArrowImage} alt="Previous" onClick={() => {/* Navigate to previous page */}}/>
                <img src={forwardArrowImage} alt="Next" onClick={() => {/* Navigate to next page */}}/>
            </div>
            
            
            
            {/* <div>
                Hello! This is the Table of Contents Page!
            </div>
            
            <button onClick={() => {navigate("/spellPages")}}>
                Go to Spell Pages!
            </button>

            <button onClick={() => {navigate("/")}}>
                Go to Home!
            </button> */}
        </div>
    )
}

export default TableOfContents;