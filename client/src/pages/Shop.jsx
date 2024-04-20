import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/shop.scss'
import Header from '../components/Header'
import Explore from '../components/Explore'

const Shop = () => {
  return (
    <div className='flex'>
      <Helmet>
        <title>E x p l o r e</title>
      </Helmet>
      <Header />
      <Explore />
    </div>
  )
}

export default Shop
