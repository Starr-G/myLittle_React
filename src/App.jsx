import React, {useState} from 'react';
import LeftCard from './Components/LeftCard';
import RightCard from './Components/RightCard';
import './App.css';

function App() {
  const [darkmode, setDarkmode] = useState(false)
  const toggleDarkmode = () => setDarkmode(prev => !prev)

  return (
    <div className={`app ${darkmode ? 'dark' : 'light'}`}>
      <div className="left-card-wrapper">
        <LeftCard darkmode={darkmode} toggleDarkmode={toggleDarkmode} />
      </div>
      <div className="right-card">
        <RightCard darkmode={darkmode}/>
      </div>
    </div>
  );
}

export default App
