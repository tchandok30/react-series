import { useState,useCallback,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const passwordref=useRef(null);
  const [length,setlength] = useState(8)
  const [password,setpassword] = useState('')
 const [noallowed,setnoallowed] = useState(false)
const [charallowed,setcharallowed] = useState(false)
const generatepassword=useCallback(()=>{
  let pass='';
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcde';
  if(noallowed) str+='1234567890'
  if(charallowed) str+='@#%^&*'
  for (let index = 0; index < length; index++) {
    const char=Math.floor(Math.random() * str.length +1);
    pass+=str.charAt(char);
    
  }setpassword(pass);
},[length,noallowed,charallowed])

useEffect(()=>{
generatepassword()
},[length,noallowed,charallowed])
const copypassword=()=>{
  window.navigator.clipboard.writeText(password);
  passwordref.current.select();
}
  return (
    <div className='w-full h-full p-0 m-0 bg-gray-800 shadow px-3 py-4 round rounded-2xl'>
<h1 className='text-white text-center '>Password Generator</h1>
<div className='flex shadow rounded-2xl gap-4 m-2'>
<input ref={passwordref} type="text"className='outline-none w-full bg-white rounded-2xl text-black' id="" placeholder={password}  readOnly value={password}/>
<button onClick={copypassword} className=' outline-none bg-blue-700 text-white shrink-0'>Copy</button>
</div><div className='flex gap-4'>
  <div className='flex items-center gap-3 '>
<input type="range" min={6} max={100} className='cursor-poimter' onChange={(e)=>{setlength(e.target.value)}} />
<label  htmlFor="length">Length:{length}</label>
</div>
<div className='flex gap-2'>
  <div className='flex items-center '></div>
<input type="checkbox" defaultChecked={noallowed} onChange={()=>{setnoallowed((prev)=>!prev)}}name="" id="" />
<label htmlFor="number">Number</label>
<div className='flex gap-2'>
  <div className='flex items-center '></div>
<input type="checkbox" defaultChecked={charallowed} onChange={()=>{setcharallowed((prev)=>!prev)}}name="" id="" />
<label htmlFor="character">Character</label>
</div></div>
</div>
    </div>
  )
}

export default App
