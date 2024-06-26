"use strict";
exports.__esModule = true;
var Modal_1 = require("@/app/components/Common/Modal");
var confirmModalButtons_1 = require("@/app/components/SafeLLM/MobileComparison/ConfirmModal/confirmModalButtons");
var isMobileView_1 = require("@/app/utils/isMobileView");
function ConfirmModal(props) {
    var _a;
    return (React.createElement(Modal_1["default"], { customStyle: "top-48 relative " + (isMobileView_1["default"] ? 'px-4 pt-8 min-h-full' : 'p-6 min-h-100 rounded-2xl'), backGroundStyle: "bg-secondary-17 bg-opacity-40", setIsModalOpen: props.setIsConfirmModalOpen, hasCloseButton: true },
        React.createElement("div", { className: 'flex flex-col items-center text-xl font-semibold' },
            "s                ",
            React.createElement("h3", { className: 'my-3.5' }, (_a = props.selectedExchange) === null || _a === void 0 ? void 0 : _a.title)),
        React.createElement("div", { className: 'bg-secondary-02 flex justify-center items-center h-12 rounded-xl font-bold' },
            React.createElement("span", { className: 'text-xs mx-0.5' })),
        React.createElement("h6", { className: 'font-semibold my-5' }, "Details"),
        React.createElement("div", { className: 'divide-secondary-02 divide-y divide-solid' }),
        React.createElement(confirmModalButtons_1.ConfirmModalButtons, { selectedExchange: props.selectedExchange, setIsConfirmModalOpen: props.setIsConfirmModalOpen, side: props.side, track_id: props.track_id, getExchanges: function () { return props.updateExchange(); } })));
}
exports["default"] = ConfirmModal;
