import React, {useContext} from 'react'
import './Counter.css'
import {Store} from '../lib/store'
import {ContextStore} from '../Source'

const {dispatch} = Store

function Counter() {
    // use useContext to get the current state
    const { count } = useContext(ContextStore)
    return (
        <div className="counter-container">
            <div className="buttons-wrapper">
                <button onClick={()=>dispatch({type: 'PLUS'})}>+1</button>
                <button onClick={()=>dispatch({type: 'MINUS'})}>-1</button>
            </div>
            <span>{count}</span>
        </div>
    )
}

export default Counter