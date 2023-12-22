import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css'
import { userContext } from '../../../App';
const Dashboard = () => {
    const containerStyle = {
        backgroundColor: '#f4fdfb',
        height: '100%'
    }

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://server-six-wine.vercel.app/appointmentsByDate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`

            },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [selectedDate])
    return (
        <div>
            <div style={containerStyle} className="row">
                <div className='col-md-3'>
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-4">
                    <h4 className='mt-3'>Appointments</h4>
                    <Calendar className='calendar calend mt-5' onChange={handleDateChange} value={new Date()} />
                </div>

                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments} selectedDate={selectedDate} ></AppointmentByDate>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;