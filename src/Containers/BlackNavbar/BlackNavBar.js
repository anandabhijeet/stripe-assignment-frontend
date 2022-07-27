import React from 'react'
import "./BlackNavBar.css"
const BlackNavBar = () => {
  return (
   <nav className='navbar navbar-expand-lg bg-light fixed-top py-0'>
     <div className='blackNavBar'>
        <div className="container blackNavBar-container ">
            <p className='blackNavBar-text'>Mon-Thu: 9:00 AM - 5:30 PM</p>
            <p className='blackNavBar-text'>Call Us: (00)1234 5678</p>
        </div>

    </div>
   </nav>
  )
}

export default BlackNavBar;