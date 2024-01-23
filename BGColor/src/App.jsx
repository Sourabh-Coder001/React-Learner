import { useState } from "react"


function App() {
  const [color,setColor]=useState("black")

  return (
   
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:"black"}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
            <button
            onClick={()=>setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Red"}}>Red</button>
            <button
            onClick={()=>setColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Brown"}}>Brown</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>orange</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Indigo"}}>Indigo</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          </div>
        </div>
      </div>     
   
  )
}

export default App
