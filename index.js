require('dotenv').config(); //(in commonJS modules)
//import dotenv from 'dotenv'; //in ES6 modules
const express = require('express'); //(in commonJS modules)
//import express from 'express'; //in ES6 modules
const axios = require ('axios'); //(in commonJS modules)
//import axios from 'axios'; //this module is for making promise-based http requests to the OpenWeatherMap API. 

// this line not needed when using commonJS modules
//dotenv.config(); // this line is used to read the .env file and set the environment variables.

const app = express();
const port = 3000;

app.get('/weather/:location', async (req, res) => {
  try {
    const { location } = req.params; // Extract the location parameter from the request - req.params is an object containing the route parameters { location: '...'}.
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`);
    console.dir(response.data, { depth: null, colors: true}); // Log the weather data to the console.
    res.json(response.data); // Send the response data as JSON to the client.
  } catch (error) {
    console.error(error); // Log the error to the console.
    res.status(500).json({ error: 'An error occurred while retrieving weather data.' }); // A 500 status code is the generic "Internal Server Error" status.
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});