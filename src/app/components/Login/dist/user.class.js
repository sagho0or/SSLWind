"use strict";
exports.__esModule = true;
exports.UserRole = exports.User = void 0;
var User = /** @class */ (function () {
    function User(role, lastLogin, token, email, userId, refreshToken) {
        this.role = role;
        this.lastLogin = lastLogin;
        this.token = token;
        this.email = email;
        this.userId = userId;
        this.refreshToken = refreshToken;
    }
    User.getInstance = function () {
        if (!User.instance) {
            User.instance = new User(UserRole.Guest, new Date(), '', '', 0, '');
        }
        return User.instance;
    };
    User.prototype.updateUser = function (_a) {
        var role = _a.role, lastLogin = _a.lastLogin, token = _a.token, email = _a.email, userId = _a.userId, refreshToken = _a.refreshToken;
        this.role = role;
        this.lastLogin = lastLogin;
        this.token = token;
        this.email = email;
        this.userId = userId;
        this.refreshToken = refreshToken;
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
    UserRole["Guest"] = "";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
