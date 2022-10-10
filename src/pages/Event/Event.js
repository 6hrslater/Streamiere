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


const mapData = [
  {
    id: 1,
    name: "Avengers",
    lat: 49.28015560764768,
    lng: -123.1124679569322,
  },
  {
    id: 2,
    name: "Free Guy",
    lat: 49.29466859584727,
    lng: -123.15013078066137,
  },
  {
    id: 3,
    name: "Nutcracker",
    lat: 49.28312864715313,
    lng: -123.12036421319347,
  },
  {
    id: 4,
    name: "The Sucide Squad",
    lat: 49.28038474652219,
    lng: -123.11567573382207,
  },
  {
    id: 5,
    name: "Wonder",
    lat: 49.22837097226975,
    lng: -123.00642533038497,
  },
  {
    id: 6,
    name: "Avengers",
    lat: 49.31023216008967,
    lng: -123.08144613230328,
  },
  {
    id: 7,
    name: "Free Guy",
    lat: 49.32791541374335,
    lng: -123.13797207376976,
  },
  {
    id: 8,
    name: "Nutcracker",
    lat: 49.20454401827205,
    lng: -122.90378715410837,
  },
  {
    id: 9,
    name: "The Sucide Squad",
    lat: 49.32707485038767,
    lng: -123.15929995921132,
  },
  {
    id: 10,
    name: "Wonder",
    lat: 49.17573794045822,
    lng: -123.13224365921565,
  },
  {
    id: 11,
    name: "Avengers",
    lat: 49.18430538670743,
    lng: -122.84934959063756,
  },
  {
    id: 12,
    name: "Free Guy",
    lat: 49.06325279484487,
    lng: -122.32453010339643,
  },
  {
    id: 13,
    name: "Nutcracker",
    lat: 49.2535568257237,
    lng: -123.12367624043722,
  },
];

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
        defaultZoom={12}
        defaultCenter={{ lat: 49.285782896422546, lng: -123.12319139162997 }}
        defaultOptions={{
          mapTypeControl: false,
          streetViewControl: false,
        }}
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
              scaledSize: new window.google.maps.Size(25, 25),
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
                color: "black",
                width: "150px",
                minHeight: "50px",
                padding: 15,
                opacity: 0.5,
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "montserrat",
                fontSize: 15,
              }}
            >
              Vancouver Movie night
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
      <div className="poster" style={{ width: "95vw", height: "80vh" }}>
        <img alt="movienight" src="/posters/movienight.jpg"></img>
      </div>
      <div>
        <br /><br />
        Every year there are free outdoor movies at venues like Canada Place,
        Stanley Park, downtown Vancouver and across the Lower Mainland. NOTE: On
        Wednesday, August 17th, the movie Pitch Perfect. shows at Sunset Cinema
        in the plaza outside the Queen Elizabeth Theatre in downtown Vancouver.
        To learn about the above shows as well as others on other dates at
        venues throughout the Lower Mainland, continue reading!
        <br /><br /><br />
      </div>
      <PosterSlider />
      <div>
        <br /><br /><br />
        Free Outdoor Movies in the Lower Mainland At each outdoor movie location
        spectators are encouraged to bring their own blankets and lawn chairs,
        plus snacks and picnics for those that want them. The exception are any
        drive-in movies, where the organizers might want people to stay in their
        vehicles. Below are some locations that are showing or are likely to
        show movies in 2022. Details are as on the calendar and the map below.
        <br /><br /><br />
      </div>

      <div style={{ width: "95vw", height: "80vh" }}>
        
        <button onClick={handleSMS}>Send SMS</button>
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
