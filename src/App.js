
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import LoadingBar from 'react-top-loading-bar';
import { useEffect} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { fetchWeather } from './Store/weather';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
function App() {
 const dispatch=useDispatch();
 const status=useSelector(state=>state.weather.status);
 const [progress, setProgress] = useState(10);
useEffect(()=>{
  dispatch(fetchWeather("Machilipatnam"))
},[])
useEffect(()=>{
  if(status==="failed"){
  
    setProgress(0)
  }
  else if(status==="loading"){
    setProgress(50)
  }
  else if(status==="succeeded"){
  
    setTimeout(() => {
      setProgress(100)
    },1000)
    setProgress(0)
  }
},[status])
  return (
    <>
      <HashRouter>
      <LoadingBar color='#03e1e1' height={4} progress={progress}/>
      <Navbar />
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/about" element={<About />} />
        </Routes>
      
      </HashRouter>
    </>
  );

}

export default App;
