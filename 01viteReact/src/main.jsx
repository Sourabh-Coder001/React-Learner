import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function Myapp(){
//   return(
//     <>
//     <h1>Custom App!</h1>
//     </>
//   )
// }

// const ReactElement={
//   type:'a',
//   props:{
//       href:'http://google.com',
//       target:'_balnk'
//   },
//   children:'Click me to visit google'
// }
// const anotherElement=(
//   <a href="https://google.com" >Visit Google</a>
// )

const anotherUser="Hello WOrld"
const ReactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

  ReactElement

)  
