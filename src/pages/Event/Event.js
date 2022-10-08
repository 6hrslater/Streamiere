import "./Event.css"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import {CalendarComponent} from '@syncfusion/ej2-react-calendars'

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
  const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
  const startDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 6);
  const endDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 25);
  return (
    <>
      <div>
      <CalendarComponent 
      value={dateValue} 
      min={startDate} 
      max={endDate}
      isMultiSelection={true}
      start="Month"
      depth="Week"> 
      </CalendarComponent>
      </div>
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

// const config = {
//   "clientId": "<500311163543-3lm1qhldla61hkj8sscmmmbgb8ikd150.apps.googleusercontent.com>",
//   "apiKey": "<AIzaSyCKKNu4sdqnTUUUFy-_ZSqE4ScydrnnfOM>",
//   "scope": "https://www.googleapis.com/auth/calendar",
//   "discoveryDocs": [
//     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
//   ]
// }

// const apiCalendar = new ApiCalendar(config)




export default Event;
