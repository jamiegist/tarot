import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Tarot Reader</h1>
     <p>Please draw a card for your reading.</p>
    </>
  )
}

export default App
