import { WorkoutInterface } from '../types/Booking';
import FetchOptions from "../service/service";

type WorkoutItemProps = {
    Workouts: WorkoutInterface []
}

function WorkoutItem({Workouts}: WorkoutItemProps): JSX.Element {
    return (
        <div>
            <p>Name: ({Workouts.title})</p>
            {/* <p>Date: ({Workouts.time })</p> */}
            {/* <p>Antal: ({Workouts.duration})</p> */}
            <button className="workouts-button">Save</button>
        </div>
    )
}
export default WorkoutItem;