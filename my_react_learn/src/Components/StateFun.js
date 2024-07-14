import React, { useState } from 'react'

function StateFun() {
    const [user,setUser] = useState('Veera');
    console.log(user)

  return (
    <div>
        <h1>{user}</h1>
       <button onClick={()=>setUser('Babu')}>Click me</button>
    </div>
  )
}

export default StateFun