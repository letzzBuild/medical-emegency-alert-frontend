import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map(props) { 
 var defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDWDkA6pznAi2drXguPOyPXw6Pf7KIccR0' }}
          defaultCenter={props.data==null ? defaultProps.center : {lat:props.data[0].lat,lng:props.data[0].lang}}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={props.data==null ? 59.955413 : props.data[0].lat}
            lng={props.data==null ? 30.337844 : props.data[0].lang}
            text={props.data==null ? "No Accident Detected" : "Accident Detected here"}
          />
        </GoogleMapReact>
      </div>
    )
}

export default Map
