class UserDataValidator {

    static validateEmail = (email) => {
        const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let emailError = "";
        if (!emailRegEx.test(email)) {
            emailError = "Please enter a valid email address";
        }
        return emailError;
    }

    static validatePassword = (password) => {
        const passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
        let passwordError = "";
        if (!passwordRegEx.test(password)) {
            passwordError = "Password must contain a special character, number and be at least 8 characters long";
        }
        return passwordError;
    }

}

export default UserDataValidator;