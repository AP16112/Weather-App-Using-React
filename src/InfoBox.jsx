// Here we are creating this InfoBox component.

// Here we will make use of Material UI for these components which we need here
// Here we will make use of card component from material UI
// Cards contain content and actions about a single subject.
// Now to use card from material ui, we firstly need to import all these things :-
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// here to use these material ui icons, we firstly need to import them here
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

import "./InfoBox.css";

// Here we are getting this state variable object i.e info as props which storing the weather info about some city & we will now display that info
export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    
    return (
        <div className="InfoBox">
            <div className="cardContainer">
                {/* Here we are using this card component from material Ui actually */}
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia  
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
                        title="green iguana" 
                    />
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"> 
                            {info.city} 
                            &nbsp;
                            {info.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>)}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>"{info.weather}"</i> and feels like = {info.feelsLike}&deg;C</p>
                        </Typography>
                        {/* Here it will show error due to invalid HTML nesting is we don't use component={"span"}. In HTML, a <p> tag cannot contain another <p> tag inside it (or be a descendant of one). The Material‑UI <Typography> component with variant="body2" renders as a <p> element by default. So when you put <p> tags inside it, you end up with <p><p>...</p></p>, which violates HTML rules.
                        So that's why we are using component="span" for Typography because now Typography renders as a <span> instead of <p>, so your inner <p> tags are valid. */}
                    </CardContent>
                </Card>
            </div>
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

