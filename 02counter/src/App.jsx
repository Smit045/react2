import { useState } from 'react'


import './App.css'

function App() {

  const [counter,setCounter] =useState(15)
  
  // let counter = 15;
  const addvalue=()=> {
      setCounter(counter+1)
  }


  return (
    <>
      <h1>react cource with smit {counter}</h1>
      <h2>counter value: {counter}</h2>    
      <button onClick={addvalue}>Add value</button> {" "} 
      <button>remove value</button>
      <p>footer: {counter}</p>
      </>
  )
}

export default App
