import React from "react";
import {IModalProps} from "@/app/components/Common/Modal/modal.interface";
import Icons from '../../../../../public/Icons';


export default function IModal({
                                   customStyle = '',
                                   closeCustomStyle = '',
                                   setIsModalOpen,
                                   backGroundStyle,
                                   children,
                                   hasCloseButton
                               }: IModalProps) {


    const handleModalOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        //check if the clickTarget is the modal overlay itself(not its children)
        if (e.target === e.currentTarget && setIsModalOpen) {
            // Close modal when clicking outside
            setIsModalOpen(false);
        }
    };

    return (
        <div
            className={"fixed inset-0 w-full h-full z-50" + " " + `${backGroundStyle}`}
            // Attach event handler to modal overlay
            onClick={handleModalOverlayClick}
        >
            <div
                className={"bg-secondary-01 right-0 rounded-t-2xl z-2 max-w-112 m-auto shadow-lg" + " " + `${customStyle}`}>
                {hasCloseButton && setIsModalOpen &&
                    <a className={'absolute left-4 top-4 z-10 cursor-pointer'+" "+
                        `${closeCustomStyle}`} onClick={() => setIsModalOpen(false)}>
                        <Icons name={'cross'}/>
                    </a>
                }
                {children}
            </div>
        </div>
    );
}