export interface User {
    email: string;
    password: string;
}
export interface RoleManagementProps {
    setIsEditPasswordOpen: (isOpen: boolean) => void;
    isEditPasswordOpen: boolean;
}