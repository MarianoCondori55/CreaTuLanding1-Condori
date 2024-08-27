import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
     <NavBar/>
     <ItemListContainer message="String pasado mediante props aaaaaaaaaaaaaaaa"/>
    </>
  )
}

export default App
