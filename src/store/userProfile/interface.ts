export interface UserProfileResponseInterface {
    role: UserRole,
    lastLogin: Date,
    token: string,
    email: string,
    userId: number,
    refreshToken: string,
    firstName : string,
    lastName: string,
    mobileNumber: string,
    birthDate: string,
    imageUrl: string,
    postalCode: string,
    address: string,
}
export enum UserRole {
    User = 'user',
    Management = 'management',
    Admin = 'admin',
    Developer = 'developer',
    Guest = ''
  }