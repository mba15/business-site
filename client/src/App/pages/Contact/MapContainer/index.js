import React, {Component} from "react";
import {Map, GoogleApiWrapper} from "google-maps-react";
const apiKey = "AIzaSyCflP87WcYHq_NpycaP74Bg7L7s1DhD3gA"

export class MapContainer extends Component {
    
    render() {
        const style = {
            width: '100%',
            height: '100%'
          }
        return(
            <div className="map">
                <Map className="maps"
                    google={this.props.google} 
                    initialCenter={{
                        lat: 45.5260577,
                        lng: -122.6046479
                    }}
                    style={style}
                    zoom={20}>
                </Map>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: apiKey
})(MapContainer)
