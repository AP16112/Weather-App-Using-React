// Here we are creating this WeatherApp component.

// Here we will make use of Material UI for these components which we need here

// Here using this component, we will actually connect the SearchBox and InfoBox component
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";
import "./WeatherApp.css";


export default function WeatherApp() {
    // here we will create this state variable called as weatherInfo which will be an object storing info about weather of a particular city at a time.
    // Here we are taking these values for the initialization
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 29.15,
        humidity: 45,
        temp: 29.05,
        tempMax: 29.05,
        tempMin: 29.05,
        weather: "haze",
    });
    // We don’t need to reassign weatherInfo or setWeatherInfo to something else; we only update the state by calling setWeatherInfo.
    // Declaring with const ensures these references stay constant, preventing accidental reassignment like: weatherInfo = "new value"; // ❌ not allowed
    // Here const only locks the binding in your code. That means you cannot do: weatherInfo = { temp: 30 }; // ❌ Error because you’re trying to reassign the variable directly.
    // React itself controls the value behind the scenes. 
    // When you call setWeatherInfo(newObj), React doesn’t mutate the existing object. Instead, it: Creates a new object reference (newObj). Stores that new reference internally.
    // On the next render, React gives your component the updated value for weatherInfo.
    // So even though you declared weatherInfo with const, React is the one reassigning it internally between renders. Each render is like a fresh function call where React hands you the latest state value.


    // now we will create a function to update the weatherInfo state variable whenever user search for new city weather info
    // But we will pass this fn as props to the SearchBox & then envoke this fn there only when someone submit the form 
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };


    return (
        <div className="WeatherApp">
            <h2>Weather App by Arpit</h2>

            <SearchBox  updateInfo={updateInfo}/>

            {/* Now we will pass this weatherInfo object or state variable to this InfoBox, so that it can display that info */}
            <InfoBox  info={weatherInfo}/>
        </div>
    );
}


//--------------------------------------------------------------------------------------------
// Structure or Hierarchy of components :-
//             App
//              |
//              |
//              V
//          Weather App
//             /   \
//            /     \
//      SearchBox    InfoBox

// And here we will create the state variable inside this wweather app compoenent & then pass that as function to this searchBox, which will update that variable when it fetch the data from API calls
// And then weather app will pass that state variable  info as props  to this infoBox compoent to display that info in the UI.

