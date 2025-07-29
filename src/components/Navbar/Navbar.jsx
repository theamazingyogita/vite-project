import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {

  const [sticky, setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=> {
       setSticky(window.scrollY> 50);
    })
  },[])
  return (
   <nav className= {`container ${sticky? `dark-nav`:''}`}>
    <img src ={logo} alt ="logo" className='logo'/>
    <ul>
        <li>Home</li>
         <li>Program</li>
          <li>About us</li>
           <li>Campus</li>
           <li>Testimonial</li>
           <li><button className='btn'>Contact us</button></li>
    </ul>
   </nav>
  )
}

export default Navbar