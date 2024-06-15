import FavLocationUtils from "../src/utils/FavLocationUtils.js";
import UserHandler from "../src/utils/UserHandler.js";

describe("fav location utils tests", () => {
    const user1 = { email: "newer@newer.newer", password: "password1!", userID: 1, favouriteLocations: ["2643123"] };
    const user2 = { email: "email@email.com", password: "password1!", userID: 2, favouriteLocations: ["2643123", "2650188"] };
    const user3 = {email:"new@new.new", password: "password1!", userID: 3, favouriteLocations: []}

    const mockGetAllItemsInLocalStorage = vi.fn(UserHandler, "getUsersFavouriteLocations").mockReturnValue([user1, user2, user3])

    describe("get users favourite locations tests", () => {
        it("should return false if user has no favourite locations", () => {
            // Arrange
            // Act
            // Assert
            expect(FavLocationUtils.getUsersFavouriteLocations(3)).toBe(false)
        })
    })

})
