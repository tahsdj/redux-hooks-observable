## Use-Rx-redux

This is a practice using RxJs with React Hooks to complete the basic state management of Redux.

### How to start

```
$ git clone https://github.com/tahsdj/use-rx-redux.git
$ cd use-rx-redux
$ yarn install
$ yarn start
```

### How to use

Use `Source` component on the root of your project to wrap all your custom React components. `Source` needs three props which are `reducer`, `initialState` and `store`. `Store` is a object which combines with the rxjs and dispatch the action. 
```jsx
// App.js
import React from 'react'
import {Store, combineWithEpics} from './lib/store'
import Source from './lib/source'

const $rootEpic = combineWithEpics([epic1, epic2])
Store.run($rootEpic)

function App() {
  return (
    <Source
        reducer={reducer}
        initialState={initialState}
        store={Store}
        >
        /**
         put all your components here
        **/
    </Source>
  );
}

export default App
```

### How to get/set states

It is simple to get the state only by useContext API and keep the same concept of dispatching an actions as React-Redux.

```jsx
// Counter.js
import React, {useContext} from 'react'
import {Store} from '../lib/store'
import {SourceStore} from '../lib/source'

const {dispatch} = Store

function Counter() {
    const { count, popup } = useContext(SourceStore)
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
```

## Epic

Each epic is a function similar to redux-observable which recieves an observable and return an observable stream

```javascript
// example epic
const epic = $action => 
    $action
        .pipe(
            filter(ation=>action.type === 'PLUS'),
            delay(1000),
            mapTo({type: 'MINUS'})
        )
```
