import React from 'react'
import Header from '../Header'
import Footer from '../components/Footer'
import Collections from '../components/Collections'
import Banner from '../components/Banner'
const MainPage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections/>
        <Footer/>
    </div>
  )
}

export default MainPage