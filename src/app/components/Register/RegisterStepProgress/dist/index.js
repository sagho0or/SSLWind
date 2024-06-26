"use strict";
exports.__esModule = true;
var Icons_1 = require("../../../../../public/Icons");
function RegisterStepProgress(props) {
    return (React.createElement("div", null,
        React.createElement("ol", { className: "flex items-center w-full max-w-sm m-auto mt-10" },
            React.createElement("li", { className: "flex flex-1 items-center text-primary\n        after:content-[''] after:w-full after:h-1 after:inline-block\n        after:bg-gradient-to-l after:from-primary " + ((props.step > 1) ? 'after:to-primary' : 'after:to-secondary-02') + " " },
                React.createElement("span", { className: "flex items-center justify-center flex-shrink-0 w-12 h-12 bg-primary-01 rounded-full " },
                    React.createElement("span", { className: "flex items-center justify-center \n            " + ((props.step == 1) ? 'w-9 h-9 ' : 'w-12 h-12') + "\n            bg-primary rounded-full flex-shrink-0" },
                        React.createElement(Icons_1["default"], { name: 'register-otp-done' })))),
            React.createElement("li", { className: "flex flex-1 items-center\n        after:content-[''] after:w-full after:h-1 after:inline-block\n        after:bg-gradient-to-l \n        " + ((props.step == 1) ? 'after:from-secondary-02 after:to-secondary-02' :
                    (props.step == 2) ? 'after:from-primary after:to-secondary-02' :
                        'after:from-primary after:to-primary') },
                React.createElement("span", { className: "flex items-center justify-center flex-shrink-0 \n        " + ((props.step < 2) ? 'w-9 h-9 ' : 'w-12 h-12') + "\n         bg-primary-01 rounded-full" },
                    React.createElement("span", { className: "flex items-center justify-center \n            " + ((props.step <= 2) ? 'w-9 h-9 ' : 'w-12 h-12') + "\n            " + (props.step < 2 ? 'bg-secondary-02' : 'bg-primary') + "\n             rounded-full flex-shrink-0" }, (props.step == 1) ?
                        React.createElement(Icons_1["default"], { name: 'register-identity' }) :
                        React.createElement(Icons_1["default"], { name: "register-identity-done" })))),
            React.createElement("li", { className: "flex flex-none items-center " },
                React.createElement("span", { className: "flex items-center justify-center flex-shrink-0 \n         " + ((props.step < 3) ? 'w-9 h-9 ' : 'w-12 h-12') + "\n         bg-primary-01 rounded-full " },
                    React.createElement("span", { className: "flex items-center justify-center \n            " + ((props.step <= 3) ? 'w-9 h-9 ' : 'w-12 h-12') + "\n            " + ((props.step < 3) ? 'bg-secondary-02' : 'bg-primary') + "\n             rounded-full flex-shrink-0" }, (props.step <= 2) ?
                        React.createElement(Icons_1["default"], { name: 'register-password' }) :
                        React.createElement(Icons_1["default"], { name: "register-password-done" }))))),
        React.createElement("ol", { className: "flex items-center w-full max-w-[25rem] m-auto mt-4 justify-between" },
            React.createElement("li", null,
                React.createElement("span", { className: "text-primary" }, "Confirmation Code")),
            React.createElement("li", null,
                React.createElement("span", { className: "" + ((props.step == 1) ? 'text-secondary-10' : 'text-primary') }, "Personal Information")),
            React.createElement("li", null,
                React.createElement("span", { className: "" + ((props.step <= 2) ? 'text-secondary-10' : 'text-primary') }, "Password")))));
}
exports["default"] = RegisterStepProgress;
