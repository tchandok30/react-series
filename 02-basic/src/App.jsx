import { useState } from 'react'

import './App.css'

function App() {
  const[counter,setCounter]=useState(15);//variable,method
  
const addvalue=()=>{
  setCounter((prevcounter)=>prevcounter+1)
  setCounter((prevcounter)=>prevcounter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)//batching all are same
  
}
const removevalue=()=>{
  setCounter(counter-1)
}
  return (
    <>
     <h1>React course{counter}</h1>
     <h1>Counter Value:{counter}</h1>
     <button onClick={addvalue}>Add value</button>{" "}
     <button onClick={removevalue}>remove value</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
