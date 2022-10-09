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

// import ApiCalendar from "react-google-calendar-api";

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
    </>
  );
};

// const apiCalendar = new ApiCalendar(config);

// const config = {
//   clientId: "<CLIENT_ID>",
//   apiKey: "<API_KEY>",
//   scope: "https://www.googleapis.com/auth/calendar",
//   discoveryDocs: [
//     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
//   ],
// };

export default Event;
