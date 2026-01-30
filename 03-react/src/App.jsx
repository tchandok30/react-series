import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'
function App() {
  const [count, setCount] = useState(0)
let  myarr=[1,2,3];
  return (
   
    <>
      <div>
        <h1 className='bg-red-400 text-3xl p-4'>This is props</h1>
      </div>
      <Card username="tanisha " myarr={myarr}/>
      <Card />
    </>
  )
}

export default App
