import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './Landing'
import Watchhistory from './Watchhistory'
import Home from './Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Watchhistory' element={<Watchhistory/>} />
      
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
