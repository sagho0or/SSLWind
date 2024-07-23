"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var Sidebar_1 = require("@/app/components/Sidebar");
var react_redux_1 = require("react-redux");
var slice_1 = require("@/store/chat/new/slice");
function WebChatComponent() {
    var _a = react_1.useState(true), isSidebarOpen = _a[0], setIsSidebarOpen = _a[1];
    var _b = react_1.useState(""), userInput = _b[0], setUserInput = _b[1];
    var _c = react_1.useState([]), messages = _c[0], setMessages = _c[1];
    var dispatch = react_redux_1.useDispatch();
    var chatState = react_redux_1.useSelector(function (state) { return state.chat; });
    var messagesEndRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (chatState.isDone && chatState.response) {
            setMessages(function (prevMessages) { return __spreadArrays(prevMessages, [{ role: "bot", content: chatState.response.data }]); });
        }
    }, [chatState.isDone, chatState.response]);
    var handleSendMessage = function () {
        if (userInput.trim()) {
            setMessages(function (prevMessages) { return __spreadArrays(prevMessages, [{ role: "user", content: userInput }]); });
            dispatch(slice_1.fetchChatResponse({ userInput: userInput }));
            setUserInput("");
        }
    };
    react_1.useEffect(function () {
        var _a;
        (_a = messagesEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (react_1["default"].createElement(Sidebar_1["default"], { isSidebarOpen: isSidebarOpen, setIsSidebarOpen: setIsSidebarOpen },
        react_1["default"].createElement("div", { className: "flex flex-col min-h-[660px]" },
            react_1["default"].createElement("div", { className: "flex-grow p-4 overflow-y-auto" },
                messages.map(function (message, index) { return (react_1["default"].createElement("div", { key: index, className: "my-2 " + (message.role === "user" ? "text-right" : "text-left") },
                    react_1["default"].createElement("span", { className: "inline-block p-2 rounded " + (message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-300") }, message.content))); }),
                react_1["default"].createElement("div", { ref: messagesEndRef })),
            react_1["default"].createElement("div", { className: "p-4 border-t border-gray-300" },
                react_1["default"].createElement("input", { type: "text", value: userInput, onChange: function (e) { return setUserInput(e.target.value); }, className: "w-full p-2 border border-gray-300 rounded", placeholder: "Type your message..." }),
                react_1["default"].createElement("button", { onClick: handleSendMessage, className: "mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600" }, "Send")))));
}
exports["default"] = WebChatComponent;
