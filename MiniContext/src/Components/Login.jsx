import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [username,Setusername]=useState('')
    const [password,Setpassword]=useState('')

    const {Setuser}=useContext(UserContext)
    const HandelSubmit=(e)=>{
        e.preventDefault()
        Setuser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e)=>{
            Setusername(e.target.value)
        }}
        placeholder='Username'/>
        <input type="text"
        value={password}
        onChange={(e)=>{
            Setpassword(e.target.value)
        }}
        placeholder='password' />
        <button onClick={HandelSubmit}>Submit</button>
    </div>
  )
}

export default Login