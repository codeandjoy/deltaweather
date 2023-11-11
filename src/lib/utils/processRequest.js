import interpretWMO from "./WMOInterpretation";
import parseDate from "./parseDate";
import { getEvery, splitInto } from "./arr";


const queryCity = async (city) => {
    let cityData = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`).then(r => r.json());
    let cityWeatherData = null;
    if(cityData.results){
        cityWeatherData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityData.results[0].latitude}&longitude=${cityData.results[0].longitude}&timezone=${cityData.results[0].timezone}&hourly=temperature_2m,relative_humidity_2m,weather_code,surface_pressure,wind_speed_10m&forecast_days=3`).then(r => r.json());
    }

    if(!cityWeatherData) return undefined;

    // Process data

    // Shape object and filter data time to */3h
    const cleanData = {};
    cleanData.time = getEvery(3, cityWeatherData.hourly.time);
    cleanData.temperature = getEvery(3, cityWeatherData.hourly.temperature_2m);
    cleanData.wind = getEvery(3, cityWeatherData.hourly.wind_speed_10m);
    cleanData.humidity = getEvery(3, cityWeatherData.hourly.relative_humidity_2m);
    cleanData.pressure = getEvery(3, cityWeatherData.hourly.surface_pressure);
    cleanData.wmo = getEvery(3, cityWeatherData.hourly.weather_code);

    // Interpret WMO
    cleanData.wmo = interpretWMO(cleanData.wmo);

    // Parse date
    cleanData.time = parseDate(cleanData.time);

    // Split into day chunks
    for(const [key, value] of Object.entries(cleanData)){
        cleanData[key] = splitInto(8, value);
    }
    
    // 
    
    return cleanData;
}

export default queryCity;