export default function checkPasswordFormat(password: string) {
    let response = {
        hasCapitalAndSmall: false,
        hasSpecialCharacters: false,
        hasNumber: false,
        hasMinimumCharacterRequired: false
    }

    if (/\d/.test(password)) { //or /.*[0-9].*/
        response.hasNumber = true;
    }
    if (password.length > 7) {
        response.hasMinimumCharacterRequired = true
    }
    if (/(.*[!@#$%^&+=]).*/.test(password)) {
        response.hasSpecialCharacters = true
    }
    if (/(?=.*[a-z])(?=.*[A-Z]).*/.test(password)) {
        response.hasCapitalAndSmall = true
    }

    return response;
}