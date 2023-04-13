import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './Components/data'
import Header from './Components/Header'
import Journal from './Components/Journal'

function App() {
  const cards= data.map(item => {
    return <Journal
      key={item.id}
      {...item} 
    />
  })


  return (
    <div className="App">
      <Header />
      <div className='p-5'>
        {cards}
      </div>
    </div>
  )
}

export default App
