import React from 'react'
//useID()
function Inputbox({label,amount,onamountchange,oncurrencychange,currencyoptions=[],
    selectedcurrency="usd",amountDisabled=false,currencyDisabled=false,classname='',
}){
  return (
  <div className={`bg-white p-2 rounded-3xl flex ${classname}`}>
    <div className='p-0'>
        <label htmlFor="currency"className='text-black  '>{label}</label>
        <input id="currency" type="number" className='w-full bg-transparent text-black text-center  ' placeholder='amount' disabled={amountDisabled} value={amount} onChange={(e)=>onamountchange (Number(e.target.value))} />
    </div>
    <div className=' flex flex-wrap justify-center'>
    <p className='text-black  w-full'>Currency type</p>
    <select value={selectedcurrency} className='rounded text-black bg-gray-300 cursor-pointer outline-none' onChange={(e)=>oncurrencychange(e.target.value)} disabled={currencyDisabled}>
        {currencyoptions.map((currency)=>(
        <option value={currency} key={currency}>{currency}</option>
        )

        )}
        </select></div>
  </div>
  )
}

export default Inputbox