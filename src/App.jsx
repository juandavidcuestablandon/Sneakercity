import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Novedades from './components/Novedades'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Zapatillas from './components/pages/Zapatillas'
import Rebajas from './components/pages/Rebajas'
import Marcas from './components/pages/Marcas'
import '../src/App.css'
import { SearchResultsProvider } from './Context/DataContext'
import Search from './components/pages/search'
import Product from './components/pages/Product'
import Favorites from './components/pages/user/Favorites'
import Notfound from './components/pages/404'

function App() {

  
return (
    
   <SearchResultsProvider>

     <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sneakers' element={<Zapatillas/>}/>
        <Route path='/news' element={<Novedades/>}/>
        <Route path='/sales' element={<Rebajas/>}/>
        <Route path='/brands' element={<Marcas/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/favorite' element={<Favorites/>}/>
        <Route path='*' element={<Notfound/>}/>

      </Routes>

      <Footer />
      

      </Router>
   </SearchResultsProvider>
      
    
   


    
  )
}

export default App
