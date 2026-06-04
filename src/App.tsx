import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Navbar from './components/Navbar.tsx'
import './App.css'
import Home from './pages/Home.tsx'
import Navbar from './components/Navbar.tsx'
import AboutPage from './pages/AboutPage.tsx'
import Menu from './pages/Menu.tsx'
import ContactPage from './pages/ContactPage.tsx'
function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} /> 
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
