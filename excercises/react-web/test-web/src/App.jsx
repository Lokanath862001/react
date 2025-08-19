import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Person(){
  const age=10;
  return <h1>{age}</h1>;
}

function App() {
  
  return (
    <>
      <Person></Person>
    </>
  )
}

export default App
