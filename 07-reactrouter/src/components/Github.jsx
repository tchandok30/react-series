import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data=useLoaderData()
    // const [data,setdata]=React.useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=>res.json())
    //     .then((data)=>{setdata(data)})
    // })
  return (
    <div className='text-center text-3xl m-4'>Github followers:{data.followers}</div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/tanishachandok')
    return response.json();
}