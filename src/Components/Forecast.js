import React from 'react'

const Forecast = (props) => {
    const forecast=props.forecast
  return (
    <>
    <div className='my-5'>
        <h2 className='text-center my-3'><u>Forecast</u></h2>
        <table className='forecasttable'>
          <thead>
          <tr><th>Day</th><th >Low <i className="fa-solid fa-temperature-low"></i></th><th>High <i className="fa-solid fa-temperature-high"></i></th><th >Atmosphere <i className="fa-solid fa-cloud-sun-rain" style={{color: "#FFD43B"}}></i></th></tr>
          </thead>
        <tbody>
        {forecast.map((item,index)=>{
            return <tr  key={index}><td >{item.day}</td><td >{item.low}&ordm;F</td><td >{item.high}&ordm;F</td><td >{item.text}</td></tr>
        })}
        </tbody>
       </table>
      </div>
      
    </>
  )
}

export default Forecast
