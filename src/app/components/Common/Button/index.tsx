import React from 'react';
import {IButtonProps} from "@/app/components/Common/Button/button.interface";
import buttonStyles from "@/app/components/Common/Button/button.styles";


export default function IButton({
                                    style='primarySimple',
                                    customStyle,
                                    onClick,
                                    children,
                                    disabled
                                }: IButtonProps) {
    return (
        <button className={customStyle + " " +buttonStyles.button + (buttonStyles as any)[style] }
                onClick={onClick}
                disabled={disabled}>
            {children}
        </button>
    )
}