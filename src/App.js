import React from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Contact, Home, NoPage, Portfolio } from './pages'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}
