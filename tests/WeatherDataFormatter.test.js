import WeatherDataFormatter from "../src/utils/weatherDataFormatter.js";

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
})