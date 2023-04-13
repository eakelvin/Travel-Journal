import React from 'react'
import { MdTravelExplore } from "react-icons/md";


const Header = () => {
  return (
    <div className='bg-danger' style={{height: "70px"}}>
      <h2 className='text-center p-3 text-light'> <MdTravelExplore /> My Travel Journal</h2>
    </div>
  )
}

export default Header
