import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/cocktail/:id" exact element={<SingleCocktail />} />
          <Route path="*" exact element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
