"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var effects_1 = require("redux-saga/effects");
var saga_1 = require("@/store/auth/login/form/saga");
var saga_2 = require("@/store/auth/register/registerMobile/saga");
var saga_3 = require("@/store/auth/login/otp/saga");
var saga_4 = require("@/store/auth/register/registerIdentity/saga");
var saga_5 = require("@/store/auth/register/registerPassword/saga");
var saga_6 = require("./auth/register/registerOtp/saga");
var saga_7 = require("@/store/auth/otp/resendOtpSms/saga");
var saga_8 = require("@/store/userProfile/saga");
var saga_9 = require("@/store/security/activeGA/saga");
var saga_10 = require("@/store/security/verify/saga");
var saga_11 = require("@/store/security/editPassword/saga");
var saga_12 = require("@/store/security/authHistory/saga");
var saga_13 = require("@/store/security/change2FA/saga");
var saga_14 = require("@/store/history/saga");
var saga_15 = require("@/store/auth/refreshToken/saga");
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.all([
                    saga_8["default"](),
                    saga_15["default"](),
                    saga_1["default"](),
                    saga_3["default"](),
                    saga_7["default"](),
                    saga_2["default"](),
                    saga_6["default"](),
                    saga_4["default"](),
                    saga_5["default"](),
                    saga_9["default"](),
                    saga_13["default"](),
                    saga_10["default"](),
                    saga_11["default"](),
                    saga_12["default"](),
                    saga_14["default"](),
                ])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports["default"] = rootSaga;
