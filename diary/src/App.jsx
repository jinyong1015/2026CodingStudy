import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Logo(props) {
  const style = {
    color : props.color
  }
  return(
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo title = "props test" color ="blue"/>
      <Logo title = "props test2"/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
