import { useState } from 'react'
import properties from './data/properties'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PropertyDetail from './components/PropertyDetail'
import Contact from './components/Contact'
import PrivacyPolicy from './components/PrivacyPolicy'
import Terms from './components/Terms'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-100 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
