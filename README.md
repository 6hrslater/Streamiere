# Streamiere

An app that functions as an IMDB clone that takes in the TMDB API and renders information of the latest movies with descriptions, images and trailers. It uses Google authentication for users to sign in and add movies they liked to their own account page as well as a local outdoor movies night events feature that can send an SMS confirmation containing event details.

## Screenshots

### Trending Page

!["screenshot description"](https://github.com/6hrslater/Streamiere/blob/main/docs/trendingpage.png)

### Movies Page

!["screenshot description"](https://github.com/6hrslater/Streamiere/blob/main/docs/moviespage.png)

### Tv Shows Page

!["screenshot description"](https://github.com/6hrslater/Streamiere/blob/main/docs/tvspage.png)

### Search Page

!["screenshot description"](https://github.com/6hrslater/Streamiere/blob/main/docs/searchpage.png)

### Users Page

!["screenshot description"](https://github.com/6hrslater/Streamiere/blob/main/docs/userspage.png)

### Events Page

!["screenshot description"](https://github.com/6hrslater/Streamiere/blob/main/docs/events%20page.png)

## Setup

Install necessary dependencies with

### `npm install`

Create an env file with the TMDB, Google, Firebase API keys

Start app with

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Dependencies

- "@material-ui/core": "^4.11.2",
- "@material-ui/icons": "^4.11.2",
- "@material-ui/lab": "^4.0.0-alpha.57",
- "@syncfusion/ej2-react-calendars": "^20.3.48",
- "@testing-library/jest-dom": "^5.11.4",
- "@testing-library/react": "^11.1.0",
- "@testing-library/user-event": "^12.1.10",
- "axios": "^0.21.1",
- "dotenv": "^16.0.3",
- "express": "^4.18.1",
- "firebase": "^9.10.0",
- "gapi-script": "^1.2.0",
- "google-map-react": "^2.2.0",
- "react": "^16.13.0",
- "react-alice-carousel": "^2.2.2",
- "react-dom": "^16.13.0",
- "react-google-button": "^0.7.2",
- "react-google-calendar-api": "^2.1.0",
- "react-google-maps": "^9.4.5",
- "react-icons": "^4.4.0",
- "react-router-dom": "^5.3.4",
- "react-scripts": "4.0.1",
- "react-slick": "^0.29.0",
- "slick-carousel": "^1.8.1",
- "twilio": "^3.82.2",
- "web-vitals": "^0.2.4"
