import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let objmy={
    userName:"SOurabh",
    age:"22"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tilwind Test</h1>
      <Card username="ChaiorCdde" someobj={objmy} btnText="Click Me" />
      
    </> 
  )
}

export default App
 