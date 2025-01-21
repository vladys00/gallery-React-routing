
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import ArtDetail from './pages/ArtDetail'
import Gallery from './pages/Gallery'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div>
      
      <Navbar/>
      <div className='container mt-4'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/gallery/:artId' element={<ArtDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      </div>
    </div>
  )
}

export default App
