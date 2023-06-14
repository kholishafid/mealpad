import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import HomePage from './pages/home'
import SearchPage from './pages/search'
import RecipePage from './pages/recipe'
import BookmarkPage from './pages/bookmark'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/recipe/:id' element={<RecipePage />} />
        <Route path='/bookmark' element={<BookmarkPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
