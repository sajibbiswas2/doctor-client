import React, { useContext, useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Sidebar.css'
import { getAuth, signOut } from "firebase/auth";
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isDoctor, setIsDoctor] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    // console.log('is admin ', isAdmin);
    useEffect(() => {
        fetch('https://server-six-wine.vercel.app/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])

    useEffect(() => {
        fetch('https://server-six-wine.vercel.app/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    const handlelogut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            alert("Logout Successful")
            window.location.reload(false);
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='sidebar-container pe-5 d-flex'>
            <ul className='' >
                {
                    <div>
                        <li className='mt-5 pt-3'>
                            <Link to='/dashboardMain' > <i class="fas fa-th-large"></i> Dashboard</Link>

                        </li>
                    </div>
                }

                {
                    <div>
                        <li className='mt-4'>
                            <Link to='/dashboard/appointment'> <i class="fas fa-calendar-minus"></i> Appointments</Link>
                        </li>
                    </div>
                }


                {
                    <div>
                        <li className='mt-4'>
                            <Link to='/allPatients'> <i class="fas fa-user-friends"></i> Patients</Link>
                        </li>

                        <li className='mt-4'>
                            <Link to='/notice'><i class="fa-sharp fa-solid fa-notes-medical"></i> Notice</Link>
                        </li>

                        <li className='mt-4'>
                            <Link to='/addDoctor'><i class="fas fa-user-md"></i> Add a Doctor</Link>
                        </li>

                        <li className='mt-4'>
                            <Link to='/allDoctors'><i class="fas fa-hospital-user"></i> Doctors</Link>
                        </li>

                        <li className='mt-4'>
                            <Link to='/addAdmin'><i class="fas fa-cog"></i> Add Admin</Link>
                        </li>


                    </div>
                }


                <li className='mt-4'>
                    <Link to='/home'> <i class="fas fa-home"></i> Home</Link>
                </li>

                <li className=' logut' onClick={() => { handlelogut() }}>
                    <i class="fas fa-sign-out-alt"></i> <span>LogOut</span>
                </li>
            </ul>



        </div>
    );
};

export default Sidebar;