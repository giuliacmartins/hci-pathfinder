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
import { useDispatch } from "react-redux";
import { choosePage } from "../../features/pageSlice";

function TableOfContents(){
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const handleClick = (e, spellClass, spellType) => {
        e.preventDefault();

        dispatch(choosePage({
        className: spellClass,
        typeName: spellType,  
        }))
    }


    return(
        <div className="tableOfContentsPage">
            <div className="navbar">
                <img src={searchImage} alt="Search" onClick={() => {/* Navigate to search page */}}/>
                <img className="spellCart" src={spellCartImage} alt="Spell Cart" onClick={() => {/* Navigate to cart page */}}/>
                <img className="homeImage" src={homeBlackImage} alt="Home" onClick={() => navigate("/")}/>
            </div>
            <div className="tocTitle">
                <div className="column half">
                    <img className="toc" src={tableOfContentsTitle} alt="Table of Contents"/>
                    <img className="leaf" src={leafImage} alt="Leaf"/>

                    <div className="arcaneText">
                        <h2><u>Arcane Cantrips</u></h2>
                        <ul> 
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane Cantrips", "Damage")
                                navigate("/spellPages")
                                }}>
                                Damage</button><img className="smallImg" src={damageImage} alt="Damage"/></li>
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane Cantrips", "Buff")
                                navigate("/spellPages")
                                }}>
                                Buff</button><img className="smallImg2" src={buffImage} alt="Buff"/></li>
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane Cantrips", "Debuff")
                                navigate("/spellPages")
                                }}>
                                Debuff</button><img className="smallImg2" src={debuffImage} alt="Debuff"/></li>
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane Cantrips", "Combat Utility")
                                navigate("/spellPages")
                                }}>
                                Combat Utility</button><img className="smallImg" src={combatUtilityImage} alt="Combat"/></li>
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane Cantrips", "Out of Combat Utility")
                                navigate("/spellPages")
                                }}>
                                Out of Combat Utility</button><img className="smallImg" src={outOfCombatUtilityImage} alt="Out of Combat"/></li>
                        </ul>

                        <h2><u>Arcane 1st-Level Spells</u></h2>
                        <ul> 
                            <li>
                                <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane 1st-Level Spell", "Damage")
                                navigate("/spellPages")
                                }}>
                                Damage
                                </button><img className="smallImg" src={damageImage} alt="Damage"/></li>

                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane 1st-Level Spell", "Buff")
                                navigate("/spellPages")
                                }}>
                                Buff</button><img className="smallImg2" src={buffImage} alt="Buff"/></li>
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane 1st-Level Spell", "Debuff")
                                navigate("/spellPages")
                                }}>
                                Debuff</button><img className="smallImg2" src={debuffImage} alt="Debuff"/></li>
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane 1st-Level Spell", "Combat Utility")
                                navigate("/spellPages")
                                }}>
                                Combat Utility</button><img className="smallImg" src={combatUtilityImage} alt="Combat"/></li>
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane 1st-Level Spell", "Out of Combat Utility")
                                navigate("/spellPages")
                                }}>
                                Out of Combat Utility</button><img className="smallImg" src={outOfCombatUtilityImage} alt="Out of Combat"/></li>
                        </ul>
                    </div>
                </div>
                <div className="column half">
                    <div className="arcaneText2">
                        <h2><u>Arcane 2nd-Level Spells</u></h2>
                        <ul> 
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane 2nd-Level Spell", "Damage")
                                navigate("/spellPages")
                                }}>
                                Damage</button><img className="smallImg" src={damageImage} alt="Damage"/></li>
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane 2nd-Level Spell", "Buff")
                                navigate("/spellPages")
                                }}>
                                Buff</button><img className="smallImg2" src={buffImage} alt="Buff"/></li>
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane 2nd-Level Spell", "Debuff")
                                navigate("/spellPages")
                                }}>
                                Debuff</button><img className="smallImg2" src={debuffImage} alt="Debuff"/></li>
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane 2nd-Level Spell", "Combat Utility")
                                navigate("/spellPages")
                                }}>
                                Combat Utility</button><img className="smallImg" src={combatUtilityImage} alt="Combat"/></li>
                            <li>
                            <button className="typeText" onClick={(e) => {
                                handleClick(e, "Arcane 2nd-Level Spell", "Out of Combat Utility")
                                navigate("/spellPages")
                                }}>
                                Out of Combat Utility</button><img className="smallImg" src={outOfCombatUtilityImage} alt="Out of Combat"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pagination">
                <img src={backArrowImage} alt="Previous" onClick={() => navigate("/")}/>
                <img src={forwardArrowImage} alt="Next" onClick={() => navigate("/spellPages")}/>
            </div>
        </div>
    )
}

export default TableOfContents;
