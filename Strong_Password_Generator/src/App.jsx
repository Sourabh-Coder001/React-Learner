import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [password,setPassword]=useState("");
  const[Number,setNnumber]=useState(false);
  const[character,setcharacter]=useState(false);
  const [length, setLenght] = useState(8);
const passwordRef=useRef(null);
const PasswordGeneator=useCallback(()=>{
  let pass=""
  let upperstr='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerstr='abcdefghijklmnopqrstuvwxyz';
  let strongpassword=upperstr+lowerstr
  if(Number){
    strongpassword+="0123456789"
  }
  if(character){
    strongpassword+='~!@#$%^&*()_-+={}[]:/|\*-';
  }
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*strongpassword.length+1);
      pass+=strongpassword.charAt(char);
    }
    setPassword(pass)
},[length,Number,character,setPassword]);

const copyPasswordClipboard=useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
})

useEffect(()=>{PasswordGeneator()},[length,Number,character,PasswordGeneator])

  return (
    
      <div className='w-full max-w-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center my-3'>Strong Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
       />
       <button onClick={copyPasswordClipboard} className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <input type="range"
      min={8}
      max={30}
      value={length}
      className='cursor-pointer' 
      onChange={(e)=>{
        setLenght(e.target.value);
      }}/>
      <label>Length:{length}</label>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox" 
      id="NumberInput"
      onChange={()=>{
        setNnumber((prev)=>!prev);
      }}
      />
      <label htmlFor="NumberInput">Number</label>
    </div>

    <div className='flex items-center gap-x-1'>
      <input type="checkbox" 
      id="CharacterInput"
      onChange={()=>{
        setcharacter((prev)=>!prev);
      }}
      />
      <label htmlFor="CharacterInput">Character</label>
    </div>
    </div>
      </div>
    
  )
}

export default App
