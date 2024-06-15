import FavLocationUtils from "../src/utils/FavLocationUtils.js";
import UserHandler from "../src/utils/UserHandler.js";

describe("fav location utils tests", () => {
    const user1 = { email: "newer@newer.newer", password: "password1!", userID: 1, favouriteLocations: ["2643123"] };
    const user2 = { email: "email@email.com", password: "password1!", userID: 2, favouriteLocations: ["2643123", "2650188"] };
    const user3 = {email:"new@new.new", password: "password1!", userID: 3, favouriteLocations: []}

    vi.spyOn(UserHandler, "getAllItemsInLocalStorageAsArray").mockReturnValue([user1, user2, user3])

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
    })
})
