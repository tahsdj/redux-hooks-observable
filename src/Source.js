import React, {createContext, useEffect, useState} from 'react'

export const ContextStore = createContext({})

const Source = ({children, initialState, reducer, store}) => {
    const [state,setState] = useState(initialState)
    useEffect(()=>{
        store
            .combineWithReducer(reducer, initialState)
            .subscribe(newState=>{
                setState(newState)
            })
    },[])
    return (
        <ContextStore.Provider value={{...state}}>
            {children}
        </ContextStore.Provider>
    )
}

export default Source
