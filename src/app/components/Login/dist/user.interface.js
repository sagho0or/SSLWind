"use strict";
exports.__esModule = true;
exports.UserRole = exports.User = void 0;
var User = /** @class */ (function () {
    function User(role, lastLogin, token, email, userId) {
        this.role = role;
        this.lastLogin = lastLogin;
        this.token = token;
        this.email = email;
        this.userId = userId;
    }
    User.prototype.updateLastLogin = function (date) {
        this.lastLogin = date;
    };
    User.prototype.displayInfo = function () {
        return "User " + this.userId + ": " + this.email + ", Role: " + this.role + ", Last Login: " + this.lastLogin;
    };
    return User;
}());
exports.User = User;
var UserRole;
(function (UserRole) {
    UserRole["User"] = "User";
    UserRole["Management"] = "management";
    UserRole["Admin"] = "admin";
    UserRole["Developer"] = "developer";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
