
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import LoadingBar from 'react-top-loading-bar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import WeatherState from './Context/Weather/WeatherState';
import { useState } from 'react';
function App() {
  
const [progress, setprogress] = useState(0);

  return (
    <>
    <WeatherState>
      <HashRouter>
      <LoadingBar color='#03e1e1' height={4} progress={progress}/>
      <Navbar />
        <Routes>
          <Route path="/" element={<Weather setprogress={setprogress}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      
      </HashRouter>
    </WeatherState>
    </>
  );

}

export default App;
