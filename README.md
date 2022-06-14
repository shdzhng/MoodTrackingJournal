<div align="center" id="top">
    
# Mooday ![GitHub last commit](https://img.shields.io/github/last-commit/shdzhng/Mooday-Journal-Mood-Tracker?color=blue&logo=github)
</div>

## About The Project

**Mooday** is a mood tracking journal SPA with quantitative and qualitative analysis features to support users in their journey towards understanding their mental health strengths and needs.

* Employed **React**, **Router**, **Redux** with **MUI** and **styled-components** to construct three responsive views tied to a single Redux pipeline, allowing for standard storage, download, post, edit, sort, delete, and query of user journal entries.

* Incorporated **Google Map Autocomplete** to allow users to geotag the location of their story and lays the foundation for Mooday to provide a color-coded heatmap view of hot spots for various emotions using **Map Markers**. Users are also able to create and edit entries on the map directly.

* Custom built logic to extract metadata from queried redux journal entries that feed into three **chart.JS** components to provide users an interactive visual of journal trends with a bonus of flexibility for users to change year view.

* Integrated **quickchart.io** word cloud API to supplement descriptive qualitative analysis to create a mixed-method service that integrates the benefit of both scientific approaches.

## Getting Started

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
1. Clone the repository 
 ```
 $ git clone https://github.com/shdzhng/Mooday-Journal-Mood-Tracker
 ```
2. Install the node package
 ```
 $ npm install
 ```
3. If you wish to use your own Google Maps API key you can do so by creating .env.local in the root folder. Ensure that your credential have the following APIs enabled: Directions API, Geocoding API, Maps Javascript API, Places API
```
REACT_APP_GOOGLE_MAPS_API_KEY = ["YOUR_API_KEY"]
```

4. Run npm start
 ```
 $ npm start
 ```
 <p align="right">(<a href="#top">back to top</a>)</p>

 ![](https://media.giphy.com/media/7GbcBZo834ZjTUzarw/giphy.gif)
