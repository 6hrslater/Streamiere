import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import axios from "axios";

import ApiCalendar from "react-google-calendar-api";


const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 49.285782896422546, lng: -123.12319139162997 }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: 49.28232859565747, lng: -123.12433441038579 }}
        />
      )}
    </GoogleMap>
  ))
);

const Event = () => {

  const handleSMS = () => {
    axios.get("http://127.0.0.1:3001/sendSMS");
  };

  return (
    <>
      <button onClick={handleSMS}>Send SMS</button>

      <div style={{ width: "95vw", height: "80vh" }}>
        <MyMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </>
  );
};

const apiCalendar = new ApiCalendar(config);

const config = {
  clientId: "<CLIENT_ID>",
  apiKey: "<API_KEY>",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};



export default Event;
