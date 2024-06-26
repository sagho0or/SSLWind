export interface IModalProps {
    children?: any;
    hasCloseButton?: boolean,
    backGroundStyle?: string,
    customStyle?: string;
    closeCustomStyle?:string;
    setIsModalOpen?: (isModalOpen: boolean)=> void;
}