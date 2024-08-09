"use strict";
exports.__esModule = true;
exports.UserRole = exports.Userسسس = void 0;
var Userسسس = /** @class */ (function () {
    function Userسسس(role, lastLogin, token, email, userId, refreshToken, firstName, lastName, mobile_number, birthDate, postalCode, address, imageUrl) {
        this.role = role;
        this.lastLogin = lastLogin;
        this.token = token;
        this.email = email;
        this.userId = userId;
        this.refreshToken = refreshToken;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile_number = mobile_number;
        this.birthDate = birthDate;
        this.imageUrl = imageUrl;
        this.postalCode = postalCode;
        this.address = address;
    }
    Userسسس.getInstance = function () {
        if (!User.instance) {
            User.instance = new User(UserRole.Guest, new Date(), '', '', 0, '', '', '', '', '', '', '', '');
        }
        return User.instance;
    };
    Userسسس.prototype.updateUser = function (_a) {
        var role = _a.role, lastLogin = _a.lastLogin, token = _a.token, email = _a.email, userId = _a.userId, refreshToken = _a.refreshToken;
        this.role = role;
        this.lastLogin = lastLogin;
        this.token = token;
        this.email = email;
        this.userId = userId;
        this.refreshToken = refreshToken;
    };
    Userسسس.prototype.displayInfo = function () {
        return "User " + this.userId + ": " + this.email + ", Role: " + this.role + ", Last Login: " + this.lastLogin;
    };
    Userسسس.prototype.clearUser = function () {
        this.role = UserRole.Guest;
        this.lastLogin = new Date();
        this.token = '';
        this.email = '';
        this.userId = 0;
        this.refreshToken = '';
    };
    return Userسسس;
}());
exports.Userسسس = Userسسس;
var UserRole;
(function (UserRole) {
    UserRole["User"] = "user";
    UserRole["Management"] = "management";
    UserRole["Admin"] = "admin";
    UserRole["Developer"] = "developer";
    UserRole["Guest"] = "";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
