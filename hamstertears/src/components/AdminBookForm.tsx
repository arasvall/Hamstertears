import { useState } from "react";
import FetchOptions from "../service/service";
import { WorkoutInterface } from "../types/Booking";
// import { Weekday, hour } from "../types/Schema";
import { UserInfo } from "../types/User";


interface AdminWorkout {
    workouts: WorkoutInterface[]
    setWorkouts: React.Dispatch<React.SetStateAction<WorkoutInterface[]>>;
}

type InputEvent = ChangeEvent<HTMLInputElement>;

type AdminWorkoutProps = {
    handlebooking: (booking: Booking) => void
}

const defaultAdminWorkout: AdminWorkout = {
    title: '',
    name: ''
}

function 

// type AdminWorkoutProps = {
//     workouts: WorkoutInterface []
//     setWorkouts: React.Dispatch<React.SetStateAction<WorkoutInterface[]>>;
// }


// const defaultValue: WorkoutInterface = {
//     id: "",
//     title: "",
//     time: "",
//     progress: ""
// }

// export default function Adminprop ({workoutItem, setWorkouts}: AdminWorkoutProps) {
//     const [toggle, setToggle] = useState(false)
//     const [inputValues, setInputValues] = useState(defaultValue)
// }

// //spara passet
// function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value} = event.target;

//     setInputValues((prevInputValues) => {
//         return {
//             ..prevInputValues,
//             [name]: getValue,
//         };
//     });
// }

