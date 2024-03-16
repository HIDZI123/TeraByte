import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from './assets/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main">
        <div id="nav">
          <div id="leftlogo">
            <img src= {img} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
