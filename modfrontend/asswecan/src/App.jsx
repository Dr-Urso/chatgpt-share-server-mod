import { useState } from 'react'
import { Car } from './carpage/Car'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Car style={{ display: 'flex', justifyContent: 'stretch', width: '100%' }}/>


    </>
  )
}

export default App
