import React, { useState} from 'react'
import profile from "../profile2.png"

const Navbar = () => {

    const [clicked, setClicked] = useState(false)
    
    const clickMenu = () => {
        setClicked(!clicked)
        console.log(clicked)
    }

    return (
        <>
        <nav className="NavbarItems">
            <img className="nav-photo" src={profile} alt="nav-photo" />

            
            <div className="menu-icon" onClick={clickMenu}>
                <i className={clicked ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}>

                </i>

            </div>

            <ul className={clicked? "nav-menu active" : "nav-menu"}>
                    <li className="nav-links">
                        <a className="" href="/">Home 
                        </a>
                    </li>
                    <li className="nav-links">
                        <a className="" href="/about">about me</a>
                    </li>
                    <li className="nav-links">
                        <a className="" href="/portfolio">portfolio</a>
                    </li>
                    <li className="nav-links">
                        <a className="" href="/contact">contact</a>
                    </li>
                </ul>

                

        </nav>
            
        </>
    )
}

export default Navbar
