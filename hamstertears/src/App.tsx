import './App.css';
import { useState } from 'react';

import AdminWorkoutForm from './components/AdminBookForm';
import { WorkoutInterface } from './types/Booking';
import { UserInfo, LoginInterface } from './types/User';
import PageBanner from './components/PageBanner';
// import BookItem from './components/BookItem';
// import { }

export const defaultUser: UserInfo = {
    id: "",
    name: "",
    role: "USER",
    bookedWorkouts: []
}
function App () {
    // const user: UserInfo = {name: "sara ", role: "USER"};
    // const [bookings, setBookings] = useState([] as UserInfo);

    // const addBooking = (booking: AdminWorkoutForm) => {
    //     setBookings([..WorkoutsData, booking]);
    // }


    return (
        <div className='App'>
            {/* <PageBanner theme="light" user={user}/> */}
            {/* <BookForm handlebooking ={addBooking}/> */}
            {/* <BookItem booking={BookItem}/> */}
        </div>
    );    
}

export default App;