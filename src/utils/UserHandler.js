class UserHandler {

    static getAllItemsInLocalStorage = () => {
        const allLocalStorageItems = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            allLocalStorageItems[key] = localStorage.getItem(key);
        }
        console.log(allLocalStorageItems)
        return allLocalStorageItems
    }
    static addUserToLocalStorage = (username, password) => {
        const allLocalStorageItems = this.getAllItemsInLocalStorage();
        const newUserID = Object.keys(allLocalStorageItems).length + 1
        const newUser = this.makeNewUserObject(username, password, newUserID)
        localStorage.setItem(`user${newUserID}`, JSON.stringify(newUser));
    }

    static makeNewUserObject = (newUsername, newPassword, newUserID) => {
        return {
            username: newUsername,
            password: newPassword,
            UserID: newUserID,
            favouriteLocations: []
        }
    }
}

export default UserHandler;