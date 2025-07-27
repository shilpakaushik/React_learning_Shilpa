import React from 'react'
import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(15);

  const addvalue=() => {
     setCounter(counter+1);
    console.log("Counter value is",Math.random(), counter );
  }
  const removevalue=()=>{
    if(counter>0) {
      setCounter(counter-1);
    } else {
      alert("Counter cannot be less than 0");
    }
 
    console.log("Counter value is",Math.random(), counter );
  }
  return (
    <>
     <h1>Counter App</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addvalue}>Increment value</button>
     <br>

     </br>
      <button onClick={removevalue}>Decrement value</button>
    </>
  )
}

export default App
