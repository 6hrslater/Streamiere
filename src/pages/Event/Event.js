import "./Event.css"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import axios from "axios";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Event.css";

<<<<<<< HEAD
import {CalendarComponent} from '@syncfusion/ej2-react-calendars'
=======
// import ApiCalendar from "react-google-calendar-api";
>>>>>>> 0651b143e1ac09bc75d6cf23704f102d20775f36

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

function PosterSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Slider {...settings}>
      <div className="poster">
        <img alt="spiderman" src="/posters/spiderman.jpeg"></img>
      </div>
      <div className="poster">
        <img alt="lionking" src="/posters/lionking.jpeg"></img>
      </div>
      <div className="poster">
        <img alt="jurassicpark" src="/posters/jurassicpark.jpeg"></img>    
      </div>
      <div className="poster">
        <img alt="jumanji" src="/posters/jumanji.jpeg"></img>
      </div>
  </Slider>
  );
}

const Event = () => {
<<<<<<< HEAD
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
=======
  const handleSMS = () => {
    axios.get("http://127.0.0.1:3001/sendSMS");
  };

  return (
    <>
      <PosterSlider />
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
>>>>>>> 0651b143e1ac09bc75d6cf23704f102d20775f36
    </>
  );
};

<<<<<<< HEAD
// const config = {
//   "clientId": "<500311163543-3lm1qhldla61hkj8sscmmmbgb8ikd150.apps.googleusercontent.com>",
//   "apiKey": "<AIzaSyCKKNu4sdqnTUUUFy-_ZSqE4ScydrnnfOM>",
//   "scope": "https://www.googleapis.com/auth/calendar",
//   "discoveryDocs": [
//     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
//   ]
// }

// const apiCalendar = new ApiCalendar(config)


=======
// const apiCalendar = new ApiCalendar(config);
>>>>>>> 0651b143e1ac09bc75d6cf23704f102d20775f36

// const config = {
//   clientId: "<CLIENT_ID>",
//   apiKey: "<API_KEY>",
//   scope: "https://www.googleapis.com/auth/calendar",
//   discoveryDocs: [
//     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
//   ],
// };

export default Event;
