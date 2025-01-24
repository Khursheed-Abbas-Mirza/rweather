
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import LoadingBar from 'react-top-loading-bar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import WeatherContext from './Context/Weather/WeatherContext';
import { useState ,useContext,useEffect} from 'react';
function App() {
  
const [progress, setprogress] = useState(0);
const context=useContext(WeatherContext);
const status=context.progress
useEffect(()=>{
  if(status==="failed"){
    setprogress(0)
  }
  else if(status==="loading"){
    setprogress(50)
  }
  else if(status==="succeeded"){
  
    setTimeout(() => {
      setprogress(100)
    },1000)
    setprogress(0)
  }
},[status])
const setloadprogress=(n)=>{
  setprogress(n)
}
  return (
    <>
    
      <HashRouter>
      <LoadingBar color='#03e1e1' height={4} progress={progress}/>
      <Navbar />
        <Routes>
          <Route path="/" element={<Weather setprogress={setloadprogress}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      
      </HashRouter>
    </>
  );

}

export default App;
