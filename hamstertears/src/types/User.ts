import { WorkoutInterface } from "./Booking";

export interface LoginInterface {
    owner: string;
    password: string;
}

export interface UserInfo {
    id: string;
    name: string;
    role: "ADMIN" | "USER";
    bookedWorkouts: WorkoutInterface[];
};