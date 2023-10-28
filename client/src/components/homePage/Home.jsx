import React from "react";
import { useNavigate } from "react-router-dom";
import "./assets/homeStyle.css";
import spellbookImage from "./assets/photos/arcaneSpellbook.png";
import arcaneImage from "./assets/photos/arcane.png";

function Home(){
    let navigate = useNavigate();
    return(
        <div className="homePage">
            <div className="homePageHeader">
                <h1>Welcome to the Pathfinder Webpage!</h1>
            </div>

            <div className="spellBook">
                <button onClick={() => {navigate("/tableOfContents")}}>
                    <img className="arcaneImage" src={arcaneImage} alt="Arcane"/>
                    <img src={spellbookImage} alt="Arcane Spellbook"/>
                </button>
            </div>
        </div>
    )
}

export default Home;