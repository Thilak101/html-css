import React from 'react'
import Navbar from './components/navbar/Navbar'
import "./App.css"
import Header from './components/header/Header'
import Clients from './components/clients/Clients'
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Clients />
    </div>
  )
}

export default App