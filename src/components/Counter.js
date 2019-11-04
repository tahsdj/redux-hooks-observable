import React, {useContext} from 'react'
import './Counter.css'
import {producer} from '../store.js'
import {ContextStore} from '../rx-context.js'
import {plus, minus, plusWithAnimation} from '../actions/action'

const {dispatch} = producer

function Counter() {
    const { count } = useContext(ContextStore)
    return (
        <div className="counter-container">
            <span>{count}</span>
            <div className="buttons-wrapper">
                <button onClick={()=>dispatch(plusWithAnimation())}>+1</button>
                <button onClick={()=>dispatch(minus())}>-1</button>
            </div>
        </div>
    )
}

export default Counter