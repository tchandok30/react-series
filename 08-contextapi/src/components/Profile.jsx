import React from 'react'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
    if(!user) return <h1>Not Logged in</h1>
  return (
    <>
     <div>Profile{user.username}:</div>
    </>
   
  )
}

export default Profile