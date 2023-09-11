import './App.css';
import { useState } from 'react';

// import AdminbookForm from './components/AdminBookForm';
import { Booking } from './types/Booking';
import { UserInfo, UserRole } from './types/User';
import PageBanner from './components/PageBanner';
import BookItem from './components/BookItem';
// import { }

function App () {
    const user: UserRole = {username: " ", role: " "};
    const [bookings, setBookings] = useState([] as UserInfo);

    const addBooking = (booking: Booking) => {
        setBookings([..booking, booking]);
    }


    return (
        <div className='App'>
            <PageBanner theme="light" user={user}/>
            <BookForm handlebooking ={addBooking}/>
            <BookItemItem booking={BookItem}/>
        </div>
    );    
}

export default App;