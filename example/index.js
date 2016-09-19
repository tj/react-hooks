
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

const root = document.querySelector('#app')

const state = {
  name: 'Tobi',
  species: 'Ferret'
}

state.update = changes => {
  console.log('update state', changes)
  Object.assign(state, changes)
  state._sub()
}

state.subscribe = cb => {
  state._sub = cb
  cb()
}

state.subscribe(_ => {
  ReactDOM.render(<App {...state} />, root)
})
