//--------------------------------------------------------------------------------------------------------------------------------------
// Weather Widget - Mini Project Using React & Material UI

// It will be a mini react app which shows the weather for some input location i.e city.
// Here we will make use of free weather APIs for getting the temp. info based on some location.
//--------------------------------------------------------------------------------------------------------------------------------------

import WeatherApp from "./WeatherApp.jsx";


function App() {

  return (
    <>
      <WeatherApp/>
    </>
  )
}

export default App



//-------------------------------------------------------------------------------------------------------------------
// Material UI :-
// It is a library of React UI components just like bootstrap for CSS.
// SO this material Ui is similar to bootstrap actually
// It give pre-built proper React Ui components to us.

// Material UI is an open-source React component library that implements Google's Material Design.
// It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box and features a suite of customization options that make it easy to implement your own custom design system on top of our components.

// We can use this as cdn also or we can install it also.
// We will actually use the installation method.

// So to install it, we can use this :- 
// npm install @mui/material @emotion/react @emotion/styled

// In Material UI, we have two types of styling engines :-
// - Emotion   (it is strongly preferred)
// - styled-components 

// Material UI uses Emotion as its default styling engine. 
// If you want to use styled-components instead, run one of the following commands:
// npm install @mui/material @mui/styled-engine-sc styled-components

// Material UI uses the Roboto font by default. 
// Add it to your project via Fontsource, or with the Google Fonts CDN.
// npm install @fontsource/roboto   ---> here we will use this way
// Then you can import it in your entry point (i.e in the files in which we want to use them) like this:
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// Or we can use Cdn link 


// To use the font Icon component or the prebuilt SVG Material Icons (such as those found in the icon demos), you must first install the Material Icons font. You can do so with npm, or with the Google Web Fonts CDN.
// npm install @mui/icons-material

