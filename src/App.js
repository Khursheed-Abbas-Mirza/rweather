
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [progress, setprogress] = useState(10);
  const setprogressbar = (progress) => {
    // console.log(apikey)
    setprogress(progress)
  }
  const apikey=process.env.REACT_WEATHER_API_KEY
  // const apikey='bf732bf652msh979ca580b6d5902p1ddd33jsnf86a51063cde'
  return (
    <>

      <HashRouter>
      <LoadingBar color='#03e1e1' height={4} progress={progress}/>
      <Navbar />
        <Routes>
          <Route path="/" element={<Weather setprogressbar={setprogressbar} apikey={apikey}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      
      </HashRouter>
    </>
  );

}

export default App;
