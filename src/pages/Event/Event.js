import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import axios from "axios";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Event.css";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

const mapData = [
  { id: 1, lat: 49.28015560764768, lng: -123.1124679569322 },
  { id: 2, lat: 49.29466859584727, lng: -123.15013078066137 },
  { id: 3, lat: 49.28312864715313, lng: -123.12036421319347 },
  { id: 4, lat: 49.28038474652219, lng: -123.11567573382207 },
  { id: 5, lat: 49.22837097226975, lng: -123.00642533038497 },
  { id: 6, lat: 49.31023216008967, lng: -123.08144613230328 },
  { id: 7, lat: 49.32791541374335, lng: -123.13797207376976 },
  { id: 8, lat: 49.20454401827205, lng: -122.90378715410837 },
];

function  PosterSlider() {
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
        <img alt="wonder" src="/posters/wonder.png"></img>
      </div>
      <div className="poster">
        <img alt="freeguy" src="/posters/freeguy.png"></img>
      </div>
      <div className="poster">
        <img alt="avengers.jpeg" src="/posters/avengers.png"></img>
      </div>
      <div className="poster">
        <img alt="squad" src="/posters/squad.png"></img>
      </div>
      <div className="poster">
        <img alt="nutcracker" src="/posters/nutcracker.png"></img>
      </div>
    </Slider>
  );
}

const Event = () => {
  const [infoBox, setInfoBox] = useState(null);

  const handleOnClick = (data) => {
    setInfoBox(data);
    console.log("handleonclick", data, infoBox);
  };

  const MyMapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 49.285782896422546, lng: -123.12319139162997 }}
      >
        {mapData.map((location) => (
          <Marker
            key={location.id}
            position={{
              lat: location.lat,
              lng: location.lng,
            }}
            onClick={() => handleOnClick(location)}
            icon={{
              url: "/posters/popcorn.svg",
              scaledSize: new window.google.maps.Size(25, 25)
            }}
          />
        ))}
        {infoBox && (
          <InfoWindow
            position={{
              lat: infoBox.lat,
              lng: infoBox.lng,
            }}
          >
            <div
              style={{
                color: "blue",
                fontSize: "1.3vw",
              }}
            >
              Movie location
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    ))
  );

  const dateValue = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    10
  );
  const startDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    6
  );
  const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 25);

  const handleSMS = () => {
    axios.get("http://127.0.0.1:3001/sendSMS");
  };

  return (
    <>
      <PosterSlider />
      <button onClick={handleSMS}>Send SMS</button>

      <div style={{ width: "95vw", height: "80vh" }}>
        <div>
          <CalendarComponent
            value={dateValue}
            min={startDate}
            max={endDate}
            isMultiSelection={true}
            start="Month"
            depth="Week"
          ></CalendarComponent>
        </div>
        <MyMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `65%` }} />}
        />
      </div>
    </>
  );
};

export default Event;
