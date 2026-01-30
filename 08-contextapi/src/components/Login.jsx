import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../contexts/UserContext';


function Login() {
    const[password,setpassword]=useState("");
const[username,setusername]=useState("");
const {setUser}=useContext(UserContext);
const handlesubmit=(e)=>{
e.preventDefault()
setUser({username,password})
}
  return (
    
    <>
    <h2>Login</h2>
    <input type="text" onChange={(e)=>setusername(e.target.value)} value={username} placeholder='Username' />
    <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password} placeholder='Password'  />
    <button onClick={handlesubmit}>Submit
    </button>
    </>
  )
}

export default Login