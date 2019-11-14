import React, {createContext, useEffect, useState} from 'react'

export const SourceStore = createContext({})

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
        <SourceStore.Provider value={{...state}}>
            {children}
        </SourceStore.Provider>
    )
}

export default Source
