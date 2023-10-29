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
                <img className="spellCart" src={spellCartImage} alt="Spell Cart" onClick={() => {/* Navigate to cart page */}}/>
                <img className="homeImage" src={homeBlackImage} alt="Home" onClick={() => navigate("/")}/>
            </div>
            <div className="tocTitle">
                <div className="column hlaf">
                    <img className="toc" src={tableOfContentsTitle} alt="Table of Contents"/>
                    <img className="leaf" src={leafImage} alt="Leaf"/>

                    <div className="arcaneText">
                        <h2><u>Arcane Cantrips</u></h2>
                        <ul> 
                            <li>Damage<img className="smallImg" src={damageImage} alt="Damage"/></li>
                            <li>Buff<img className="smallImg2" src={buffImage} alt="Buff"/></li>
                            <li>Debuff<img className="smallImg2" src={debuffImage} alt="Debuff"/></li>
                            <li>Combat Utility<img className="smallImg" src={combatUtilityImage} alt="Combat"/></li>
                            <li>Out of Combat Utility<img className="smallImg" src={outOfCombatUtilityImage} alt="Out of Combat"/></li>
                        </ul>

                        <h2><u>Arcane 1st-Level Spells</u></h2>
                        <ul> 
                            <li>Damage<img className="smallImg" src={damageImage} alt="Damage"/></li>
                            <li>Buff<img className="smallImg2" src={buffImage} alt="Buff"/></li>
                            <li>Debuff<img className="smallImg2" src={debuffImage} alt="Debuff"/></li>
                            <li>Combat Utility<img className="smallImg" src={combatUtilityImage} alt="Combat"/></li>
                            <li>Out of Combat Utility<img className="smallImg" src={outOfCombatUtilityImage} alt="Out of Combat"/></li>
                        </ul>
                    </div>
                </div>
                <div className="column half">
                    <div className="arcaneText2">
                        <h2><u>Arcane 2nd-Level Spells</u></h2>
                        <ul> 
                            <li>Damage<img className="smallImg" src={damageImage} alt="Damage"/></li>
                            <li>Buff<img className="smallImg2" src={buffImage} alt="Buff"/></li>
                            <li>Debuff<img className="smallImg2" src={debuffImage} alt="Debuff"/></li>
                            <li>Combat Utility<img className="smallImg" src={combatUtilityImage} alt="Combat"/></li>
                            <li>Out of Combat Utility<img className="smallImg" src={outOfCombatUtilityImage} alt="Out of Combat"/></li>
                        </ul>

                        <h2><u>Arcane 3rd-Level Spells</u></h2>
                        <ul> 
                            <li>Damage<img className="smallImg" src={damageImage} alt="Damage"/></li>
                            <li>Buff<img className="smallImg2" src={buffImage} alt="Buff"/></li>
                            <li>Debuff<img className="smallImg2" src={debuffImage} alt="Debuff"/></li>
                            <li>Combat Utility<img className="smallImg" src={combatUtilityImage} alt="Combat"/></li>
                            <li>Out of Combat Utility<img className="smallImg" src={outOfCombatUtilityImage} alt="Out of Combat"/></li>
                        </ul>

                        <h2><u>Arcane 4th-Level Spells</u></h2>
                        <ul> 
                            <li>Damage<img className="smallImg" src={damageImage} alt="Damage"/></li>
                            <li>Buff<img className="smallImg2" src={buffImage} alt="Buff"/></li>
                            <li>Debuff<img className="smallImg2" src={debuffImage} alt="Debuff"/></li>
                            <li>Combat Utility<img className="smallImg" src={combatUtilityImage} alt="Combat"/></li>
                            <li>Out of Combat Utility<img className="smallImg" src={outOfCombatUtilityImage} alt="Out of Combat"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pagination">
                <img src={backArrowImage} alt="Previous" onClick={() => navigate("/")}/>
                <img src={forwardArrowImage} alt="Next" onClick={() => navigate("/tableofContents2")}/>
            </div>
        </div>
    )
}

export default TableOfContents;