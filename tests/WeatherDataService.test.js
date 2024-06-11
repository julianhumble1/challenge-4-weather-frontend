import "@testing-library/jest-dom/vitest";

import WeatherDataService from "../src/services/weatherDataService.js";

describe("WeatherDataService class tests", () => {
    describe("getLocationDataByName tests", () => {
        it("should return response status code 200 when valid term entered", async () => {
            // Arrange
            const validCityName = "london";
            // Act 
            const response = await WeatherDataService.getLocationDataByName(validCityName);
            const responseCode = response.status;
            // Assert
            expect(responseCode).toBe(200);
        })
    })
})