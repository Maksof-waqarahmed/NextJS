'use client'
import custom from '../custom.module.css'
import { useState } from "react"
export default function User(){
    const [h3Style, setH3Style] = useState({background: 'green'})
    const [color, setColor] = useState('red');
    return(
        <div>
            <h1 style={{background: 'blue', color: 'white'}}>User Page</h1>
            <h3 style={h3Style}>Waqar</h3>
            <button onClick={() => setH3Style({background:"red"})}>Change Style</button>

                {/* class attribute condition */}
            <h4 className={color === 'red' ? custom.red : custom.green }>Waqar Ahmed </h4>
            <button onClick={() => setColor('green')}>Change color</button>

            <h4 style={{background: color === 'red' ? "red" : "green"}}>Rana</h4>
            <h4 id={custom.orange}>Rana 34</h4>
        </div>
    )
}
//multiple elemet par same color dena h to usko destrcutrue krlo