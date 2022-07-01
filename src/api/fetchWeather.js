import axios from "axios";
import secrets from "./secrets.json";

const KEY = secrets.weatherkey;
var URL = secrets.weatherweb;

export const weatherData = async(query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: KEY,
        }
    });

    return data;
}
