import React from 'react'
import NavBar from './component/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './component/Shop'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
    <div className='container mt-5'>
      <Routes>
        <Route exact path='/' element={<Shop/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

