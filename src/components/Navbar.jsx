import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { DashBord } from "../pages/DashBord";

export const Navbar=()=>{
    const [showMenu,setShowMenu]=useState(false);
    const handleButtonToggle=()=>{
        setShowMenu(!showMenu);
    };
    return (
    <header>
    <div className="container-nav">
        <div className="grid navbar-grid">
            <div className="logo">
              <NavLink to={"/"}> <h1>Quiz Platform</h1> </NavLink>
            </div>
            <nav className={showMenu?"menu-mobile": "menu-web"}>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    <li><NavLink to={"/course"}>Course</NavLink></li>
                    <li> <NavLink to={"/dashbord"}><button className="nav-btn btn">Student Portal</button></NavLink></li>
                </ul>
                
            </nav>
            <div className="ham-menu">
                <button onClick={handleButtonToggle} className="btn">
                    <GiHamburgerMenu />
                </button>
            </div>
        </div>
    </div>
    </header>
    )
}