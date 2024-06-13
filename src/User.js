class User {
    #username;
    #password;
    #favouriteLocations;
    #userID

    constructor(username, password, userID) {
        this.#username = username;
        this.#password = password;
        this.#userID = userID;
        this.#favouriteLocations = [];
    }

    getUsername = () => this.#username;;

    getPassword = () => this.#password;

    getFavouriteLocations = () => this.#favouriteLocations;

    getUserID = () => this.#userID

    addFavouriteLocation = (locationId) => {
        this.#favouriteLocations.push(locationId)
    }

    removeFavouriteLocation = (locationId) => {
         this.#favouriteLocations = this.#favouriteLocations.filter(item => item !== locationId);
    }
}

export default User