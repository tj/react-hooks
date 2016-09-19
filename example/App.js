
import React, { Component } from 'react'
import Hook from '../index'

export default function App({ name, species, update, hide }) {
  if (hide) {
    return <div>
      <p>Nothing to see here.</p>
    </div>
  }

  return <div>
    <h1>Example</h1>
    <p>Hello {name}, you are a {species}.</p>
    <Hook
      willMount={_ => setTimeout(_ => update({ name: 'Luna', species: 'Cat' }), 1000) }
      didMount={_ => setTimeout(_ => update({ hide: true }), 3000) }
      willUnmount={_ => console.log('unmounted') } />
  </div>
}
