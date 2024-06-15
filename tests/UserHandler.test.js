import { beforeEach, describe } from "vitest";
import UserHandler from "../src/utils/UserHandler.js";

describe("user handler tests", () => {

    const user1 = { email: "newer@newer.newer", password: "password1!", userID: 1, favouriteLocations: ["2643123"] };
    const user2 = { email: "email@email.com", password: "password1!", userID: 2, favouriteLocations: ["2643123", "2650188"] };

    beforeEach(() => {

        const localStorageMock = () => {
            let storage = {};
            return {
                getItem: (key) => storage[key] || null,
                setItem: (key, value) => { storage[key] = value.toString(); },
                get length() {
                return Object.keys(storage).length;
                },
                // Mimic localStorage.key(i)
                key: (i) => Object.keys(storage)[i],
                };
        }
        global.localStorage = localStorageMock();
    })

    describe("get all items in local storage tests", () => {
        it("should return expected array of objects if there are users in the local storage", () => {
            // Arrange
            localStorage.setItem("user1", JSON.stringify(user1))
            localStorage.setItem("user2", JSON.stringify(user2))
            const expected = [user1, user2]
            console.log(localStorage)
            // Act
            const allLocalStorageItems = UserHandler.getAllItemsInLocalStorageAsArray();
            // Assert
            expect(allLocalStorageItems).toStrictEqual(expected)
        })

        it("should return empty array if there are no users in the local storage", () => {
            // Arrange
            const expected = [];
            // Act
            const allLocalStorageItems = UserHandler.getAllItemsInLocalStorageAsArray();
            // Arrange
            expect(allLocalStorageItems).toStrictEqual(expected)
        })
    })

    describe("make new user tests", () => {
        it("should create user object with passed in email", () => {
            // Arrange
            // Act
            const newUser = UserHandler.makeNewUserObject("email@email.com", "password1!", 1)
            // Assert
            expect(newUser.email).toStrictEqual("email@email.com")
        })

        it("should create user object with passed in password", () => {
            // Arrange
            // Act
            const newUser = UserHandler.makeNewUserObject("email@email.com", "password1!", 1)
            // Assert
            expect(newUser.password).toStrictEqual("password1!")
        })
    })
})