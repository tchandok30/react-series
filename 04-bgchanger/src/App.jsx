import { useState } from 'react'

import './App.css'

function App() {
  const [colour, setColour] = useState('olive ')

  return (
    <>
      <div className='bg-amber-300 w-screen h-screen duration-200' style={{backgroundColor: colour}}>
        <div className='flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button style={{backgroundColor:'red'}}onClick={() => setColour('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Red</button>
            <button style={{backgroundColor:'green'}}onClick={() => setColour('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Green</button>
            <button style={{backgroundColor:'blue'}}onClick={() => setColour('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' >Blue</button>
          </div>
        </div>
      </div>
      <div></div>
      <button></button>
    </>
  )
}

export default App
