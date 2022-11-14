import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import PlaceToStay from './pages/PlaceToStay'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Router>
        <Header>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='place-to-stay' element={<PlaceToStay />}/>
          </Routes>
        </Header>
      </Router>
      <Footer />
    </>
  )
}

export default App
