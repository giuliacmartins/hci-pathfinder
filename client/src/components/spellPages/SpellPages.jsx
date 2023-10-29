import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/spellPagesStyle.css"
import "./assets/spellStyle.css"
import Axios from "axios";
import RenderHtml from 'react-native-render-html'

function SpellPages(){
    let navigate = useNavigate();

    const [spellList, setSpellList] = useState([]);

    const getSpells = () => {
        Axios.get("http://localhost:3001/getAllSpells").then((response) => {
            setSpellList(response.data);
        })
    }
    

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
                <button onClick={getSpells}>
                    Get Spells!
                </button>
                <div className = "grid-container">
                    {spellList.map((val, key) => {
                        let description = {html: `${val.description}`};
                        return (
                            <div key={key} className="spellBox">
                                <div className="spellPicAndStats">
                                    <div className="spellPic">
                                        Hi!!!!!
                                    </div>
                                
                                    <div className="spellStats">
                                        <h1 style={{fontSize:"2rem"}}>{val.name}</h1>
                                        <RenderHtml source={description}/>
                                     </div>
                                     
                                </div>
                                <p style={{fontSize:"1rem", textAlign:"left", }}>
                                    The description will start here
                                </p>
                                
                            </div>
                        )
                    })}
                </div>
                
             
            </div>
        </div>
    )
}

export default SpellPages;