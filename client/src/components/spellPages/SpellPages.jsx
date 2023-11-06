import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/spellPagesStyle.css"
// import spellCartImage from "./assets/photos/spellcart.png";
import searchImage from "./assets/photos/search.png";
import forwardArrowImage from "./assets/photos/forwardArrow.png";
import backArrowImage from "./assets/photos/backArrow.png";
// import arcanHeaderImage from "./assets/photos/arcane1LevelSpellsHeader.png";
import buffBtnImage from "./assets/photos/buffBtn.png";
import damageBtnImage from "./assets/photos/damageBtn.png";
import tocBtnImage from "./assets/photos/tocBtn.png";
// import dropDownBtnImage from "./assets/photos/dropDownBtn.png";
import homeBrownImage from "./assets/photos/homeBrown.png";
import debuff from "./assets/photos/debuff.png";
import combatUtility from "./assets/photos/combatUtility.png";
import outOfCombat from "./assets/photos/outOfCombat.png";
import "./assets/spellStyle.css"
import Axios from "axios";
import RenderHtml from 'react-native-render-html'
import { useDispatch, useSelector } from "react-redux";
import { noPage, selectPage } from "../../features/pageSlice";
import { choosePage } from "../../features/pageSlice";
// import SearchBar from "./search";
import "./assets/searchBarStyle.css";

function SpellPages(){
    let navigate = useNavigate();

    const pageType = useSelector(selectPage);

    const [spellList, setSpellList] = useState([]);
    const [active, setActive] = useState(true);
    const [value, setValue] = useState('');
    const [searchSpellList, setSearchSpellList] = useState([]);
    const [showSearch, setShowSearch] = useState(true);

    

    useEffect(() => {
        getSpellComponents();
        
    })

    function closeInfo() {
        setActive(true);
    }
    
    function openInfo(){
        setActive(false);
    }

    // function closeSearch() {
    //     setShowSearch(true);
    // }
    
    function openSearch(){
        setShowSearch(false);
    }
    function closeSearch(){
        setShowSearch(true);
    }

    /* HERE!! */

    const onChange = (event) => {
        setValue(event.target.value);
    }



    const getSpellComponents = () => {
        Axios.post("http://localhost:3001/getSpellComponents", {
            spellClass: pageType.className,
            spellType: pageType.typeName
        }).then((response) => {
            setSpellList(response.data);
        })
    }

    const getSpellNames = (searchTerm) => {
        Axios.post("http://localhost:3001/getSpellNames", {
            spellName: searchTerm
        }).then((response) => {
            setSearchSpellList(response.data);
            // console.log(spellList)
        })
    }

    const dispatch = useDispatch();
    const handleTOC = (e) => {
        e.preventDefault();

        dispatch(noPage());
    }

    const navigationBarClick = (e, spellClass, spellType) => {
        e.preventDefault();

        dispatch(choosePage({
        className: spellClass,
        typeName: spellType,  
        }))
    }

    const handleClick = (e, spellClass, spellType) => {
        e.preventDefault();

        dispatch(choosePage({
        className: spellClass,
        typeName: spellType,  
        }))
    }

    function SearchBar(){
        return(
            <div className="searchBar">
            {/* onChange={event => {setName(event.target.value);}} */}
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
                        handleClick(e, item.spell_class, item.spell_type)
                        navigate("/spellPages")
                    }}>{item.spell_name} </button>
                    
                ))}
                {/* <button className="closeBtn" onClick={closeSearch}>Close</button> */}
            </div>
            <button className="closeBtn" onClick={closeSearch}>Close</button>

        </div>
        )
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



    

    
    

    return(
        <div className="spellPage">
            <div className="navbarTOC">
                <div className="leftIcons">
                    {/*openSearch()  showSearch ? "" :*/}

                    {/* <button className="moreInfoIcons" onClick={openInfo}><img src={"images/more-info-icon.png"} alt="More Information"></img></button>
                    {active ? "" : showMoreInfo(traditionsArray, val.source)} */}



                    {showSearch ? <img className="search" src={searchImage} alt="Search" onClick={openSearch}/>: SearchBar()}
                </div>
                <div>
                
                {/* {showSearch ? "" : SearchBar()} */}
                </div>
                {/* <div className="arcaneHeader">
                    <img className="arcaneLevelHeader" src={arcanHeaderImage} alt="Arcane 1st Level"/>
                </div> */}
                <div className="rightIcons">
                    <img className="rightNav" src={homeBrownImage} alt="Home" onClick={() => navigate("/")}/>
                    <img className="rightNav" src={tocBtnImage} alt="TOC" onClick={() => navigate("/tableofContents")}/>
                    <img className="rightNav" src={damageBtnImage} alt="Damage" onClick={(e) => {
                        navigationBarClick(e, pageType.className, "Damage");
                        navigate("/spellPages")
                        }}/>
                    <img className="rightNav" src={buffBtnImage} alt="Buff" onClick={(e) => {
                        navigationBarClick(e, pageType.className, "Buff");
                        navigate("/spellPages")
                        }}/>
                    <img className="rightNav" src={debuff} alt="Debuff" onClick={(e) => {
                        navigationBarClick(e, pageType.className, "Debuff");
                        navigate("/spellPages")
                        }}/>
                    <img className="rightNav" src={combatUtility} alt="Combat Utility" onClick={(e) => {
                        navigationBarClick(e, pageType.className, "Combat Utility");
                        navigate("/spellPages")
                        }}/>
                    <img className="rightNav" src={outOfCombat} alt="Out of Combat" onClick={(e) => {
                        navigationBarClick(e, pageType.className, "Out of Combat Utility");
                        navigate("/spellPages")
                        }}/>
                    {/* <img className="rightNav" src={dropDownBtnImage} alt="Drop Down" onClick={() =>{}}/> */}
                    
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
                {pageType.className === "Arcane Cantrips" ? <h1 style={{marginRight: "43rem", color: "brown"}}><b><u>{pageType.className} of {pageType.typeName} Type</u></b></h1> : <h1 style={{marginRight: "43rem", color: "brown"}}><b><u>{pageType.className}s of {pageType.typeName} Type</u></b></h1>}
                

            <div className="spell">

                <div className = "grid-container">
                    {spellList.map((val, key) => {
                        let description = {html: `${val.description}`};

                        let traitsArray;
                        val.traits == null ? val.traits = null : traitsArray = val.traits.split(`,`);

                        let componentsArray;
                        val.component_abbr == null ? val.component_abbr = null : componentsArray = val.component_abbr.split(`,`);
                        
                        let traditionsArray;
                        val.traditions == null ? val.traditions = null : traditionsArray = val.traditions.split(`,`);

                        return (
                            <div key={key} className="spellBox">
                                <div className="spellPicAndStats">
                                    <div className="spellPic">
                                        {val.img == null ? <>Hi!</> : <img src={val.img} alt="Spell"></img>}
                                    </div>
                                
                                    <div className="spellStats">
                                        <div>
                                            <h1 style={{fontSize:"2rem", textAlign:"left", marginBottom:"-0.5rem"}}>{val.spell_name}</h1>
                                        </div>
                                        <h2 style={{fontSize:"1.3rem"}}>{val.traits == null ? <></> : mapTraits(traitsArray)}</h2>
                                        <div style={{textAlign:"left", fontSize:"1.2rem"}}>
                                            {val.component_abbr == null ? <></> : <p>{mapComponents(componentsArray)}</p>}
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
                                <button className="moreInfoIcons" onClick={openInfo}><img src={"images/more-info-icon.png"} alt="More Information"></img></button>
                                        {active ? "" : showMoreInfo(traditionsArray, val.source)}
                                        
                                    </div>
                                
                            </div>
                        )
                    })}
                </div>
                
             
            </div>
            </div>
            <div className="pagination">
                <img src={backArrowImage} alt="Previous" onClick={(e) => {
                    handleTOC(e)
                    navigate("/tableOfContents")}}/>
                <img src={forwardArrowImage} alt="Next" onClick={() => navigate("/")}/>
            </div>
        </div>
    )
}

export default SpellPages;