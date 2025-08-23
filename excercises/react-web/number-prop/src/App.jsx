import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  function Square({number}){
    return number*number;
  }
  function Cube({number}){
    return(<p>Cube is : {number*number*number}</p>)
  }

  function CircleArea({radius}){
      const area= Math.PI*radius*radius;
      return(
        <div>
          <h3>Radius of the Circle is : {radius}</h3>
          <h2>Area of the Circle is : {area}</h2>
        </div>
      );
  }

  return (
    <>
      <p>Square is :<Square number={6}></Square></p>
      <Cube number={3}></Cube>
      <CircleArea radius={4.8}></CircleArea>
    </>
  )
}

export default App
