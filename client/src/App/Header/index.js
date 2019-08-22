import React from "react";
import NavBar from "./NavBar";
import './index.css';


function Header() {
    return (
        <div className="logo">
        
            <NavBar />
            <h1 className="h1">Rooted In The Heart</h1>
           
            <div className="header">
                <div className='theLogo'>
                    <p className="quote">"Two roads diverged in a wood, and I—</p>
                    <p className="quote"> I took the one less traveled by, </p>
                    <p className="quote"> And that has made all the difference." Robert Frost</p>
                 
                </div>
            </div>
        </div>
    )
}

export default Header;