class Weather {
    constructor(city, state, country) {
        this.apiKey = ''; //Purposely removed api key 
        this.city = city;
        this.state = state;
        this.country = country;
    }

    //Fetch weather from API 
    async getWeather () {
        const response = await 
        fetch(`http://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&country=${this.country}&key=${this.apiKey}`);

        const responseData = await response.json();

        return responseData.data[0];
    }

    //Change weather location 
    changeLocation = (city, state, country) => {
        this.city = city;
        this.state = state;
        this.country = country;
    }
}