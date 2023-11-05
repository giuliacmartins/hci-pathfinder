import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { choosePage } from "../../features/pageSlice";
import "./assets/searchBarStyle.css";

function SearchBar()  {
    let navigate = useNavigate();
    
    const [value, setValue] = useState('');
    const [spellList, setSpellList] = useState([]);

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

        const getSpellNames = (searchTerm) => {
            Axios.post("http://localhost:3001/getSpellNames", {
                spellName: searchTerm
            }).then((response) => {
                setSpellList(response.data);
                // console.log(spellList)
            })
        }

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
                    {spellList.slice(0,8).map((item) => (
                        <button className="dropDownRow" onClick={(e) => {
                            handleClick(e, item.spell_class, item.spell_type)
                            navigate("/spellPages")
                        }}>{item.spell_name} </button>
                        
                    ))}
                </div>

            </div>
        )
}

export default SearchBar;