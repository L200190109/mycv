import React,{useState} from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"
function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <div >
        <nav >
            <h3 ><span className='p'>P</span>ORT<span className='p'>F</span>0LIO</h3>
            <ul className={isMobile ? "nav-link-mobile":"nav-link" } 
            onClick={()=> setIsMobile(false)}>
                 
                 <a className="nav-items" href="#">
                     <li>Home</li>
                 </a>
                 
                 <a className="nav-items" href="#about">
                     <li>AboutMe</li>
                 </a>
                 
                 <a className="nav-items" href="#myskill">
                     <li>Myskill</li>
                 </a>
                 <a className="nav-items" href="#contact">
                     <li>Contact</li>
                 </a>
                 
                 </ul>


        <button className='mobile-menu-icon' onClick={()=> setIsMobile(!isMobile)}>
            {isMobile ? (<i className="fas fa-times"></i>):(<i className="fas fa-bars"></i>)}
        </button>
        </nav>

  </div>
  )
}

export default Navbar