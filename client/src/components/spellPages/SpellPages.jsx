import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/spellPagesStyle.css"
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
            <div>
                Hello! This is the Spell Pages!
            </div>
            
            
            <button onClick={() => {navigate("/")}}>
                Go to Home!
            </button>

            <button onClick={() => {navigate("/tableOfContents")}}>
                Go to Table of Contents!
            </button>

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
    )
}

export default SpellPages;