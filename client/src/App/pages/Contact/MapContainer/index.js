import React, {Component} from "react";
import {Map, GoogleApiWrapper} from "google-maps-react";
//import {Map, GoogleApiWrapper} from "google-map-react"
const {REACT_APP_GOOGLE_APIKEY} = process.env

export class MapContainer extends Component {
    
    render() {
        const style = {
            width: '30%',
            height: '30%'
          }
          
        return(
            <div className="map">
                <Map className="maps"
                    google={this.props.google} 
                    initialCenter={{
                        lat: 45.5260577,
                        lng: -122.6046479
                    }}
                    sytle={style}
                    zoom={20}>
                </Map>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: REACT_APP_GOOGLE_APIKEY
})(MapContainer)
