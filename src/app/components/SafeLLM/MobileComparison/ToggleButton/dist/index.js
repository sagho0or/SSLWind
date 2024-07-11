"use strict";
exports.__esModule = true;
function ToggleButton(props) {
    return (React.createElement("div", { className: "flex font-bold text-center border-b-3 border-secondary-02" },
        React.createElement("div", { className: "w-1/2 p-2 cursor-pointer \n                 " + (props.side === 'BID' ? 'border-b-2 border-success' : 'text-secondary-10'), onClick: function () {
                props.handleTabClick('BID');
            } }, "Yes"),
        React.createElement("div", { className: "w-1/2 p-2 cursor-pointer \n                 " + (props.side === 'BID' ? 'text-secondary-10' : 'border-b-2 border-error'), onClick: function () {
                props.handleTabClick('ASK');
            } }, "No")));
}
exports["default"] = ToggleButton;
