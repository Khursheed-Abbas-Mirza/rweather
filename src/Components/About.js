import React from 'react'

const About = () => {
  return (
    <div className='abouttext '>
      <h2 className='text-center'>
        Welcome to Weather Application
      </h2>
      <div className=' container my-4'>
        <p className='paratext'>
            This weather Application Predict the weather of your city. It will also forecast upto One week some Features of this Application are Mentioned Below.
        </p>
        <p className='paratext'>
            <u>Current Weather Information:</u>

                Temperature: Displays the current temperature in Fahrenheit.
                Humidity: Shows the percentage of moisture in the air.
                Wind Speed and Direction: Provides data on how fast the wind is blowing and from which direction.
                Precipitation: Information on current or expected rain, snow, or other forms of precipitation.
        </p>
        <p className='paratext'>
        <u>Weather Forecasts:</u>

            Short-Term Forecasts: Provides weather predictions for the coming hours or days.
            Long-Term Forecasts: Offers extended forecasts, often up to 10-14 days, allowing users to plan further ahead.
        </p>
        <p className='paratext'>Overall this  weather application enhance users' ability to stay informed about weather conditions, make better decisions, and ensure safety in various weather scenarios.</p>
        <p>If your City Not Found Please Contact us We Will Try to Add Your City.</p>
        <p>If you have any suggestions, please feel free to contact us.You can reach us by the following links.</p>
      
        <p>Github:<a href="https://github.com/Khursheed-Abbas-Mirza">@React Developer</a></p>
        <p>Mail:<a href="mailto:khursheedabbasprofession14@gmail.com">@React Developer</a></p>
      </div>
    </div>
  )
}

export default About
