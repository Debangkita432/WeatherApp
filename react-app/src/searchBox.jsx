import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './searchBox.css';


export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
   const API_URL="https://api.openweathermap.org/data/2.5/weather"
   const API_KEY="62dffcc060f311977836fbdd96fca812"

   let getWeatherInfo= async()=>{
    try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); //fetching data frpm api..
    let jsonResponse= await response.json();
   
    let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelslike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    };
    console.log(result); //required things saved from json data..
    return result;
  }catch(err){
    throw err;
  }
   };

   let handleChange=(evt)=>{
    setCity(evt.target.value);
   };

   let handleSubmit=async(evt)=>{
   try{
    evt.preventDefault(); // This is often used in form submissions to prevent the form from submitting and causing a page reload. Instead, it allows you to handle the form submission with JavaScript.
    console.log(city);
    setCity("");  //it will remove everything from the text box after submission..
   let newinfo= await getWeatherInfo();
   updateInfo(newinfo);
   }catch(err){
    setError(true);
   }
   };


return(
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:"red"}}>No such place exits!</p>}
            
            </form>

        </div>
    )
}