## Use-Rx-redux

This is a practice using RxJs with React Hooks to complete the basic state management of Redux.

### How to start

```
$ git clone https://github.com/tahsdj/use-rx-redux.git
$ cd use-rx-redux
$ yarn install
$ yarn start
```

### Structure

Use `Source` component on the root of your project to wrap all your custom React components.
```jsx
// App.js
import React from 'react'
import Source from './Source.js'

function App() {
  return (
    <Source>
      /**
      put all your components here
      **/
    </Source>
  );
}

export default App
```

### Reducer and Source
`Source` is a component which manages the global state from reducer and pass the state to its chidren components by using context.
```jsx
// Source.js
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
```

### How to get/set states

It is simple to get the state only by useContext API and keep the same concept of using actions as React-Redux.

```jsx
// Counter.js
import {producer} from '../store.js'
import {ContextStore} from '../rx-context.js'
import {plus, minus, plusWithAnimation} from '../actions/action'

const {dispatch} = producer

function Counter() {
    const { count, popup } = useContext(ContextStore)
    return (
        <div className="counter-container">
            <div className="buttons-wrapper">
                <button onClick={()=>dispatch(plusWithAnimation())}>
                    +1
                </button>
                {popup && <div className="popup">+{count}</div>}
            </div>
            <span>{count}</span>
        </div>
    )
}

export default Counter
```

## Action

Action can be a simple function which returns a value(state) or an observable object.