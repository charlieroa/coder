import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemLisContainer from './components/ItemListContainer/ItemLisContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <ItemLisContainer />
    </>
  )
}

export default App
