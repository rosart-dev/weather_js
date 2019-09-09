class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    /**
     * This function will convert celsius to fahrenheit
     * @param degreeC - the temperature in celsius
     */
    convertCelToF = degreeC => {
        return Math.round((degreeC * (9 / 5)) + 32);
    }

    /**
     * This function takes the weather data from the api and assigns the appropriate value(s) 
     * to each UI element
     * @param weather - weather data from the API 
     */
    paint = weather => {
        this.location.textContent = `${weather.city_name}, ${weather.state_code}`;
        this.desc.textContent = weather.weather.description;
        this.string.innerHTML = `
            ${weather.temp} &#8451; ${this.convertCelToF(weather.temp)} &#8457;
        `;
        this.icon.setAttribute('src', `/img/${weather.weather.icon}.png`);
        this.humidity.textContent = `Relative Humdity: ${weather.rh} %`;
        this.feelsLike.innerHTML = `
            Feels Like: ${weather.app_temp} &#8451; ${this.convertCelToF(weather.app_temp)} &#8457;
        `;
        this.dewpoint.innerHTML = `DewPoint: ${weather.dewpt} &#8451; ${this.convertCelToF(weather.dewpt)} &#8457;`;
        this.wind.textContent = `Wind: From the ${weather.wind_cdir} at ${weather.wind_spd} m/s`;
    }
}