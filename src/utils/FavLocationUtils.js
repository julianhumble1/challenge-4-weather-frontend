import UserHandler from "./UserHandler.js";

class FavLocationUtils {
    static getUsersFavouriteLocations = (userID) => {
        const usersArray = UserHandler.getAllItemsInLocalStorageAsArray();
        const user = usersArray.find(user => user.userID === userID)
        return user ? user.favouriteLocations : false;
    }

    static addLocationToFavourites = (locationID, userID) => {
        const checkAlreadyInFavourites = this.checkLocationInFavourites(locationID, userID)
        if (!checkAlreadyInFavourites) {
            const usersArray = UserHandler.getAllItemsInLocalStorageAsArray();
            const user = usersArray.find(user => user.userID === userID);
            if (user) {
                user.favouriteLocations.push(String(locationID));
                localStorage.setItem(`user${userID}`, JSON.stringify(user));
            }
        } else {
            console.log("Location already in favourites")
        }
    }

    static removeLocationFromFavourites = (locationID, userID) => {
        const usersArray = UserHandler.getAllItemsInLocalStorageAsArray();
        const user = usersArray.find(user => user.userID === userID);
        if (user) {
            user.favouriteLocations = user.favouriteLocations.filter(location => location !== String(locationID));
            localStorage.setItem(`user${userID}`, JSON.stringify(user));
        }
    }

    static checkLocationInFavourites = (locationID, userID) => {
        if (userID !== "") {
            const usersArray = UserHandler.getAllItemsInLocalStorageAsArray();
            const user = usersArray.find(user => user.userID === userID);
            if (user) {
                return user.favouriteLocations.includes(String(locationID))
            } else {return false}
        } else {
            return false;
        }
    }
}

export default FavLocationUtils