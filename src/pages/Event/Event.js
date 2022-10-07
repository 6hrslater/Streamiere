import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 49.285782896422546, lng: -123.12319139162997 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 49.28232859565747, lng: -123.12433441038579 }} />
      )}
    </GoogleMap>
  ))
);
 
 

const Event = () => {
  return (
    <>
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </>
  );
};

export default Event;
