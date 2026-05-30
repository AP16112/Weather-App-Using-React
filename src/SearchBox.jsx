// Here we are creating this SearchBox component.

// Here we will make use of Material UI for these components which we need here
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
    // Here this is the state variable that we will use to store the city name
    let [city, setCity] = useState("");    // At first, we are assuming city to be empty string only

    // Here this API calls will not give weather data for all the locations, so for those locations for which it gives error & not the weather data, we will make use of this error state variable
    let [error, setError] = useState("");

    // Here we are using OpenWeather API to get the weather details based on city
    // Here this is the complete URL that we needed as the API endpoint here
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    // But currently we will only use this much URL here & later on add or attach the remaining part i.e query string and API key to this URL
    // Here this is the API endpoint or URL to which we will send our API request.
    // Keep the real value in a local .env file as VITE_OPENWEATHER_API_URL.
    const API_URL = import.meta.env.VITE_OPENWEATHER_API_URL;
    // Here this is the API key to use this OpenWeather website for API calls.
    // Keep the real value in a local .env file as VITE_OPENWEATHER_API_KEY.
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;


    // Now method of sending API calls in React is same as that of JavaScript i.e by using fetch()
    // Now we will create this fn to get the weather info using the API calls, so this fn must be Asynchronous function as API calls are used.
    let getWeatherInfo = async () => {
        if (!API_KEY) {
            throw new Error("Missing VITE_OPENWEATHER_API_KEY");
        }

        if (!API_URL) {
            throw new Error("Missing VITE_OPENWEATHER_API_URL");
        }

            // Now along with this API_URL, we also need to attach the query string & API KEY with this 
            // Now here this `${API_URL}?q=${city}&appid=${API_KEY}`  is the complete URL that we needed for API calls
            // This URL will not return the temp in metric i.e in degree celcius and all, so if we want that we also need to add this in URL as per documentation of this Openweather API. 
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

            // Now we will convert this response into JSON response
            let jsonResponse = await response.json();

            if (!response.ok) {
                throw new Error("No such place exists in our API!");
            }

            // .json() returns a Promise because parsing is asynchronous.
            // When you call fetch(url), it returns a Response object.
            // This object represents the HTTP response from the server (headers, status code, body, etc.).
            // The Response object has methods to read the body in different formats:
            // .json() → parses the body as JSON.
            // .text() → reads the body as plain text.
            // .blob() → reads the body as binary data.
            // So this .json() itself returns a Promise, because parsing the body is asynchronous.
            // console.log(jsonResponse);

            // Now we will create a new object from this jsonResponse object, which will only contains certain details out of all the details available in this jsonResponse object
            let result = {
                city: city,
                temp: jsonResponse.main.temp,   // as this temp is present inside this main object which present inside this jsonResponse object
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,    // as this description is one of the key of the object present at 0th index in this weather array of size 1 & which present inside this jsonResponse object
            };

            console.log(result);

            return result;   // it will return this result object now
    };


    // Here we are creating this event handler for these input fileds like textField
    let handleChange = (event) => {
        setCity(event.target.value);
    };

   
    // As we are envoking this async getWeatherInfo() fn inside this fn, so due to which this fn also became async fn now.
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            // this is prevent the default behaviour of the form on form submit. So here we are controlling the internal state of this form during onSubmit

            console.log(city);

            // Now if we want to set or make empty the input fields on form submit,we will do that using state variable only to make this form as controlled component.
            setCity("");

            setError("");

            // Now As soon as this form gets submit, we want to Apply API Call, for which we will envoke this getWeatherInfo function.
            // As this is an async fn, so we need to make use of await here
            let newInfo = await getWeatherInfo();
            // Now this newInfo is an object containing the weather info about the input city 

            // Now we are envoking this fn which will update the weatherInfo state varaible present inside the parent compoent of this component 
            updateInfo(newInfo);  
        } catch(error) {   // it will catch the thrown error
            setError(error.message);
        }
    };
    // Now to access the values input in these input fields, we do not need to wait for the form submission, as we can easily access them anytime using their state variables

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit} >
                {/* SO now this form will not get submit if left this City Name text field as empty because we make it as required */}
                <TextField id="city" label="City Name" variant="outlined"  required  value={city} onChange={handleChange} />
                <br></br>  <br></br>
                {/* Now we need to make the type of this button to be submit, so that when it's get clicked, this form must gets submitted. */}
                <Button variant="contained" type='submit' > Search</Button>

                {error && <p style={{color: "red"}}>{error}</p>}
            </form>
        </div>
    );
}


//--------------------------------------------------------------------------------------------
// Here we will use Material UI for input fields and button

// Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

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
