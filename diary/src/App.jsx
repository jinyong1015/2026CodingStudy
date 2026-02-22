import { Component, useState } from 'react'
import styled from 'styled-components';
import './App.css'

const Description = styled.p`
  color: #888;
`

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
      <Description>
        Click on the Vite and React logos to learn more
      </Description>
    </>
  )
}

export default App
