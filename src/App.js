import React, { useState } from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const[data,setData]=useState('')
  const getApi = () => {
      axios.get('https://catfact.ninja/fact').then((response) => {
        console.log(response.data.fact);
      setData(response.data.fact);
      }).catch(err =>{console.log(err);})
    }
  return (
    <div className="App">
    <button onClick={getApi} className='btn'>Fetch Api/Refresh</button>
    {data && <p>{data}</p>}
    </div>
  );
}

export default App;
