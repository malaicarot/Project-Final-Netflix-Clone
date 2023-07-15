import React, { useEffect, useState } from "react"
import "./Navbar.css"
const Navbar = () => {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar)

    },[])
  return (
    <div className={`nav ${ show && 'nav-black'}`}>
      <div className="nav-contents">
        <img
          className="nav-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        ></img>
        <img
          className="nav-ava"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        ></img>
      </div>
    </div>
  )
}

export default Navbar
