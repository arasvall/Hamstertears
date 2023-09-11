import { useState, ChangeEvent, FormEvent } from "react";
// import FetchOptions from "../service/service";
// import { WorkoutInterface } from "../types/Booking";
import { UserInfo } from "../types/User";
import React  from "react";


interface WorkoutData {
    id: string;
    title: string;
    time: string;

}

type InputEvents = ChangeEvent<HTMLInputElement>;

type AdminWorkoutProps = {
    handleWorkouts: (Workouts: UserInfo) => void
}
const defaultWorkoutData: WorkoutData = {
    id: "",
    title: " ",
    time: ""
}

function AdminWorkoutForm({handleWorkouts}: AdminWorkoutProps): JSX.Element {
    const [WorkoutsData, setWorkoutData] = useState(defaultWorkoutData);
    
    //spara passet
        const handleNameChange = (event: InputEvents) => {
            setWorkoutData({...WorkoutsData, title: event.target.value});
        }
    }
    const handleFormSumbit = (event: FormEvent) => {
        event.preventDefault();
        handleWorkouts({
            title: WorkoutsData.title,
            // time: WorkoutsData.time
        });
    }  
    return (
    <form onSubmit={handleFormSumbit}>
        <div>
            <label>Name</label>
            <input type="text" name="name" onChange={handleNameChange}/>
        </div>

        <div>
            <label>Time</label>
            <input type="time" name="time" onChange={handleNameChange}/>
        </div>
        <button type="submit">Spara</button>
    </form>
    )
}

export default AdminWorkoutForm;