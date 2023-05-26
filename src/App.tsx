import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Search from './pages/search'
import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import RecipePages from './pages/recipe'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/recipe/:id' element={<RecipePages />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
