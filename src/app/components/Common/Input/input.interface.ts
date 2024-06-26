import {ReactNode} from 'react';

export interface IInputProps {
    label: string | ReactNode;
    labelStyle?: string;
    containerCustomStyle?: string;
    inputId: string,
    style?: string;
    type?: string;
    value?: any;
    onChange?: (input: any) => void;
    onKeyDown?: (e: any) => void;
    placeholder?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    helper?: string | ReactNode;
    decimalsLimit?: number;
    maxLength?: number;
    readOnly?: boolean;
    disabled?: boolean;
    autoComplete?: string;
    isOTP?: boolean;
}