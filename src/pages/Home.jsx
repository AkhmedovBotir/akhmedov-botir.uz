import React from 'react'
import { Header, Work, Navbar, PortfolioCarousel, Your, Footer } from '../components'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Work />
      <PortfolioCarousel />
      <Your />
      <Footer />
    </div>
  )
}
