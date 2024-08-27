import { UserRole } from "@/store/userProfile/interface";

export interface User {
    email: string;
    password: string;
    role: UserRole;
}
export interface RoleManagementProps {
    setIsEditPasswordOpen: (isOpen: boolean) => void;
    isEditPasswordOpen: boolean;
}