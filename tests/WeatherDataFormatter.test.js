import WeatherDataFormatter from "../src/utils/weatherDataFormatter.js";

import dummyWeatherData from "../data/dummyWeatherData.json" assert {type: "json"};
console.log(dummyWeatherData)

describe("WeatherDataFormatter Tests", () => {
    it("should return expected uppercase string from formatDescription", () => {
        // Arrange
        const testString = "this is a lowercase string";
        // Act
        const formattedString = WeatherDataFormatter.formatDescription(testString);
        // Assert
        expect(formattedString).toBe("This Is A Lowercase String")
    })

    it("should return expected date string from formatDate", () => {
        // Arrange
        const testDate = "2024-06-11";
        // Act
        const formattedDate = WeatherDataFormatter.formatDate(testDate)
        // Assert
        expect(formattedDate).toBe("11-06-2024")
    })

    it("should return expected path string from formatIconPath", () => {
        // Arrange
        const testIcon = "01n"
        // Act
        const formattedPath = WeatherDataFormatter.formatIconPath(testIcon)
        // Assert
        expect(formattedPath).toBe("/assets/weather-icons/01n.svg")
    })

    it("should return expected temp string in formatTemp", () => {
        // Arrange
        const testKelvinTemp = "280.75";
        // Act
        const formattedTemp = WeatherDataFormatter.formatTemp(testKelvinTemp);
        // Assert
        expect(formattedTemp).toBe("8°C")
    })

    it("should return expected array of indices in getDayIndices", () => {
        // Arrange
        const testData = dummyWeatherData.dublin;
        // Act
        const dayIndices = WeatherDataFormatter.getDayIndices(testData);
        // Assert
        expect(dayIndices).toStrictEqual([0,7,15,23,31])
    })

    it("should return expected forecast array in getForecastAsArray", () => {
        // Arrange
        const testData = dummyWeatherData.dublin;
        const expectedArrayFirstElement = { "date": "2024-02-09 18:00:00", "icon": "04d", "temp": 280.75, "weather_desc": "overcast clouds", }
        // Act
        const forecastArray = WeatherDataFormatter.getForecastAsArray(testData);
        // Assert
        expect(forecastArray[0]).toStrictEqual(expectedArrayFirstElement)
    })
})