import WeatherContext from "./WeatherContext";
import { useState } from "react";

const WeatherState = (props) => {
    const [weatherdata,setweatherdata] = useState({
        
            "location": {
                "city": "Machilipatnam",
                "woeid": 2295246,
                "country": "India",
                "lat": 16.176821,
                "long": 81.125603,
                "timezone_id": "Asia/Kolkata"
            },
            "current_observation": {
                "pubDate": 1733556198,
                "wind": {
                    "chill": 101,
                    "direction": "NE",
                    "speed": 1
                },
                "atmosphere": {
                    "humidity": 73,
                    "visibility": 10,
                    "pressure": 1010.2
                },
                "astronomy": {
                    "sunrise": "6:22 AM",
                    "sunset": "5:33 PM"
                },
                "condition": {
                    "temperature": 88,
                    "text": "Partly Cloudy",
                    "code": 30
                }
            },
            "forecasts": [
                {
                    "day": "Sat",
                    "date": 1733587200,
                    "high": 88,
                    "low": 74,
                    "text": "Mostly Clear",
                    "code": 33
                },
                {
                    "day": "Sun",
                    "date": 1733673600,
                    "high": 88,
                    "low": 75,
                    "text": "Showers",
                    "code": 11
                },
                {
                    "day": "Mon",
                    "date": 1733760000,
                    "high": 87,
                    "low": 74,
                    "text": "Scattered Showers",
                    "code": 45
                },
                {
                    "day": "Tue",
                    "date": 1733846400,
                    "high": 88,
                    "low": 75,
                    "text": "Partly Cloudy",
                    "code": 30
                },
                {
                    "day": "Wed",
                    "date": 1733932800,
                    "high": 83,
                    "low": 76,
                    "text": "Showers",
                    "code": 11
                },
                {
                    "day": "Thu",
                    "date": 1734019200,
                    "high": 87,
                    "low": 70,
                    "text": "Partly Cloudy",
                    "code": 30
                },
                {
                    "day": "Fri",
                    "date": 1734105600,
                    "high": 84,
                    "low": 72,
                    "text": "Mostly Sunny",
                    "code": 34
                },
                {
                    "day": "Sat",
                    "date": 1734192000,
                    "high": 87,
                    "low": 68,
                    "text": "Sunny",
                    "code": 32
                },
                {
                    "day": "Sun",
                    "date": 1734278400,
                    "high": 87,
                    "low": 66,
                    "text": "Mostly Sunny",
                    "code": 34
                },
                {
                    "day": "Mon",
                    "date": 1734364800,
                    "high": 88,
                    "low": 65,
                    "text": "Partly Cloudy",
                    "code": 30
                },
                {
                    "day": "Tue",
                    "date": 1734451200,
                    "high": 87,
                    "low": 70,
                    "text": "Partly Cloudy",
                    "code": 30
                }
            ]
        
    });
    const [progress,setprogress]=useState("failed")
    const fetchWeather = async(city) => {
        city=city.length===0?"Machilipatnam":city.trim()
        const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`;
        setprogress("progress")
        
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'bf732bf652msh979ca580b6d5902p1ddd33jsnf86a51063cde',
                'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
            }

        };
        try {
            
            const response = await fetch(url, options);
            if(response.status===500 || response.status===404){
                setprogress("succeeded")
                alert("City Not Found Plz Enter Correct City Name If not Found Plz Contact Us " )
                return
            }
            const result = await response.json();
            setprogress("succeeded")
            setweatherdata(result);
        } catch (error) {
            console.log(error)
        }
        
    
    }
    return (
        <WeatherContext.Provider value={{ weatherdata, fetchWeather ,progress}}>
            {props.children}
        </WeatherContext.Provider>
    );
};

export default WeatherState;