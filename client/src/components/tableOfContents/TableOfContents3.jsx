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
                <img className="spellCart" src={spellCartImage} alt="Spell Cart" onClick={() => {/* Navigate to cart page */}}/>
                <img className="homeImage" src={homeBlackImage} alt="Home" onClick={() => navigate("/")}/>
            </div>
            <div className="tocTitle">
                <div className="column half">
                    <img className="toc" src={tableOfContentsTitle} alt="Table of Contents"/>
                    <div className="arcaneText">
                        <h2><u>Arcane 10th-Level Spells</u></h2>
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
                    <div className="arcaneSpellText">
                        <img className="arcaneSpellsHeader" src={allArcaneSpellsTitleImage} alt="Arcane Spells"/>
                        <div className="arcaneSpellsList">
                            <div className="column">
                                <ul>
                                    <li><strong><u>Cantrips</u></strong></li>
                                    <li>Acid Splash</li>
                                    <li>Ancient Dust</li>
                                    <li>Approximate</li>
                                    <li>Bullhorn</li>
                                    <li>Chill Touch</li>
                                    <li>Dancing Lights</li>
                                    <li>Daze</li>
                                    <li>Deep Breath</li>
                                    <li>Detect Magic</li>
                                    <li>Detect Metal</li>
                                    <li>Draw Moisture</li>
                                    <li>Eat Fire</li>
                                    <li>Electric Arc</li>
                                    <li>Elemental</li>
                                    <li>Counter</li>
                                    <li>Galse Blast</li>
                                    <li>Ghost Sound</li>
                                    <li>Glass Shield</li>
                                    <li>Gouging Claw</li>
                                    <li>Illuminate</li>
                                </ul>
                            </div>

                            <div className="column">
                                <ul>
                                    <li>Infectious Enthusiasm</li>
                                    <li>Invoke True Name</li>
                                    <li>Light</li>
                                    <li>Mage Hand</li>
                                    <li>Message</li>
                                    <li>Musical Accompaniment</li>
                                    <li>Neddle Darts</li>
                                    <li>Phase Bolt</li>
                                    <li>Prestidigitation</li>
                                    <li>Produce Flame</li>
                                    <li>Protect Companion</li>
                                    <li>Puff of Poison</li>
                                    <li>Ray of Frost</li>
                                    <li>Read Aura</li>
                                    <li>Root Reading</li>
                                    <li>Scatter Scree</li>
                                    <li>Shield</li>
                                    <li>Sigil</li>
                                    <li>Slashing Gust</li>
                                    <li>Spout</li>
                                </ul>
                            </div>

                            <div className="column">
                                <ul>
                                    <li>Take Root</li>
                                    <li>Tanglefoot</li>
                                    <li>Telekinetic</li>
                                    <li>Projectile</li>
                                    <li>Timber</li>
                                    <li>Time Sense</li>
                                    <li>Torturous Trauma</li>
                                    <li>Tremor Signs</li>
                                    <li>Warp Step</li>
                                    <li><strong><u>1st Lebel Spells</u></strong></li>
                                    <li>Acidic Burst</li>
                                    <li>Admonishing Ray</li>
                                    <li>Agitate</li>
                                    <li>Air Bubble</li>
                                    <li>Airburst</li>
                                    <li>Alarm</li>
                                    <li>Animate Dead</li>
                                    <li>Animate Rope</li>
                                    <li>Ant Haul</li>
                                    <li>Anticipate Peril</li>
                                    <li>Aqueous Blast</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagination">
                <img src={backArrowImage} alt="Previous" onClick={() => navigate("/tableofContents2")}/>
                <img src={forwardArrowImage} alt="Next" onClick={() => navigate("/spellPages")}/>
            </div>
        </div>
    )
}

export default TableOfContents3;