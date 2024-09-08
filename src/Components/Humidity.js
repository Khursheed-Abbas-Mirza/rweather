import React from 'react'
import humdityicon from '../icons/humidity.png'
const Humidity = (props) => {
  const humtoday=props.humtoday
  return (
    <div className='my-3'>
        <h4 className='text-center'><u>Humidity</u> <img src={humdityicon} alt='...' /></h4>
      <div className="card mx-4 " style={{width: "20rem"}}>
                <img src="https://images.yourstory.com/production/document_image/mystoryimage/eivgfalq-hot.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces" className="card-img-top" alt="..."  height={"224px"} width={"318px"}/>
                <div className="card-body">
                    <ul style={{listStyleType:"none"}}>
                      <li><b>Humidity:</b>{humtoday.humidity}&#37;</li>
                      <li><b>Visibility:</b>{humtoday.visibility}</li>
                      <li><b>Pressure:</b>{humtoday.pressure}</li>
                      <li><b>Sunrise/Sunset:</b>{props.sunrise}/{props.sunset}</li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Humidity
