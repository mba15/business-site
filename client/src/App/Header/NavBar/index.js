import React from "react"
import {Link} from "react-router-dom";

function NavBar(props){
    return(
        <div className="navbar topbar">
            <div className="links">
            <Link to="/" className="navlink">  Home   </Link>
            <Link to="/about" className="navlink">  About   </Link>
            <Link to="/contact" className="navlink">  Contact   </Link>
            </div>
         
        </div>
    )
}

export default NavBar;