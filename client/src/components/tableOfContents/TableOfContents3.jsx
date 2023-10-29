import React from "react";
import { useNavigate } from "react-router-dom";
import "./assets/tableOfContentsStyle.css"
import tableOfContentsTitle from "./assets/photos/toc3.png";
import spellCartImage from "./assets/photos/spellcart.png";
import searchImage from "./assets/photos/search.png";
import outOfCombatUtilityImage from "./assets/photos/outOfCombatUtility.png";
import homeBlackImage from "./assets/photos/homeBlack.png";
import forwardArrowImage from "./assets/photos/forwardArrow.png";
import debuffImage from "./assets/photos/debuff.png";
import damageImage from "./assets/photos/damage.png";
import combatUtilityImage from "./assets/photos/combatUtility.png";
import buffImage from "./assets/photos/buff.png";
import backArrowImage from "./assets/photos/backArrow.png";
import allArcaneSpellsTitleImage from "./assets/photos/allArcaneSpellsTitleImg.png";

function TableOfContents3(){
    let navigate = useNavigate();
    return(
        <div className="tableOfContentsPage">
            <div className="navbar">
                <img src={searchImage} alt="Search" onClick={() => {/* Navigate to search page */}}/>
                <img src={spellCartImage} alt="Spell Cart" onClick={() => {/* Navigate to cart page */}}/>
                <img className="homeImage" src={homeBlackImage} alt="Home" onClick={() => navigate("/")}/>
            </div>
            <div className="tocTitle">
                <div className="column hlaf">
                    <img className="toc" src={tableOfContentsTitle} alt="Table of Contents"/>
                    <div className="arcaneText">
                        <h2><u>Arcane 10th-LEvel Spells</u></h2>
                        <ul> 
                            <li>Damage<img className="smallImg" src={damageImage} alt="Damage"/></li>
                            <li>Buff<img className="smallImg" src={buffImage} alt="Buff"/></li>
                            <li>Debuff<img className="smallImg" src={debuffImage} alt="Debuff"/></li>
                            <li>Combat Utility<img className="smallImg" src={combatUtilityImage} alt="Combat"/></li>
                            <li>Out of Combat Utility<img className="smallImg" src={outOfCombatUtilityImage} alt="Out of Combat"/></li>
                        </ul>
                    </div>
                </div>
                <div className="column half">
                    <div className="arcaneText2">
                        <img src={allArcaneSpellsTitleImage} alt="Arcane Spells"/>
                    </div>
                </div>
            </div>
            <div className="pagination">
                <img src={backArrowImage} alt="Previous" onClick={() => navigate("/tableofContents2")}/>
                <img src={forwardArrowImage} alt="Next" onClick={() => navigate("/spellPages")}/>
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

export default TableOfContents3;