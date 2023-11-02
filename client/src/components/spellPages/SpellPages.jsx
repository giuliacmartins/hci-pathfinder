import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/spellPagesStyle.css"
import spellCartImage from "./assets/photos/spellcart.png";
import searchImage from "./assets/photos/search.png";
import forwardArrowImage from "./assets/photos/forwardArrow.png";
import backArrowImage from "./assets/photos/backArrow.png";
// import arcanHeaderImage from "./assets/photos/arcane1LevelSpellsHeader.png";
import buffBtnImage from "./assets/photos/buffBtn.png";
import damageBtnImage from "./assets/photos/damageBtn.png";
import tocBtnImage from "./assets/photos/tocBtn.png";
import dropDownBtnImage from "./assets/photos/dropDownBtn.png";
import homeBrownImage from "./assets/photos/homeBrown.png";
import "./assets/spellStyle.css"
import Axios from "axios";
import RenderHtml from 'react-native-render-html'
import moreInfoIcon from "./assets/images/more-info-icon.png"

function SpellPages(){
    let navigate = useNavigate();

    const [spellList, setSpellList] = useState([]);
    const [active, setActive] = useState(true);

    function closeInfo() {
        setActive(true);
    }
    
    function openInfo(){
        setActive(false);
    }


    const getSpells = () => {
        Axios.get("http://localhost:3001/getAllSpells").then((response) => {
            setSpellList(response.data);
        })
    }


    const mapTraits = (traitsList) => {
        return (traitsList.map((val, key) => {
                return(
                    <span><b key={key} className="spellTraits">{val}</b>&nbsp;&nbsp;&nbsp;</span>
                )
        }))
    }
    
    const mapComponents = (spellComponentList) => {
        return (spellComponentList.map((val, key) => {
                return(
                    <b key={key}><u>{val}</u>&nbsp;&nbsp;&nbsp;</b>
                )
        }))
    }

    const mapTraditions = (spellTraditionsList) => {
        let temp = spellTraditionsList[spellTraditionsList.length - 1];
        return (spellTraditionsList.map((val, key) => {
                return(
                    val !== temp ? <span style={{fontSize: "1rem"}}>{val}, </span> : <span style={{fontSize: "1rem"}}>{val}</span> 
                )
           
        }))
    }


    const showMoreInfo = (traditionsArray, source) => {
        return(
            <div className="spellStats">
                <button className="closeButton" onClick={closeInfo}>close</button>
                <p><b>Traditions:</b> {mapTraditions(traditionsArray)}</p>
                <p><b>Source:</b> {source}</p>

                
            </div>
        )
    }

    useEffect(() => {
        getSpells();
        
    }, [])
    

    return(
        <div className="spellPage">
            <div className="navbar">
                <div className="leftIcons">
                    <img className="search" src={searchImage} alt="Search" onClick={() => {/* Navigate to search page */}}/>
                    <img className="spellCart" src={spellCartImage} alt="Spell Cart" onClick={() => {/* Navigate to cart page */}}/>
                </div>
                {/* <div className="arcaneHeader">
                    <img className="arcaneLevelHeader" src={arcanHeaderImage} alt="Arcane 1st Level"/>
                </div> */}
                <div className="rightIcons">
                    <img className="rightNav" src={homeBrownImage} alt="Home" onClick={() => navigate("/")}/>
                    <img className="rightNav" src={tocBtnImage} alt="TOC" onClick={() => navigate("/tableofContents")}/>
                    <img className="rightNav" src={damageBtnImage} alt="Damage" onClick={() => {/* Navigate to search page */}}/>
                    <img className="rightNav" src={buffBtnImage} alt="Buff" onClick={() => {/* Navigate to search page */}}/>
                    <img className="rightNav" src={dropDownBtnImage} alt="Drop Down" onClick={() => {/* Navigate to search page */}}/>
                </div>
            </div>
            {/* <div className="sections">
                <div className="column half">
                    <div className="arcaneText">
                        // add the database here :)
                    </div>
                </div>
                <div className="column half">
                    <div className="arcaneText2">
                        // add the database here :)
                    </div>
                </div>
            </div> */}
            
            
            <div className="spellish">

            <div className="spell">

                <div className = "grid-container">
                    {spellList.map((val, key) => {
                        let description = {html: `${val.description}`};

                        let traitsArray = val.traits.split(`,`);
                        let componentsArray = val.component_abbr.split(`,`);
                        let traditionsArray = val.traditions.split(`,`);
                        return (
                            <div key={key} className="spellBox">
                                <div className="spellPicAndStats">
                                    <div className="spellPic">
                                        Hi!!!!!
                                    </div>
                                
                                    <div className="spellStats">
                                        <div>
                                            <h1 style={{fontSize:"2rem", textAlign:"left", marginBottom:"-0.5rem"}}>{val.spell_name}</h1>
                                        </div>
                                        <h2 style={{fontSize:"1.3rem"}}>{mapTraits(traitsArray)}</h2>
                                        <div style={{textAlign:"left", fontSize:"1.2rem"}}>
                                            <p>{mapComponents(componentsArray)}</p>
                                            {val.range ? <p><b>Range: </b>{val.range}</p> : <></>}
                                            {val.saving_throw ? <p><b>Saving Throw: </b>{val.saving_throw}</p>: <></>}
                                            {val.targets ? <p><b>Targets: </b>{val.targets}</p> : <></>}
                                            {val.duration ? <p><b>Duration: </b>{val.duration}</p> : <></>}
                                        </div>
                                     </div>
                                     
                                </div>
                                <div className = "description" >
                                    <RenderHtml source={description}/>
                                    
                                </div>
                                <div>
                                <button className="moreInfoIcons" onClick={openInfo}><img src={moreInfoIcon} alt="More Information"></img></button>
                                        {active ? "" : showMoreInfo(traditionsArray, val.source)}
                                        {/* <button onClick={closeInfo}>close</button>
                                        <button className="moreInfoIcons" onClick={openInfo}><img src={moreInfoIcon} alt="More Information"></img></button>
                                        <div style={{marginTop: "-10rem"}}>{active ? "" : mapTraditions(traditionsArray)}</div> */}
                                    </div>
                                
                            </div>
                        )
                    })}
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

export default SpellPages;