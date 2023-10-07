import React from 'react'

export default function Example() {

    const x = { color : "skyblue", fontsize:'40px' }
  return (
    <div>
        <h2 style={{ "color": 'blue' }}>Hello i'm your partner</h2>
        <h2 style={{ "color": 'red' }}>World</h2>
        <h2 style={{ "color": 'green' }}>Guys</h2>

        <h3 style={x}>well come</h3>
        <h3 style={x}>well come to our company</h3>
        
        <h1 style={ss.h1}>Basic knowledge</h1>

        <h6 style={ss.h6}>it's our first project</h6>

        <p style={ss.p}>would you like this</p>


    </div>
)
}

const ss = {
    h1: {
        color:'red',
        backgroundColor:'yellow',
        fontSize: 45
    },
    h6:{
        textDecoration:'underline',
        fontSize:30
    },
    p:{
        textAlign:'center',
        fontSize: 80
    }
}
