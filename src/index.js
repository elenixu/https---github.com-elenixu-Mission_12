import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Competences from './pages/Competences'
import Travaux from './pages/Travaux'
import Contact from './pages/Contact'

const root = document.getElementById('root')
const rootElement = createRoot(root)

rootElement.render(
  <div className="container-global">
    <React.StrictMode>
      <Router>
        <>
          <div className="main-header">
            <Header />
            <Home />
          </div>
          <Competences />
          <Travaux />
          <Contact />
          <Footer />
        </>
      </Router>
    </React.StrictMode>
  </div>
)
