import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Product({name, colour, price}){
  return(
      <div>
        <h1>{name}</h1>
        <h3>{colour}</h3>
        <h3>{price}</h3>
      </div>
  );
}

function App() {

  return (
    <>
      <Product name="Laptop" colour="Blue" price={85000}></Product>
    </>
  )
}

export default App
