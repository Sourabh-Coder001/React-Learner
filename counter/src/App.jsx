import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(0);

  //let counter=15;
const addValue=()=>{
  if(counter<20){
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)

  }
  else{
    setCounter(counter=0)
  }
  
}

const RemoveValue=()=>{
  if(counter<=0){
    setCounter(counter==0)
  }
  else{
    setCounter(counter-=1)
  }
}
  return (
    <>
      <h1>Coffee and React</h1>
      <h2>COunter value :{counter}</h2>
      <button
      onClick={addValue}>Add Value{counter}</button>
      <br />
      <button
      onClick={RemoveValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
