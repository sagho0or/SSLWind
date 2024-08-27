import { UserRole } from "@/store/userProfile/interface";

export interface UserDtoResponse {
  email: string;
  // gets true after first login
  isActive: boolean;
  role: UserRole;
  userId?: number;
}