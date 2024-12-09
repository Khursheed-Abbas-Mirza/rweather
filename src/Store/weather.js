import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchWeather=createAsyncThunk(
    'weather/fetchWeather',async(location)=>{
        try {
            const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'c143ccd07fmsh9deb85360cdb8cdp1e378fjsnb04ce379f25e',
                    'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
                }
            };

            const response = await fetch(url, options);
            const result = await response.json();

            return result;
            
        } catch (error) {
            console.error(error);
            
        }
       
    }
)

const weatherSlice=createSlice({
    name:'weather',
    initialState:{
        current:{
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
        },
        status:'idle',
        error:null, 
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchWeather.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchWeather.fulfilled,(state,action)=>{
            state.status = 'succeeded';
        // Update state with API response
        state.current = {
          location: {
            city: action.payload.location.city,
            woeid: action.payload.location.woeid,
            country: action.payload.location.country,
            lat: action.payload.location.lat,
            long: action.payload.location.long,
            timezone_id: action.payload.location.timezone_id,
          },
          current_observation: {
            pubDate: action.payload.current_observation.pubDate,
            wind: action.payload.current_observation.wind,
            atmosphere: action.payload.current_observation.atmosphere,
            astronomy: action.payload.current_observation.astronomy,
            condition: action.payload.current_observation.condition,
          },
          forecasts: action.payload.forecasts,
        };
        })
        .addCase(fetchWeather.rejected,(state,action)=>{
            state.status='failed';
            state.error=action.error.message
        })
    }
})
export default weatherSlice.reducer