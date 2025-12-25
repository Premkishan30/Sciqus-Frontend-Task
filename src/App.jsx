import { useState } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import {slides} from './data/ImageCarousel.json'
import Container1 from './components/containers/Container1'
import Container2 from './components/containers/Container2'
import Container3 from './components/containers/Container3'
import Container4 from './components/containers/Container4'
import Container5 from './components/containers/Container5'
import Container6 from './components/containers/Container6'
import {certificates} from './data/ImageCarousel.json'
import {logos} from './data/ImageCarousel.json'

function App() {



  return (
    
    <>
     <Header/>
     <div className='app-layout'>
      <SideBar/>
      <div className="main-content">
      <Container1 data={logos}/>
      <Container2/>
      <Container3 data={slides}/>
      <Container4/>
      <Container5/>
      <Container6 data={certificates}/>
      </div>
      </div>     

    </>
  )
}

export default App
