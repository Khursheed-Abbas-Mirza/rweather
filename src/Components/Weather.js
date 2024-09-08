// import React, { useEffect } from 'react'
import Atmosphere from './Atmosphere'
import Wind from './Wind'
import Humidity from './Humidity'
import Forecast from './Forecast'
import { useState } from 'react'

// import Forecast from './Forecast'
const Weather = (props) => {
    const [weather, setWeather] = useState({}) 
    const [Loading, setLoading] = useState(false)
    const fetchdata = async () => {
        props.setprogressbar(30)
       let city=document.getElementById('city').value
       city=city===null||city.length===0?"Machilipatnam":city
        const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c143ccd07fmsh9deb85360cdb8cdp1e378fjsnb04ce379f25e',
                'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
            }
        };
        props.setprogressbar(45)
        try {
            setLoading(true)
            const response = await fetch(url, options);
            props.setprogressbar(65)
            const result = await response.json();
            if(result.message==='Internal Server Error'){
                alert("We cannot Find Your City better to contact us to add your city")
                return ""
            }
            else{
                props.setprogressbar(80)
                setWeather(result)
            }
        } catch (error) {
            console.error(error);
        }
        props.setprogressbar(100)
        setLoading(false)

    }
    useEffect(() => {
        fetchdata()
    },[])

    return (
        <>
            <div className='searchbar mt-5 '>
                <form className="d-flex" role="search">
                    <input className="form-control mx-2 " type="search" placeholder="Enter  Your City" aria-label="Search" id='city' name='city' required />
                    <button className="btn btn-outline-info mx-2" onClick={fetchdata} disabled={Loading} id ="fetchdata-button">Search</button>
                </form>
            </div>
            {Object.keys(weather).length > 0 && <div className='container my-5'>
                <div className="mymain ">
                    <div className='row  '>
                        <div className='col-md-4 '>
                            <Atmosphere current_observation={weather.current_observation.condition} location={weather.location} mint={weather.forecasts[0].low} maxt={weather.forecasts[0].high} climate={weather.current_observation.condition.text} />
                        </div>
                        <div className='col-md-4'>
                            <Wind windtoday={weather.current_observation.wind} timezone_id={weather.location.timezone_id} />
                        </div>
                        <div className='col-md-4 '>
                            <Humidity humtoday={weather.current_observation.atmosphere} sunrise={weather.current_observation.astronomy.sunrise} sunset={weather.current_observation.astronomy.sunset} />
                        </div>
                    </div>
                </div>

                <div >
                    <Forecast forecast={weather.forecasts} />
                </div>
            </div>}

        </>
    )
}

export default Weather
