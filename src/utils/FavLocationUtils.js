import UserHandler from "./UserHandler.js";

class FavLocationUtils {
    static getUsersFavouriteLocations = (userID) => {
        const usersArray = UserHandler.getAllItemsInLocalStorageAsArray();
        const user = usersArray.find(user => user.userID === userID)
        return user ? user.favouriteLocations : false;
    }

    static addLocationToFavourites = (locationID, userID) => {
        const usersArray = UserHandler.getAllItemsInLocalStorageAsArray();
        const user = usersArray.find(user => user.userID === userID);
        if (user) {
            user.favouriteLocations.push(locationID);
            localStorage.setItem(`user${userID}`, JSON.stringify(user));
        }
    }

    static removeLocationFromFavourites = (locationID, userID) => {
        const usersArray = UserHandler.getAllItemsInLocalStorageAsArray();
        const user = usersArray.find(user => user.userID === userID);
        if (user) {
            user.favouriteLocations = user.favouriteLocations.filter(location => location !== locationID);
            localStorage.setItem(`user${userID}`, JSON.stringify(user));
        }
    }

    static checkLocationInFavourites = (locationID, userID) => {
        if (userID !== "") {
            const usersArray = UserHandler.getAllItemsInLocalStorageAsArray();
            const user = usersArray.find(user => user.userID = userID);
            return user.favouriteLocations.includes(locationID)
        } else {
            return false;
        }

    }
}

export default FavLocationUtils