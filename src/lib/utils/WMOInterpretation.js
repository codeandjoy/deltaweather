import flattenObject from "./flattenObject";


const WMOInterpretation = flattenObject({
    "0,1": {
        name: "Clear sky",
        color: { day: "#FFD23F", night: "#F6F1D5" },
        icon: { day: "sunny.svg", night: "moon.svg" }
    },
    "2": {
        name: "Partly cloudy",
        color: { day: "#FFD23F", night: "#F6F1D5" },
        icon: { day: "cloudy_sun.svg", night: "cloudy_moond.svg" }
    },
    "3": {
        name: "Overcast",
        color: { day: "#1DA5CF", night: "#1DA5CF" },
        icon: { day: "overcast.svg", night: "overcast.svg" }
    },
    "45,48": {
        name: "Foggy",
        color: { day: "#B1B1B1", night: "#B1B1B1" },
        icon: { day: "fog.svg", night: "fog.svg"  }
    },
    "51,53,55,56,57": {
        name: "Drizzle",
        color: { day: "#1DA5CF", night: "#1DA5CF" },
        icon: { day: "rain_cloud.svg", night: "rain_cloud.svg" }
    },
    "61,63,66": {
        name: "Rain",
        color: { day: "#3048C9", night: "#3048C9" },
        icon: { day: "rain.svg", night: "rain.svg" }
    },
    "65,67": {
        name: "Heavy rain",
        color: { day: "#3048C9", night: "#3048C9" },
        icon: { day: "heavy_rain.svg", nigt: "heavy_rain.svg" }
    },
    "71,73,77": {
        name: "Snow fall",
        color: { day: "#D6F5FF", night: "#D6F5FF" },
        icon: { day: "snow.svg", nigt: "snow.svg" }
    },
    "75": {
        name: "Heavy snow",
        color: { day: "#D6F5FF", night: "#D6F5FF" },
        icon: { day: "snow_heavy.svg", nigt: "snow_heavy.svg" }
    },
    "80,81,82": {
        name: "Rain showers",
        color: { day: "#1DA5CF", night: "#1DA5CF" },
        icon: { day: "rain_cloud.svg", nigt: "rain_cloud.svg" }
    },
    "85,86": {
        name: "Heavy snow",
        color: { day: "#D6F5FF", night: "#D6F5FF" },
        icon: { day: "snow_cloud.svg", nigt: "snow_cloud.svg" }
    },
    "95,96,99": {
        name: "Thunderstorm",
        color: { day: "#3048C9", night: "#3048C9" },
        icon: { day: "thunder.svg", nigt: "thunder.svg" }
    }
});

const interpretWMO = (wmoArr) => {
    return wmoArr.map(wmo => WMOInterpretation[wmo]);
}


export default interpretWMO;