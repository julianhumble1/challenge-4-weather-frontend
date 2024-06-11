import dummyWeatherData from "../data/dummyWeatherData.json" assert {type: "json"};

import WeatherResponseFormatter from "../src/utils/weatherResponseFormatter.js";

describe("WeatherResponseFormatterTests", () => {
    it("should return expected object with valid response object in getCityInfo", () => {
        // Arrange
        const testResponse = dummyWeatherData;
        // Act
        const cityInfo = WeatherResponseFormatter.getCityInfo(testResponse)
        // Assert
        expect(cityInfo).toStrictEqual(testResponse.data.city)
    })

    it("should return expected object with valid response object in getCityForecast", () => {
        // Arrange
        const testResponse = dummyWeatherData;
        const expectedArrayFirstElement = { "date": "2024-02-09 18:00:00", "icon": "04d", "temp": 280.75, "weather_desc": "overcast clouds" }
        // Act
        const cityForecast = WeatherResponseFormatter.getCityForecast(testResponse)
        console.log(cityForecast)
        // Assert
        expect(cityForecast[0]).toStrictEqual(expectedArrayFirstElement)
    })
})