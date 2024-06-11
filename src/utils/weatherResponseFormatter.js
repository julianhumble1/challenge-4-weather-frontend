import WeatherDataFormatter from "./weatherDataFormatter.js";

class WeatherResponseFormatter {

    static getCityInfo = (response) => {
        return response.data.city;
    }

    static getCityForecast = (response) => {
        const responseData = response.data;
        const cityForecast = WeatherDataFormatter.getForecastAsArray(responseData);
        return cityForecast;
    }

    static getResponseSummary = (response) => {
        const responseSummary = {
            cityInfo: this.getCityInfo(response),
            cityForecast: this.getCityForecast(response)
        }
        return responseSummary;
    }
}

export default WeatherResponseFormatter