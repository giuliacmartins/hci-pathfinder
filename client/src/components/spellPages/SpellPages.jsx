import React from "react";
import { useNavigate } from "react-router-dom";
import "./assets/spellPagesStyle.css"
import spellCartImage from "./assets/photos/spellcart.png";
import searchImage from "./assets/photos/search.png";
import forwardArrowImage from "./assets/photos/forwardArrow.png";
import backArrowImage from "./assets/photos/backArrow.png";
import arcanHeaderImage from "./assets/photos/arcane1LevelSpellsHeader.png";
import buffBtnImage from "./assets/photos/buffBtn.png";
import damageBtnImage from "./assets/photos/damageBtn.png";
import tocBtnImage from "./assets/photos/tocBtn.png";
import dropDownBtnImage from "./assets/photos/dropDownBtn.png";
import homeBrownImage from "./assets/photos/homeBrown.png";

function SpellPages(){
    let navigate = useNavigate();
    return(
        <div className="spellPage">
            <div className="navbar">
                <img src={searchImage} alt="Search" onClick={() => {/* Navigate to search page */}}/>
                <img className="spellCart" src={spellCartImage} alt="Spell Cart" onClick={() => {/* Navigate to cart page */}}/>
                <img className="rightNav" src={homeBrownImage} alt="Home" onClick={() => navigate("/")}/>
                <img className="rightNav" src={tocBtnImage} alt="TOC" onClick={() => navigate("/tableofContents")}/>
                <img className="rightNav" src={damageBtnImage} alt="Damage" onClick={() => {/* Navigate to search page */}}/>
                <img className="rightNav" src={buffBtnImage} alt="Buff" onClick={() => {/* Navigate to search page */}}/>
                <img className="rightNav" src={dropDownBtnImage} alt="Drop Down" onClick={() => {/* Navigate to search page */}}/>
            </div>

            <div className="pagination">
                <img src={backArrowImage} alt="Previous" onClick={() => navigate("/")}/>
                <img src={forwardArrowImage} alt="Next" onClick={() => navigate("/tableofContents2")}/>
            </div>
            
            {/* <button onClick={() => {navigate("/")}}>
                Go to Home!
            </button>

            <button onClick={() => {navigate("/tableOfContents")}}>
                Go to Table of Contents!
            </button> */}
        </div>
    )
}

export default SpellPages;