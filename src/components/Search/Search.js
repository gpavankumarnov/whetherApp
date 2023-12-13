import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import ContextApi from "../../ContextApi";
import { useReducer } from "react";
import { WhetherAppReducer } from "../../reducers/WhetherAppReducer";
import { actionTypes } from "../../reducers/ActionTypes";
import { Cart } from "../../ContextApi";



const Search = () => {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);
  const [enabled, setEnabled] = useState(false);
  const { state, dispatch } = useContext(Cart);



let id;
  const handleClick = async () => {
    setEnabled((prev) => !prev) //true
    
    clearTimeout(id)
   id = setTimeout(async()=>{

    try {
      if (cityName.length > 0) {
        const apiKey = "1c6dbaffc97d0ae0fd673b6b8e4a7b6f";
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        );
        const postdata = {
             data: response.data,
             city : cityName
        }
        dispatch({ type: actionTypes.ADD_API_DATA, payload: postdata });
       
      }
    } catch (err) {
      console.log("error while fetching api data", err.message);
      
      setEnabled((prev) => !prev) 
    }
   
    setEnabled((prev) => !prev) 
  }, 1000)
 
  };

  const handleInput = (e) => {
    clearTimeout(id)
   id =  setTimeout(()=> {
  setCityName(e.target.value)
    },900)
  }


  return (
    <div>
      <TextField
        label="outlined"
        variant="outlined"
        onChange={handleInput}
      
      />
      <Button variant="contained" onClick={handleClick} disabled={enabled} >
        Search
      </Button>
    </div>
  );
};

export default Search;
