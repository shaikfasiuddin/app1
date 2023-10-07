import React, { useState } from 'react'

function Calculation() {
    const [x,setx] = useState(0)
    const [y,sety] = useState(0)
    function handlex (event){
       const data = event.target.value 
        setx(parseInt(data))
    }  
    function handley (event){
        const data = event.target.value 
         sety(parseInt(data))
     }  
  return (
    <div>
        <p>X: <input type="number" value = {x} onChange={handlex} /> </p>
        <p>Y: <input type="number" value = {y} onChange={handley} /> </p>
        <br />

       <p> AdD :- {x}+{y} =  {x + y} </p>
       <p> sup :- {x}-{y} =  {x - y} </p>
       <p> Dby :- {x}/{y} =  {x / y}</p>
       <p> pres :- {x}%{y} =  {x % y}</p>
       <p> into :- {x}*{y} =  {x * y}</p>

    </div>
  )
}

export default Calculation