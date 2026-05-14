import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
const Root = () => {
  return (
   <>
     <Header></Header>
     <outlet></outlet>
     <Footer></Footer>
   
   </>
  )
}

export default Root
