export interface UserInfo {
    role: UserRole;
    username: string;
};

export type UserRole = "ADMIN" | "USER";