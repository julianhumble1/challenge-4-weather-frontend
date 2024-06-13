class UserHandler {

    static getAllItemsInLocalStorageAsArray = () => {
        const allLocalStorageItems = {}
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            allLocalStorageItems[key] = localStorage.getItem(key);
        }
        return Object.values(allLocalStorageItems).map(user => JSON.parse(user));
    }
    static addUserToLocalStorage = (email, password) => {
        const allUsers = this.getAllItemsInLocalStorageAsArray();
        const newUserID = Object.keys(allUsers).length + 1
        const newUser = this.makeNewUserObject(email, password, newUserID)
        localStorage.setItem(`user${newUserID}`, JSON.stringify(newUser));
    }

    static makeNewUserObject = (newEmail, newPassword, newUserID) => {
        return {
            email: newEmail,
            password: newPassword,
            userID: newUserID,
            favouriteLocations: []
        }
    }

    static checkEmailAndPasswordMatchStorage = (emailToCheck, passwordToCheck) => {
        const usersArray = this.getAllItemsInLocalStorageAsArray();
        for (let i = 0; i < usersArray.length; i++) {
            if (emailToCheck === usersArray[i].email && passwordToCheck === usersArray[i].password) {
                console.log("matched")
                return usersArray[i].userID
            }
        }
        return false;
    }
}

export default UserHandler;