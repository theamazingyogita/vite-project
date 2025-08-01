import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import './Navbar.css';

const Navbar = () => {


  const [sticky, setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=> {
       setSticky(window.scrollY> 50);
    })
  },[]);
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu =()=>{
    setMobileMenu(!mobileMenu);

  }
  return (
   <nav className= {`container ${sticky? `dark-nav`:''}`}>
    <img src ={logo} alt ="logo" className='logo'/>
    <ul className={mobileMenu ?'':'hide-mobile-menu'}>
        <li><Link to ='hero' smooth={true}offset={0} duration={500} >Home</Link></li>
         <li><Link to ='program' smooth={true}offset={-260} duration={500} >Program</Link></li>
          <li><Link to ='about' smooth={true}offset={-150} duration={500} >About us</Link></li>
           <li><Link to ='section' smooth={true}offset={-260} duration={500} >Campus</Link></li>
           <li><Link to ='testimonials' smooth={true}offset={-260} duration={500} >Testimonial</Link></li>
           <li><button className='btn'>Contact us</button></li>
    </ul>
    <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
   </nav>
  )
}

export default Navbar