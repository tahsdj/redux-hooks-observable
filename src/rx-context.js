import {createContext, useState, useEffect} from 'react'
import {scan} from 'rxjs/operators'
import {store} from './store.js'

export const ContextStore = createContext({})

export const useRxRedux = (reducer, initialState) => {
    const [state,setState] = useState(initialState)
    useEffect(()=>{
        store
        .pipe(scan(reducer, initialState))
        .subscribe(newState=>setState(newState))
    },[])
    return state
}
