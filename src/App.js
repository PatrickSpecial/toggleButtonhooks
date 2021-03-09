import React, { useState } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App(){
  const[ToggleOn, setToggleOn] = useState(true);

 function handleClick() {
    setToggleOn(!ToggleOn);
  }
  if(ToggleOn){ 
  return(
    <div className="container">
      <button className="btn btn-success" onClick={handleClick}>
        {ToggleOn ? 'ON' : 'OFF'}
      </button>
      <h1 className="text text-primary">We have Light</h1>
    </div>
  )
  }else{
    return(
      <div className="container">
        <button className="btn btn-danger" onClick={handleClick}>
          {ToggleOn ? 'ON' : 'OFF'}
        </button>
        <h1 className="text text-secondary">We dont have Light</h1>
      </div>
    )
  }
}

