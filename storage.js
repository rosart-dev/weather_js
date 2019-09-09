/**
 * This Class is responsible for getting and changing the location data in the local storage of the browser 
 */
class Storage {
    constructor() {
        this.city;
        this.state;
        this.country;
        this.defaultCity = "Miami";
        this.defaultState = "FL";
        this.defaultCountry = "US";
    }

    //Get the location data from local storage or set to default attributes 
    getLocationData = () => {       
        this.city = localStorage.getItem('city') ? localStorage.getItem('city') : this.defaultCity;

        this.state = localStorage.getItem('state') ? localStorage.getItem('state') : this.defaultState;

        this.country = localStorage.getItem('country') ? localStorage.getItem('country') : this.defaultCountry;

        return {
            city: this.city,
            state: this.state,
            country: this.country
        }
    }

    /**
     * Setter function to change the location in local storage
     * @param city - the city 
     * @param state - the state that the city is located in
     * @param country - the country that the state and city is located in  
     */ 
    setLocationData = (city, state, country) => {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
        localStorage.setItem('country', country);
    }
}