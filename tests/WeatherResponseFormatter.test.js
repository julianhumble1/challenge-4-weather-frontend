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
        const expectedArray = [
                {"date": "2024-02-09 18:00:00", "icon": "04d", "temp": 280.75, "weather_desc": "overcast clouds"},
                {"date": "2024-02-10 15:00:00", "icon": "01n", "temp": 277.93, "weather_desc": "clear sky"},
                {"date": "2024-02-11 15:00:00", "icon": "01n", "temp": 278.43, "weather_desc": "clear sky"},
                {"date": "2024-02-12 15:00:00", "icon": "04n", "temp": 278.83, "weather_desc": "broken clouds"},
                {"date": "2024-02-13 15:00:00", "icon": "04n", "temp": 280.36, "weather_desc": "overcast clouds"}
            ]
        // Act
        const cityForecast = WeatherResponseFormatter.getCityForecast(testResponse)
        // Assert
        expect(cityForecast).toStrictEqual(expectedArray)
    })

    it("should return expected object with valid response object in getResponseSummary", () => {
        // Arrange
        const testResponse = dummyWeatherData;
        const expected = {
            cityInfo: testResponse.data.city,
            cityForecast: [
                {"date": "2024-02-09 18:00:00", "icon": "04d", "temp": 280.75, "weather_desc": "overcast clouds"},
                {"date": "2024-02-10 15:00:00", "icon": "01n", "temp": 277.93, "weather_desc": "clear sky"},
                {"date": "2024-02-11 15:00:00", "icon": "01n", "temp": 278.43, "weather_desc": "clear sky"},
                {"date": "2024-02-12 15:00:00", "icon": "04n", "temp": 278.83, "weather_desc": "broken clouds"},
                {"date": "2024-02-13 15:00:00", "icon": "04n", "temp": 280.36, "weather_desc": "overcast clouds"}
            ]
        };
        // Act
        const responseSummary = WeatherResponseFormatter.getResponseSummary(testResponse)
        // Assert
        expect(responseSummary).toStrictEqual(expected)
    })
})