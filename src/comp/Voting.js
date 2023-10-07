import React, { useState } from 'react'

export default function Voting() {
  const [age, setAge] = useState('')
	const [msg, setMsg] = useState('')

function run(e) {
  const x = e.target.value
  setAge(x)
  if (x >= 18) {
    setMsg ('Eligible for voting')
	} else {
    setMsg  ('not Eligible for voting')
	}
}


  return (
    <div> 
      <p>Enter your Age</p>
       <input type="number" onChange={run}  value={age} />
     <p>{msg}</p>


    </div>
  )
}