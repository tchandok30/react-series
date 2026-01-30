import { useState } from 'react'

import './App.css'

import useCurrencyinfo from "./hooks/usecurrency";

import Inputbox from './components/inputbox';
function App() {
  const[amount,setamount]=useState(0);
  const[from,setfrom]=useState('usd');
  const[to,setto]=useState('inr');
  const[convert,setconvert]=useState(0)
const currentinfo=useCurrencyinfo(from)
const options = currentinfo ? Object.keys(currentinfo) : [];

const converts=()=>{
  setconvert(amount*currentinfo[to]);
}
const swap=()=>{
  setfrom(to);
  setto(from);
  
  setamount(convert)
  setconvert(amount);
}


  return (
    <div className='w-full h-full p-0 m-0 flex flex-wrap justify-center items-center ' >
      
      <div className='w-full border shadow-2xl p-5'>
        <div className='w-full'>
          <form onSubmit={(e)=>{
            e.preventDefault()
            converts()
          }}>
            <div className='w-full rounded-3xl'>
              <Inputbox label="from" amount={amount} currencyoptions={options} oncurrencychange={(currency)=>{setfrom(currency)}} onamountchange={(amount)=>setamount(amount)} selectedcurrency={from} /></div>
              <div className='w-full h-0.5'>
                <button  className='relative'onClick={swap}>Swap</button>
              </div><div className='w-full rounded-3xl mt-5'>
              <Inputbox label="to" amount={convert} currencyoptions={options} amountDisabled oncurrencychange={(currency)=>{setto(currency)}} selectedcurrency={to} /></div>
              <button type="submit" className='w-full  m-2 rounded-lg'>Convert {from} to {to}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
