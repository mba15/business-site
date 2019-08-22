import React, {PropTypes} from "react";

import GoogleMap from "react-google-map";
import GoogleMapLoader from "react-google-maps-loader";

const apiKey = "AIzaSyDCwfIHg3Q9tyBLGR_pBqOvwdLCSdXgD9Y";

const Map = ({googleMaps}) => {
    <div className="maps">
                <GoogleMap
                    className="map"
                    googleMaps={googleMaps}
                    coordinates={[{
                        title: "Rooted In the Heart",
                        position: {
                            lat: 45.5260577,
                            lng: -122.6046479,
                        }
                    }]}
                    zoom={13}
                    center={{lat: 45.5260577,
                            lng: -122.6046479 }}
                    onLoaded={(googleMaps, map ) => {
                        map.setMapTypeId(googleMaps.setMapTypeId.SATELLITE)
                    }}
                />
                    
            </div>
    
}
Map.propTypes = {
    googleMaps: PropTypes.object.isRequired,
}

export default GoogleMapLoader(Map, {
    libraries: ["places"],
    key: apiKey
})