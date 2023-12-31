import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () =>{
        if (window.scrollY > 100){
        handleShow(true)
      }else{
          handleShow(false)
    }
  };
    useEffect(() =>{
      window.addEventListener('scroll', transitionNavBar);
      return () => window.removeEventListener('scroll', transitionNavBar)
    }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
            <img 
            className='nav__logo'
            src="https://davidblaine.com/wp-content/uploads/2017/04/netflix-logo.png" 
            alt=""/>
            <img
            className='nav__avatar' 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" 
            alt=""/>
        </div>
        
        
    </div>
  )
}

export default Nav
