# Weather Application

This is a simple Weather application built with Node.js and Express.

## Features

- Get current weather by city\Country name
- Get weather forecast for the next 5 days

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app

2. Install the dependencies:
    
    ```bash
    npm install 

3. Creat a .env file in the root directory and add your API key (from https://openweathermap.org).

4. Start the server:

    ```bash
    npm start

The application will be running at http://localhost:3000 .

### Usage

to use the application, send HTTP requests to the server.

1. http://localhost:3000/weather/cityname .

2. To get the weather forecast for the next 5 days for a city, send a GET request to /weather/forecast?city=cityname.