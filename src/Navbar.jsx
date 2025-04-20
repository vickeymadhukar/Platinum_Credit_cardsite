import React from 'react'
import './Navbarstyel.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
gsap.registerPlugin(useGSAP)
const Navbar = () => {

  useGSAP(()=>{
    var tl=gsap.timeline();

    tl.from('#logo',{
      y:"-10",
      shrub:true,
    })

    tl.from('#links',{
      y:"-10",
      opacity:0,
      stagger:0.3,
      shrub:true,
    })
  })



  return (
    <div>
      <nav className='nav_container'>
        <div className="nav_content">
            <div className='logo_name'>
                <img id='logo' src="./logo/master.png" alt="" style={{height:"100px",width:"100px"}} />
                <h1>Platinum</h1>
            </div>
            <div className="nav_links">
            <ul>
                <li id='links'><a href="#">Home</a></li>
                <li id='links'><a href="#">About</a></li>
                <li id='links'><a href="#">Services</a></li>
                <li id='links'><a href="#">contact</a></li>
            </ul>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
