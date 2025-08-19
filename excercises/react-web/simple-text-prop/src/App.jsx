import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting ({greet}){
  return <h1>Hello : {greet}!</h1>;
}

function App() {
  
  return (
    <>
      <Greeting greet="OEDCi"></Greeting>
    </>
  )
}

export default App
