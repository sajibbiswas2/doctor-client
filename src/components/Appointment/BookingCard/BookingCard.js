import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css'
const BookingCard = ({ booking,date }) => {


    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='col-md-4 mb-5'>
            <div className="container">
                <div className="card p-3">
                    <card className="card-body text-center">
                        <h5 className='card-title text-brand'>{booking.subject}</h5>
                        <h6>{booking.visitinghours}</h6>
                        <p>{booking.totalSpace} SPACES AVAILABLE</p>
                        <button onClick={openModal} className='btn-brand'>BOOK APPOINTMENT</button>
                        <AppointmentForm modalIsOpen ={modalIsOpen} appointmentOn ={booking.subject} date={date} closeModal ={closeModal}></AppointmentForm>
                    </card>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;