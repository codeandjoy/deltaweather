import flattenObject from "./flattenObject";


const WMOInterpretation = flattenObject({
    "0,1": {
        name: "Clear sky",
        color: { day: "#FFD23F", night: "#F6F1D5" },
        icon: { day: "sun", night: "moon" }
    },
    "2": {
        name: "Partly cloudy",
        color: { day: "#FFD23F", night: "#F6F1D5" },
        icon: { day: "cloudy_sun", night: "cloudy_moon" }
    },
    "3": {
        name: "Overcast",
        color: { day: "#1DA5CF", night: "#1DA5CF" },
        icon: { day: "overcast", night: "overcast" }
    },
    "45,48": {
        name: "Foggy",
        color: { day: "#B1B1B1", night: "#B1B1B1" },
        icon: { day: "fog", night: "fog"  }
    },
    "51,53,55,56,57": {
        name: "Drizzle",
        color: { day: "#1DA5CF", night: "#1DA5CF" },
        icon: { day: "rain_cloud", night: "rain_cloud" }
    },
    "61,63,66": {
        name: "Rain",
        color: { day: "#3048C9", night: "#3048C9" },
        icon: { day: "rain", night: "rain" }
    },
    "65,67": {
        name: "Heavy rain",
        color: { day: "#3048C9", night: "#3048C9" },
        icon: { day: "heavy_rain", night: "heavy_rain" }
    },
    "71,73,77": {
        name: "Snow fall",
        color: { day: "#D6F5FF", night: "#D6F5FF" },
        icon: { day: "snow", night: "snow" }
    },
    "75": {
        name: "Heavy snow",
        color: { day: "#D6F5FF", night: "#D6F5FF" },
        icon: { day: "snow_heavy", night: "snow_heavy" }
    },
    "80,81,82": {
        name: "Rain showers",
        color: { day: "#1DA5CF", night: "#1DA5CF" },
        icon: { day: "rain_cloud", night: "rain_cloud" }
    },
    "85,86": {
        name: "Heavy snow",
        color: { day: "#D6F5FF", night: "#D6F5FF" },
        icon: { day: "snow_cloud", night: "snow_cloud" }
    },
    "95,96,99": {
        name: "Thunderstorm",
        color: { day: "#3048C9", night: "#3048C9" },
        icon: { day: "thunder", night: "thunder" }
    }
});

const interpretWMO = (wmoArr) => {
    return wmoArr.map(wmo => WMOInterpretation[wmo]);
}


export default interpretWMO;