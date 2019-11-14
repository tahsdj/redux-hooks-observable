import React from 'react'
import './App.css'
// import Source from './Source'
import Source from './lib/source'
import Counter from './components/Counter'
import {Store, combineWithEpics} from './lib/store'
import {reducer, initialState} from './reducers/reducer'
import {plusAnimation, asyncDecrease} from './actions/action'

const $rootEpic = combineWithEpics([plusAnimation, asyncDecrease])
Store.run($rootEpic)

console.log('Source: ', Source)
function App() {
  return (
    <Source 
      reducer={reducer}
      initialState={initialState}
      store={Store}
      >
      <Counter/>
    </Source>
  );
}

export default App
