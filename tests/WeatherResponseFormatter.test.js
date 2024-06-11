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

    
})