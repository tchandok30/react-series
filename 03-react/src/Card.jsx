import React from 'react'

function Card(props) {
    
    
  return (<><div>{props.username||"hc"}</div>
<div>{props.post||"staff engineer"}</div>
<div>{props.myarr}</div>+</>

  )
}

export default Card