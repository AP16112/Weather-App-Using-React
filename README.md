# Weather App: React Mini Project

![Platform](https://img.shields.io/badge/Platform-Web-blue)
![Frontend](https://img.shields.io/badge/Frontend-React-61dafb)
![Build Tool](https://img.shields.io/badge/Build%20Tool-Vite-purple)
![UI](https://img.shields.io/badge/UI-Material%20UI-007fff)
![API](https://img.shields.io/badge/API-OpenWeather-orange)

Weather App is a React mini project that lets users search for a city and view live weather information.
It is designed to practice React components, state, props, API calls, environment variables, and conditional rendering.

## Overview

- Users enter a city name.
- The app fetches data from OpenWeather.
- The result is displayed in a Material UI card.
- Images and icons change based on weather conditions.
- Error messages appear for invalid cities or missing config.

## Demo

### Demo 1: Initial Weather View

![Demo 1](src/assets/demo%201.png)

### Demo 2: Search Result View

![Demo 2](src/assets/demo%202.png)

## Why This Project

This project helps beginners understand how React connects user input with external API data.
It connects forms, state updates, reusable components, and async JavaScript in one small app.
It also shows how to avoid hard-coding API keys by using Vite environment variables.

## Problem Statement

Users often need quick weather information for a city.
This app gives useful weather details like temperature, humidity, minimum temperature, maximum temperature, and description.
It also gives clear feedback when something is wrong.

## What The Project Does

- Accepts a city name
- Calls OpenWeather
- Reads API settings from env variables
- Converts the API response
- Updates React state
- Displays weather details
- Shows errors in the UI

## Key Features

- React component-based structure
- Vite development setup
- Material UI controls and cards
- Controlled input field
- Parent-child communication with props
- Weather card display
- Dynamic weather icons
- Dynamic weather images
- Light background color
- Runtime error messages

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Material UI
- Material UI Icons
- OpenWeather API
- ESLint

## Project Structure

- `src/main.jsx` - app entrypoint
- `src/App.jsx` - root component
- `src/WeatherApp.jsx` - main weather state and layout
- `src/WeatherApp.css` - background and app styling
- `src/SearchBox.jsx` - city input and API logic
- `src/SearchBox.css` - search form styling
- `src/InfoBox.jsx` - weather result card
- `src/InfoBox.css` - result card layout
- `src/assets/demo 1.png` - first demo screenshot
- `src/assets/demo 2.png` - second demo screenshot
- `.env.example` - required env template
- `package.json` - scripts and dependencies
- `vite.config.js` - Vite config

## Component Flow

```text
App
 |
 WeatherApp
 |-- SearchBox
 |-- InfoBox
```

## How It Works

1. User types city.
2. `SearchBox.jsx` handles submit.
3. Environment variables are checked.
4. `fetch` calls OpenWeather.
5. API response is parsed.
6. A weather object is created.
7. Parent state is updated.
8. `InfoBox.jsx` renders the card.

## Environment Variables

Create a `.env` file in root.

```env
VITE_OPENWEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

Real `.env` files are ignored by Git.
Restart the Vite server after changing env values.

## Setup Instructions

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

## Configuration Notes

- Env variables used in browser code must start with `VITE_`.
- Real API keys should stay in `.env`.
- Missing key shows `Missing VITE_OPENWEATHER_API_KEY`.
- Missing URL shows `Missing VITE_OPENWEATHER_API_URL`.
- Invalid city shows `No such place exists in our API!`.

## Use Cases

- React learning project
- API integration practice
- Material UI practice
- Portfolio mini project
- Environment variable practice

## Strengths

- Simple structure
- Clear component roles
- Safe env config
- Friendly error messages
- Easy to extend

## Limitations

- One city shown at a time
- Depends on OpenWeather availability
- No loading state yet
- No forecast view yet
- Demo-level project

## Future Improvements

- Add loading indicator
- Add search history
- Add geolocation weather
- Add forecast cards
- Add responsive refinements
- Add tests
- Add deployment notes
