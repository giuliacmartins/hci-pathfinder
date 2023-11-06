import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/tableOfContentsStyle.css"
import tableOfContentsTitle from "./assets/photos/toc1.png";
import searchImage from "../spellPages/assets/photos/search.png";
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
import Axios from "axios";
import "../spellPages/assets/searchBarStyle.css";
import "../spellPages/assets/spellPagesStyle.css";
import "../spellPages/assets/spellStyle.css"

function TableOfContents(){
    let navigate = useNavigate();

    const [value, setValue] = useState('');
    const [searchSpellList, setSearchSpellList] = useState([]);
    const [showSearch, setShowSearch] = useState(true);

    function openSearch(){
        setShowSearch(false);
    }
    function closeSearch(){
        setShowSearch(true);
    }
    const onChange = (event) => {
        setValue(event.target.value);
    }

    const dispatch = useDispatch();

    const handleClick = (e, spellClass, spellType) => {
        e.preventDefault();

        dispatch(choosePage({
        className: spellClass,
        typeName: spellType,  
        }))
    }

    const handleSearch = (e, spellClass, spellType) => {
        e.preventDefault();

        dispatch(choosePage({
        className: spellClass,
        typeName: spellType,  
        }))
    }

    const getSpellNames = (searchTerm) => {
        Axios.post("http://localhost:3001/getSpellNames", {
            spellName: searchTerm
        }).then((response) => {
            setSearchSpellList(response.data);
            // console.log(spellList)
        })
    }

    function SearchBar(){
        return(
            <div className="searchBarTOC">
            <div className="searchTop">
                <input className="searchInput" type="text"  placeholder = "Spell Name..."
                    onChange={onChange}
                >
                    </input> 
                    
                    <button onClick={()=>getSpellNames(value)}>Search</button>
            </div>
            <div className="dropDown">
                {searchSpellList.slice(0,8).map((item) => (
                    <button className="dropDownRow" onClick={(e) => {
                        handleSearch(e, item.spell_class, item.spell_type)
                        navigate("/spellPages")
                    }}>{item.spell_name} </button>
                    
                ))}
            </div>
            <button className="closeBtn" onClick={closeSearch}>Close</button>

        </div>
        )
    }


    return(
        <div className="tableOfContentsPage">
            <div className="navbar">
            {showSearch ? <img className="search" src={searchImage} alt="Search" onClick={openSearch} style={{marginTop:"0rem"}}/>: SearchBar()}
            <img className="homeImage" src={homeBlackImage} alt="Home" onClick={() => navigate("/")}/>
            </div>
            <div className="tocTitle">
                <div className="column half">
                    <img className="toc" src={tableOfContentsTitle} alt="Table of Contents" style={{marginBottom:'0rem', marginLeft:'-0.3rem'}}/>
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
