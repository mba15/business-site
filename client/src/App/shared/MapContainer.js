import React, {Component} from "react";
import {Map, Marker, GoogleApiWrapper} from "google-maps-react";
const apiKey = "AIzaSyCflP87WcYHq_NpycaP74Bg7L7s1DhD3gA"

export class MapContainer extends Component {
    
    render(){
        return(
                <Map
                    google={this.props.google} 
                    initialCenter={{
                        lat: 45.5260577,
                        long: -122.6046479
                    }}
                    zoom={5}>
                    <Marker />
                </Map>
        )
    }
}
export default GoogleApiWrapper ({
    apiKey: apiKey
}) (MapContainer)
