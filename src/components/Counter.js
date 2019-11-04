import React, {useContext} from 'react'
import './Counter.css'
import {producer} from '../store.js'
import {ContextStore} from '../rx-context.js'
import {plus, minus, plusWithAnimation} from '../actions/action'

const {dispatch} = producer

function Counter() {
    const { count, popup } = useContext(ContextStore)
    return (
        <div className="counter-container">
            <div className="buttons-wrapper">
                <button onClick={()=>{
                    if (!popup) dispatch(plusWithAnimation())
                }}>+1</button>
                {popup && <div className="popup">+{count}</div>}
            </div>
            <span>{count}</span>
        </div>
    )
}

export default Counter