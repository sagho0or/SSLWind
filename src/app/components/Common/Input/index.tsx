import React from "react";
import {IInputProps} from "@/app/components/Common/Input/input.interface";
import inputStyle from "@/app/components/Common/Input/input.style";
import CurrencyInput from "react-currency-input-field";


export default function IInput({
                                   label,
                                   labelStyle,
                                   containerCustomStyle,
                                   inputId,
                                   prefix = null,
                                   type = 'text',
                                   value,
                                   suffix = null,
                                   onChange = () => {
                                   },
                                   style = 'secondaryOutline',
                                   placeholder = '',
                                   helper,
                                   decimalsLimit = 0,
                                   maxLength,
                                   onKeyDown,
                                   readOnly,
                                   disabled,
                                   autoComplete,
                                   isOTP = false
                               }: IInputProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | string | undefined) => {
        onChange(e)
    };


    return (
        <div className={containerCustomStyle}>
            <label className={labelStyle ? labelStyle : "font-semibold"} htmlFor={inputId}>{label}</label>
            <div className={inputStyle.inputContainer + " " + (inputStyle as any)[style]}>
                <span>{prefix}</span>
                {
                    type !== 'currency' ?
                        <input autoComplete={isOTP ? "one-time-code" : "off"}
                               id={inputId}
                               onKeyDown={onKeyDown}
                               type={type == "floatNumber" ? "number" : type}
                               step={type == "floatNumber" ? "0.01" : "any"}
                               dir={type == 'number' ? 'ltr' : ''}
                               placeholder={placeholder}
                               value={disabled ? '' : value}
                               readOnly={readOnly}
                               maxLength={maxLength}
                               disabled={disabled}
                               onChange={handleInputChange}
                               className={"bg-transparent placeholder:text-placeholder " +
                                   "flex-1 px-0.5 text-right text-sm font-bold " +
                                   "outline-none appearance-none"}
                        />
                        : <CurrencyInput
                            id={inputId}
                            name="currencyInput"
                            onKeyDown={onKeyDown}
                            className={"bg-transparent flex-1 px-0.5 text-right text-sm " +
                                " placeholder:font-medium font-bold outline-none appearance-none"}
                            placeholder={placeholder}
                            decimalsLimit={decimalsLimit}
                            value={value || null} //null to prevent show NaN when user write string
                            onValueChange={handleInputChange} autoComplete={autoComplete}
                        />
                }
                <span>{suffix}</span>
            </div>
            <div className={"text-xs rtl my-4"}>{helper}</div>
        </div>
    );
}