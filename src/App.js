import React, { useState } from "react";
import './App.css';
import { weatherData } from './api/fetchWeather.js';
//import s from './api/secrets.json';

//let t = require('./api/secrets.json');


const App = () => {
    const [weatherquery, setWeatherquery] = useState('');
    const search = async (e) => {
        if(e.key == 'Enter'){
            const data = await weatherData(weatherquery);
            console.log(e.key);
            console.log(data);
        }
    }

    return(
        <div className="main">
            <input
                className="input"
                placeholder="Search a city..."
                value={weatherquery}
                onChange={(e) => setWeatherquery(e.target.value)}
                onKeyPress={search}
                 >
            </input>
        </div>
    )
}

export default App;
