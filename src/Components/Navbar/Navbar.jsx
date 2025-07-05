import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import usgs from '../../assets/usgs.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import open_icon from '../../assets/open_icon.png'
import close_icon from '../../assets/close_icon.png'


// import underline from '../../assets/underline.png'

const Navbar = () => {
  const [menu,setMenu] = useState("home")
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    console.log("Menu is closed");
    menuRef.current.style.right="-350px";
  }
  return (
    <div id='navbar' className='navbar'>
        <img className='logo' src={logo} alt='' />
        <img src={open_icon} onClick={openMenu} alt='' className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={close_icon} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' offset={50} href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={usgs} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={usgs} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={usgs} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#work"><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={usgs} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={usgs} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar