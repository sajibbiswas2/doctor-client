import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileSidebar.css'
const ProfileSidebar = () => {
    return (
        <div className='bg-dark profile-sidebar'>
            <ul className='mt-5'>
                <li className='mt-4'>
                    <Link to='/home'><i class="fas fa-home-lg"></i> Home</Link>
                </li>

                <li className='mt-4'>
                    <Link to='/userAppointments'><i class="fa-solid fa-calendar-check"></i> My Appointments</Link>
                </li>
                <li className='mt-4'>
                    <Link to='/profile'><i class="fas fa-bell"></i> Notification</Link>
                </li>
                <li className='mt-4'>
                    <Link to='/profile'><i class="fa-solid fa-gear"></i> My Profile </Link>
                </li>

                <li className='mt-4'>
                    <Link to='/profile'><i class="fas fa-sign-out-alt"></i> Sign-out</Link>
                </li>
            </ul>
        </div>
    );
};

export default ProfileSidebar;