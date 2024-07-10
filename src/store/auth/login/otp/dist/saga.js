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
var errorHandling_1 = require("@/store/_utils/errorHandling");
var axios_1 = require("@/store/axios");
var slice_1 = require("./slice");
function ApiCall(action) {
    var dataForm, response, successRes, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dataForm = action.payload;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 6]);
                return [4 /*yield*/, effects_1.call(axios_1["default"].post, process.env.NEXT_PUBLIC_BASE_URL + "auth/login/verify/otp/", dataForm, {
                        timeout: Number(process.env.API_TIME_OUT)
                    })];
            case 2:
                response = _a.sent();
                successRes = response === null || response === void 0 ? void 0 : response.data;
                return [4 /*yield*/, effects_1.put(slice_1.loginOtpSuccess(successRes))];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                error_1 = _a.sent();
                return [4 /*yield*/, errorHandling_1["default"](error_1, slice_1.loginOtpFailure)];
            case 5:
                _a.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
function loginOtpSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeLatest(slice_1.loginOtpLoading.type, ApiCall)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports["default"] = loginOtpSaga;
