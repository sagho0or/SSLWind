export class User implements UserDto {
  role: UserRole;
  lastLogin: Date;
  token: string;
  email: string;
  userId: number;
  refreshToken : string;

  private static instance: User;
  

  private constructor(role: UserRole, lastLogin: Date, token: string, email: string, userId: number, refreshToken: string) {
    this.role = role;
    this.lastLogin = lastLogin;
    this.token = token;
    this.email = email;
    this.userId = userId;
    this.refreshToken = refreshToken;
  }

  public static getInstance(): User {
    if (!User.instance) {
      User.instance = new User(UserRole.Guest, new Date(), '', '', 0 ,'');
    }
    return User.instance;
  }

  public updateUser({ role, lastLogin, token, email, userId, refreshToken }: UserDto): void {
    this.role = role;
    this.lastLogin = lastLogin;
    this.token = token;
    this.email = email;
    this.userId = userId;
    this.refreshToken= refreshToken;
  }

  public displayInfo(): string {
    return `User ${this.userId}: ${this.email}, Role: ${this.role}, Last Login: ${this.lastLogin}`;
  }
  
  public clearUser(): void {
    this.role = UserRole.Guest;
    this.lastLogin = new Date();
    this.token = '';
    this.email = '';
    this.userId = 0;
    this.refreshToken = '';
  }
}
export interface UserDto {
  role: UserRole,
  lastLogin: Date,
  token: string,
  email: string,
  userId: number,
  refreshToken: string
}
export enum UserRole {
  User = 'User',
  Management = 'management',
  Admin = 'admin',
  Developer = 'developer',
  Guest = ''
}