import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Novedades from './components/Novedades'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Zapatillas from './components/pages/Zapatillas'
import Rebajas from './components/pages/Rebajas'

import Marcas from './components/pages/Marcas'
import '../src/App.css'

function App() {

  // llamada a la db
  
return (
    
   
       <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sneakers' element={<Zapatillas/>}/>
        <Route path='/news' element={<Novedades/>}/>
        <Route path='/sales' element={<Rebajas/>}/>
        <Route path='/brands' element={<Marcas/>}/>
      </Routes>

      <Footer />
      

      </Router>
    
   


    
  )
}

export default App
