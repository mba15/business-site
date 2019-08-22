import React from "react"
import {Link} from "react-router-dom";

function FootNav(props){
    return(
        <div className="footNav">
            <Link to="/" className="footnavlink"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
            
            <Link to="/about" className="footnavlink"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
            <Link to="/contact" className="footnavlink"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
        </div>
    )
}

export default  FootNav;