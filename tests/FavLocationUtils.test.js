import { afterEach, beforeEach } from "vitest";
import FavLocationUtils from "../src/utils/FavLocationUtils.js";
import UserHandler from "../src/utils/UserHandler.js";

describe("fav location utils tests", () => {
    
    beforeEach(() => {
        const user1 = { email: "newer@newer.newer", password: "password1!", userID: 1, favouriteLocations: ["2643123"] };
        const user2 = { email: "email@email.com", password: "password1!", userID: 2, favouriteLocations: ["2643123", "2650188"] };
        const user3 = { email: "new@new.new", password: "password1!", userID: 3, favouriteLocations: [] }

        vi.spyOn(UserHandler, "getAllItemsInLocalStorageAsArray").mockReturnValue([user1, user2, user3])

        const localStorageMock = () => {
            return {
                setItem: vi.fn()
            };
        }
        global.localStorage = localStorageMock();
    })

    afterEach(() => {
        vi.clearAllMocks()
    })


    describe("get users favourite locations tests", () => {
        it("should return empty array if user has no favourite locations", () => {
            // Arrange
            // Act
            // Assert
            expect(FavLocationUtils.getUsersFavouriteLocations(3)).toStrictEqual([])
        })

        it("should return expected array if user has favourite locations", () => {
            // Arrange
            // Act
            // Assert
            expect(FavLocationUtils.getUsersFavouriteLocations(1)).toStrictEqual(["2643123"])
        })

        it("should return false if user doesn't exist in local storage", () => {
            // Arrange
            // Act
            // Assert
            expect(FavLocationUtils.getUsersFavouriteLocations(4)).toBe(false)
        })
    })
    
    describe("check location in favourites tests", () => {
        it("should return true if location is in user's fav locations", () => {
            // Arrange
            // Act
            // Assert
            expect(FavLocationUtils.checkLocationInFavourites(2643123, 1)).toBe(true);
        })

        it("should return false if location is not in user's fav locations", () => {
            // Arrange
            // Act
            // Assert
            expect(FavLocationUtils.checkLocationInFavourites(2650188, 1)).toBe(false);
        })

        it("should return false if userID is empty string", () => {
            // Arrange
            // Act
            // Assert
             expect(FavLocationUtils.checkLocationInFavourites(2650188, "")).toBe(false);
        })

        it("should return false if userID is not in local storage", () => {
            // Arrange
            // Act
            // Assert
            expect(FavLocationUtils.checkLocationInFavourites(2650188, 5)).toBe(false);
        })
    })

    describe("add location to favourites tests", () => {
        it("should call localStorage.setItem with updated details if location not already in favourites and user exists", () => {
            // Arrange
            // Act
            FavLocationUtils.addLocationToFavourites(2650188, 1);
            // Assert
            expect(localStorage.setItem).toHaveBeenCalledWith(
                "user1", 
                JSON.stringify({ email: "newer@newer.newer", password: "password1!", userID: 1, favouriteLocations: ["2643123", "2650188"] })
            );
        })

        it("should not call localStorage.setItem if location is already in favourites", () => {
            // Arrange
            // Act
            FavLocationUtils.addLocationToFavourites(2643123, 1);
            // Assert
            expect(localStorage.setItem).not.toHaveBeenCalled();
        })

        it("should not call localStorage.setItem if user does not exist", () => {
            // Arrange
            // Act
            FavLocationUtils.addLocationToFavourites(2643123, 5);
            // Assert
            expect(localStorage.setItem).not.toHaveBeenCalled();
        })
    })

    describe("remove location from favourite tests", () => {
        it("should call localStorage.setItem with updated details if location already in favourites and user exists", () => {
            // Arrange
            // Act
            FavLocationUtils.removeLocationFromFavourites(2643123, 1);
            // Assert
            expect(localStorage.setItem).toHaveBeenCalledWith(
                "user1", 
                JSON.stringify({ email: "newer@newer.newer", password: "password1!", userID: 1, favouriteLocations: []})
            );
        })
    })
})
