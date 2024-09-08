import React from 'react'
// import icon from '../icons/weather.png'
const Atmosphere = (props) => {
    const condition=props.current_observation
    const location=props.location
   
    const climateImages = {
        Sunny:'https://i.pinimg.com/originals/d9/70/f2/d970f26c037520021b879a38d8e60ded.jpg' ,
        Rainy:'https://th.bing.com/th/id/OIP.87wkyA0ZyhEFLfVvhyNLngHaEK?rs=1&pid=ImgDetMain' ,
        Cloudy:'https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?cs=srgb&dl=clouds-cloudscape-cloudy-15' ,
        Snowy:'https://th.bing.com/th/id/OIP.H6QenA8j3YTN7qOAT4gmKgHaEd?rs=1&pid=ImgDetMain' ,
        Windy:'https://www.newshub.co.nz/home/new-zealand/2018/08/weather-warm-wet-and-windy-weather-in-store-for-new-zealand/_jcr_content/par/video/image.dynimg.1280.q75.jpg/v1533614167595/1120-trees-wind-GETTY.jpg' ,
        Foggy:'https://www.gannett-cdn.com/presto/2019/04/09/PNAS/92bf5eac-c3d6-4851-af54-3947a59e2427-fog-03.jpg?crop=2236,1259,x0,y0&width=2236&height=1259&format=pjpg&auto=webp' ,
        Stormy:'https://th.bing.com/th/id/R.45a9763e08c8a702ad8578fb829c7df2?rik=PaFkahNn3tExgA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f1%2f1%2f631016.jpg&ehk=8y6xtHeeyo63EHCfWhEm8cAfiD5DYMxdiPmD67sWf%2bo%3d&risl=&pid=ImgRaw&r=0' ,
        Hot: 'https://th.bing.com/th/id/OIP.9lr8miZdwENCMtob7MENrQHaEK?rs=1&pid=ImgDetMain',
        Cold: 'https://th.bing.com/th/id/OIP.6Nokwkuqy_iLBROT3HKvLwHaFj?rs=1&pid=ImgDetMain',
        Humid: 'https://th.bing.com/th/id/OIP.qxVq95kL8AiR49x_7iu5dgHaEK?rs=1&pid=ImgDetMain',
        Dry: 'https://www.total-slovenia-news.com/media/k2/items/cache/0d861a5b263291a7bd5d5f02b44b6fea_L.jpg',
        Overcast: 'https://th.bing.com/th/id/OIP.WWoPLTXFND13Oo7KkCUKlQHaE8?rs=1&pid=ImgDetMain',
        Hail: 'https://www.thoughtco.com/thmb/06ErUaWGmKLli6B4EF-Ae6uAmr8=/2125x1411/filters:fill(auto,1)/100427326-56a9e2035f9b58b7d0ffaa75.jpg',
        Mist: 'https://www.worldatlas.com/r/w768/upload/c1/46/24/shutterstock-354088418.jpg',
        Thunderstorms:'https://lh5.googleusercontent.com/proxy/gW6D5dlrB3gJK0WtQFlha3knvqRLVNWC1YB4lPLZGz3dqcc4uBNeEUCTYsbIhtzQeU9s-Hpr12G_6LgK7HnlNyoIdAycM8QZ0gkS_UWkEiLIEP2yJzBQ7nnqxf1YGc1-Xb0ylQgR=w1200-h630-p-k-no-nu',
        Drizzle: 'https://www.livemint.com/lm-img/img/2023/09/11/1600x900/rain_1694394182854_1694394183078.jpg',
        "Mostly Cloudy":"https://images.pexels.com/photos/846980/pexels-photo-846980.jpeg?cs=srgb&dl=clouds-cloudy-dark-846980.jpg&fm=jpg",
        "Haze":'https://th.bing.com/th/id/OIP.9OgSlfMcyfO9-UmmxdPwMwHaJ4?w=1440&h=1920&rs=1&pid=ImgDetMain',
        "Partly Cloudy":"https://th.bing.com/th/id/R.07ed155887f2ee5596fa947d77607bc8?rik=3cwWpMu8qExYDw&riu=http%3a%2f%2fdeskpicture.com%2fDPs%2fNature%2fPartlyCloudy_2.jpg&ehk=nSzJvMXSdFLoK0LoOZSZicm2fOZDMOsWHhJeYBy3tXQ%3d&risl=&pid=ImgRaw&r=0",
        "Showers":"https://www.vmcdn.ca/f/files/via/images/weather/rain-umbrella-vancouver-weather.jpg;w=960",
        "Heavy Rain":"https://th.bing.com/th/id/OIP.q_2_cMb7SU8pbhj9VvSB7QHaFN?w=1024&h=720&rs=1&pid=ImgDetMain",
        "Sleet":"https://th.bing.com/th/id/OIP.EdAPEJrfioekp1VZw1IGWAHaE7?rs=1&pid=ImgDetMain",
        "Breezy":"https://th.bing.com/th/id/OIP.B1AlZ2LcIjDg_hAoZlJ83gHaFj?rs=1&pid=ImgDetMain",
        "Gusty":"https://th.bing.com/th/id/OIP.ZpZCSGyubg5WZLQffeMRuQHaEK?rs=1&pid=ImgDetMain",
        "Smog":"https://api.time.com/wp-content/uploads/2016/08/los-angeles-air-pollution.jpeg",
        "Mostly Sunny":"https://th.bing.com/th/id/OIP.5m5079EvRPE5xguDoJjR0gHaEK?w=976&h=549&rs=1&pid=ImgDetMain",
        "Partly Sunny":"https://images.pexels.com/photos/92875/pexels-photo-92875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "Clear":"https://th.bing.com/th/id/OIP.GXvPpMmvVNeQa1ZadhbqZwHaEK?rs=1&pid=ImgDetMain",
        "Scattered Showers":"https://www.vmcdn.ca/f/files/via/images/weather/rain-umbrella-vancouver-weather.jpg;w=960"
      };
      
      
      
    return (
        <div className='my-3'>
            <h4 className='text-center'><u>Atmosphere</u><i className="fa-solid fa-cloud-sun-rain" style={{color: "#dc0be0"}}></i></h4>
            <div className="card mx-4" style={{width: "20rem"}}>
                <img src={climateImages[`${props.climate}`]} className="card-img-top" alt="..." height={"224px"} width={"318px"}/>
                <div className="card-body">
                    <ul style={{listStyleType:"none"}}>
                    <li><b>Country/City:</b>{location.country}/{location.city}</li>
                    <li><b>Weather:</b>{condition.text}</li>
                    <li><b>Temparature:</b>{condition.temperature}&ordm;F</li>
                    <li><b>Min/Max:</b>{props.mint}/{props.maxt}&ordm;F</li>
                    </ul>
                    
                </div>
            </div>

        </div>
    )
}

export default Atmosphere
