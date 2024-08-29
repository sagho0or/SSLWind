import React from "react";
import Icons from "../../../../../public/Icons";

interface PasswordInputWithToggleProps {
    password: string;
    isVisible: boolean;
    onToggleVisibility: () => void;
}

export default function  PasswordInputWithToggle({ password, isVisible, onToggleVisibility }:PasswordInputWithToggleProps) {
    return (
        <div className="flex items-center">
            <input
                type={isVisible ? 'text' : 'password'}
                value={password}
                readOnly
                className="border border-gray-300 rounded px-2 py-1 mr-2 flex-1"
            />
            <div
                className="cursor-pointer"
                onClick={onToggleVisibility}
            >
                <Icons name={'password'} />
            </div>
        </div>
    );
};

