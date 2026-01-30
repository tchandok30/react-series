import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {username}=useParams()
  return (
    <div className='bg-purple-600'>User:{username}</div>
  )
}

export default User