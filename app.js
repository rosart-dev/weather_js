//Init storage object
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object 
const weather = new Weather(weatherLocation.city, weatherLocation.state, weatherLocation.country); 

//Init ui object 
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', this.getWeather());

//This function gets weather data from api
function getWeather() {
    weather.getWeather().then( results => {
        ui.paint(results);
    }).catch(err => console.error(err));
};

//Change location event 
document.getElementById('change-btn').addEventListener('click', e => {
    e.preventDefault();

    //Get form input values 
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    //Change location in UI
    weather.changeLocation(city, state, country);

    //Change location in local storage
    storage.setLocationData(city, state, country);

    //Call get weather again and display 
    getWeather();

    //Close modal 
    $('#locModal').modal('hide');
});
