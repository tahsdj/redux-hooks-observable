import React from 'react'
import {reducer, initialState} from './reducers/reducer'
import {useRxRedux, ContextStore} from './rx-context.js'


const Source = ({children}) => {
    const state = useRxRedux(reducer, initialState)
    return (
        <ContextStore.Provider value={{...state}}>
            {children}
        </ContextStore.Provider>
    )
}

export default Source
