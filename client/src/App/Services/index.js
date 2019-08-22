import React from "react"
import {Link} from "react-router-dom";

function Services(props){
    return(
        <div className="servicesnav">
            <div className="servicelinks">
            <Link to="/" className="navlink">  Individual   </Link>
            <Link to="/" className="navlink">  Mindfullness   </Link>
            <Link to="/" className="navlink">  Services   </Link>
            
            </div>
         
        </div>
    )
}

export default Services;