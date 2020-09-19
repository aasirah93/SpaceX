import React, { useState, useEffect } from 'react';
import RocketList from './components/RocketList'
import axios from 'axios'
import './App.css';


function App() {
  const [rocket, setRocket] = useState([]);

  useEffect(() =>  {
    axios.get('https://api.spacexdata.com/v3/rockets').then(res => {
      setRocket(res.data.results.map(p => p.rocket_name))
    })
  }, [])

   return (
    <div>
      <RocketList rocket={rocket} />
    </div>
  );
}

export default App;

