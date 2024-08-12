"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.GET = exports.POST = void 0;
var chat_interface_1 = require("@/store/chat/new/chat.interface");
var server_1 = require("next/server");
function POST(req) {
    return __awaiter(this, void 0, void 0, function () {
        var userInput, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, req.json()];
                case 1:
                    userInput = (_a.sent()).userInput;
                    data = {
                        message: 'get user information successfully',
                        data: "MOCK DATA Response in Markdown-formated : Here are simple \"Hello World\" examples in both JavaScript and Python, followed by a list of cons for JavaScript.\n\n### Hello World in JavaScript\n\n```javascript\n// Hello World in JavaScript\nconsole.log('Hello, World!');\n```\n\n### Hello World in Python\n\n```python\n# Hello World in Python\nprint('Hello, World!')\n```\n\n### Cons of JavaScript\n\n- **Browser Dependency**: JavaScript code behaves differently in different browsers due to variations in browser implementations.\n- **Security Issues**: JavaScript code can be exploited for malicious purposes if not properly secured.\n- **Asynchronous Programming Complexity**: Managing asynchronous operations and callbacks can be complex and may lead to callback hell or convoluted code.\n- **Dynamic Typing**: The dynamic nature of JavaScript can lead to runtime errors that are difficult to debug.\n- **Global Variables**: By default, variables in JavaScript are global if not declared properly, which can lead to unintended interactions between different parts of a program.\n- **Performance**: JavaScript may not be as fast as compiled languages like C++ or Java, especially for CPU-intensive tasks.\n- **Memory Leaks**: Improper handling of memory allocation and garbage collection can lead to memory leaks.\n- **Lack of Standards**: Rapidly changing ecosystem and lack of standardized libraries can create inconsistencies and compatibility issues.\n- **Verbosity**: For certain tasks, JavaScript can be more verbose compared to other languages like Python.\n- **Tooling and Framework Overhead**: The abundance of frameworks and libraries can be overwhelming and may lead to excessive overhead if not managed properly.",
                        isSafe: true,
                        user: chat_interface_1.Sender.Bot
                    };
                    return [2 /*return*/, server_1.NextResponse.json(data, { status: 200 })];
            }
        });
    });
}
exports.POST = POST;
function GET() {
    return server_1.NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
exports.GET = GET;
