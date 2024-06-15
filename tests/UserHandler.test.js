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

        it("should create user object with passed in user ID", () => {
            // Arrange
            // Act
            const newUser = UserHandler.makeNewUserObject("email@email.com", "password1!", 1)
            // Assert
            expect(newUser.userID).toStrictEqual(1)
        })

        it("should create user object with empty favourite locations list if not specified", () => {
            // Arrange
            // Act
            const newUser = UserHandler.makeNewUserObject("email@email.com", "password1!", 1)
            // Assert
            expect(newUser.favouriteLocations).toStrictEqual([])
        })

        it("should create user object with favourite locations list if specified", () => {
            // Arrange
            // Act
            const newUser = UserHandler.makeNewUserObject("email@email.com", "password1!", 1, ["2643123", "2650188"])
            // Assert
            expect(newUser.favouriteLocations).toStrictEqual(["2643123", "2650188"])
        })
    })

    describe("add user to local storage tests", () => {
        it("should add user to the local storage key 'user'+ one higher than number of existing users", () => {
            // Arrange
            const existingUsers = UserHandler.getAllItemsInLocalStorageAsArray().length;
            const expectedID = existingUsers + 1;
            // Act
            UserHandler.addUserToLocalStorage("email@email.com", "password1!")
            // Assert
            expect(localStorage[`user${expectedID}`]).not.toBeNull();
        })

        it("should add user to local storage with passed in email", () => {
            // Arrange
            const existingUsers = UserHandler.getAllItemsInLocalStorageAsArray().length;
            const expectedID = existingUsers + 1;
            // Act
            UserHandler.addUserToLocalStorage("email@email.com", "password1!")
            const newUserInLocalStorage = localStorage.getItem(`user${expectedID}`);
            // Assert
            expect(JSON.parse(newUserInLocalStorage).email).toStrictEqual("email@email.com")
        })

        it("should add user to local storage with passed in password", () => {
            // Arrange
            const existingUsers = UserHandler.getAllItemsInLocalStorageAsArray().length;
            const expectedID = existingUsers + 1;
            // Act
            UserHandler.addUserToLocalStorage("email@email.com", "password1!")
            const newUserInLocalStorage = localStorage.getItem(`user${expectedID}`);
            // Assert
            expect(JSON.parse(newUserInLocalStorage).password).toStrictEqual("password1!")
        })

        it("should add user to local storage with expected ID", () => {
            // Arrange
            const existingUsers = UserHandler.getAllItemsInLocalStorageAsArray().length;
            const expectedID = existingUsers + 1;
            // Act
            UserHandler.addUserToLocalStorage("email@email.com", "password1!")
            const newUserInLocalStorage = localStorage.getItem(`user${expectedID}`);
            // Assert
            expect(JSON.parse(newUserInLocalStorage).userID).toStrictEqual(expectedID)
        })
    }) 

    describe("check email and password match storage tests", () => {
        it("should return false if email is not in local storage", () => {
            // Arrange
            localStorage.setItem("user1", JSON.stringify(user1))
            const badEmail = "fail@fail.fail"
            // Act
            // Assert
            expect(UserHandler.checkEmailAndPasswordMatchStorage(badEmail, "password1!")).toBe(false);
        })

        it("should return false if password does not match email in local storage", () => {
            // Arrange
            localStorage.setItem("user1", JSON.stringify(user1))
            const email = "email@email.com"
            const wrongPassword = "password"
            // Act
            // Assert
            expect(UserHandler.checkEmailAndPasswordMatchStorage(email, wrongPassword)).toBe(false);
        })
    })
})