import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(0);
  return (
    <>
    <h1>Counter App</h1>
    <h3>Counter value is :{count}</h3>
    <button onClick={()=>setCount(count+1)}>Increase Value</button>
    <button onClick={()=>setCount(count-1)}>Decrease Value</button>
    </>
  )
}

export default App
