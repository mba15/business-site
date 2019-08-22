import React, {Component} from "react";
import {GoogleApiWrapper} from "google-maps-react";


export class MapsContainer extends React.Component {

}

export default GoogleApiWrapper ({
    apiKey: ("AIzaSyDCwfIHg3Q9tyBLGR_pBqOvwdLCSdXgD9Y")
}) (MapsContainer)

