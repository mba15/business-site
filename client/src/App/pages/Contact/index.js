// Things to Add:
// Send form with Email
//  Google Maps API connection


import React from "react";
import Form from "../../shared/Form";
import MapContainer from "./MapContainer";
//import Map from "../../shared/Map"

function Contact (props){ 
    return(
        <div className="contact">
             <div className="form-header">
                <p className="form-title">We love to hear from you. </p>
                <p className="form-title">Please fill out the form and we will get back to you soon! </p>
            </div>
            <div className="location">
                <div className="contactUsInfo">
                    <h3 className="contactTitle">Rooted In The Heart </h3>
                    <p className="location"> Location: 423 NE 60th Ave <br />
                    Portland, Oregon 97213 </p>
                    <p> Phone: (971) 221-9744 </p>
                    <div className="maps"></div>
                </div>
                {/* will add contact email form to send a confirmation */}
                <Form />
                {/* Connect to google Maps API to get directions and view of the location */}
                {/*<MapContainer />*/}
            </div>
        </div>
    )
}

export default Contact;
