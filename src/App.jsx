import React from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Superqualitysection from "./components/Superqualitysection"
import Services from "./components/Services"
import SpecialOffers from "./components/SpecialOffers"
import ReviewCard from "./components/ReviewCard"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
      <Nav/>
      <Hero /> 
      <Products />
      <Superqualitysection />
      <Services/>
      <SpecialOffers />
      <ReviewCard />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
