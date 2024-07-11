import React from 'react'
import CanvasSmoke from './components/CursorAnimation'
import Header from './components/Header'
import "./css/App.css"
import { Route, Routes } from 'react-router-dom'
import LandingPage from './screens/LandingPage'
import "./css/Responsive.css"
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='app'>
      <CanvasSmoke/>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        </Routes>
        <Footer/>
 
    </div>
  )
}

export default App
