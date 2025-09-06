import React, { useContext } from 'react'
import Atmosphere from './Atmosphere'
import Wind from './Wind'
import Humidity from './Humidity';
import Forecast from './Forecast';
import WeatherContext from '../Context/Weather/WeatherContext';
const Weather = (props) => {
    
    const context=useContext(WeatherContext);
    const weather=context.weatherdata
    
    const fetchdata = (event) => {
        event.preventDefault()
        props.setprogress(25)
        let city=document.getElementById('city').value
        context.fetchWeather(city)
        props.setprogress(45)
    }
    return (
        <>
            <div className='searchbar mt-5 '>
                <form className="d-flex" role="search">
                    <input className="form-control mx-2 " type="search" placeholder="Enter  Your City" aria-label="Search" id='city' name='city' required />
                    <button className="btn btn-outline-info mx-2" onClick={fetchdata} id ="fetchdata-button">Search</button>
                </form>
            </div>
            
            {Object.keys(weather).length > 0 && <div className='container my-5'>
                <div className="mymain ">
                    <div className='row g-2 '>
                        <div className='col-12 col-sm-8 mx-auto col-md-6 col-xl-4'>
                            <Atmosphere current_observation={weather.current_observation.condition} location={weather.location} mint={weather.forecasts[0].low} maxt={weather.forecasts[0].high} climate={weather.current_observation.condition.text} />
                        </div>
                        <div className='col-12 col-sm-8 mx-auto col-md-6 col-xl-4'>
                            <Wind windtoday={weather.current_observation.wind} timezone_id={weather.location.timezone_id} />
                        </div>
                        <div className='col-12 col-sm-8 mx-auto col-md-6 col-xl-4'>
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
