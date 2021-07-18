import React, { useState } from 'react';
import './style.css';
import Button  from "./Button"
import Game from "./Tic"
const App =()=>{
    const [start, setStart]=useState(false)
    return (
        <div>
            <h2 style={{marginTop:50}}>Tik Tac Toe Application Assignment</h2>
            <p className="text-dark">Welcome to React Js Program!.</p>
            <h5 className="text-dark">Day 3 Assignment</h5> 
            {
                start?
                <Game/>
                :
                <div className="mt-5 pt-5" style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <Button onClick={()=>{setStart(true)}} text={"Start"} />
                </div>
            }
            
        </div>
    )
}
export default App