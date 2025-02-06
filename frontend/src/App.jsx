import React from 'react'
import Navbar from './components/Navbar/Navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Place_order from './pages/Place order/Place_order'
const App = () => {
  return (
    <>
    <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Place_order' element={<Place_order/>}/>
    </Routes>
    </div>
    </>
  )
}


export default App
