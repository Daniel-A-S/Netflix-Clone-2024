import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import RowList from '../../Components/Rows/Row/RowList/RowList'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </div>
  )
}

export default Home
