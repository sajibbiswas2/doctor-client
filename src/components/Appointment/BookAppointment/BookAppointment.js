import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
        _id: 'abc123',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitinghours: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: 'abc321',
        id: 2,
        subject: 'Cosmetics Desntistry',
        visitinghours: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: 'abc312',
        id: 3,
        subject: 'Teeth Orthodontics',
        visitinghours: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: 'abc231',
        id: 4,
        subject: 'Teeth Orthodontics',
        visitinghours: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: 'bca123',
        id: 5,
        subject: 'Teeth Orthodontics',
        visitinghours: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: 'cab123',
        id: 6,
        subject: 'Teeth Orthodontics',
        visitinghours: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
]
const BookAppointment = ({ date }) => {
    return (
        <section>
            <h1 style={{ color: '#1cc7c1' }} className='text-center mb-5'> Available Appointment on {date.toDateString()}</h1>
            <div className='row'>
                {
                    bookingData.map(booking => <BookingCard booking={booking} key={booking.id} date={date}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;