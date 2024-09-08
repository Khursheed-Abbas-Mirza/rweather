import React from 'react'

const Wind = (props) => {
  const wind=props.windtoday
  return (
    <div className='my-3'>
        <h4 className='text-center'><i className="fa-solid fa-wind"></i><u>Wind</u></h4>
      <div className="card mx-4" style={{width: "20rem"}}>
                <img src="https://thumbs.dreamstime.com/b/decorative-wind-turbine-garden-countryside-france-220136830.jpg" className="card-img-top" alt="..." height={"224px"} width={"318px"} />
                <div className="card-body">
                    <ul style={{listStyleType:"none"}}>
                      <li><b>Wind chill:</b>{wind.chill}&#37;</li>
                      <li><b>Wind Speed:</b>{wind.speed}Km/h</li>
                      <li><b>Wind Direction:</b>{wind.direction}</li>
                      <li><b>Time Zone:</b>{props.timezone_id}</li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Wind
