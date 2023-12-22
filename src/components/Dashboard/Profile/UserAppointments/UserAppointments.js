import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../../App';
import Loading from '../../../Loading/Loading';
import ParsonalInfo from '../ParsonalInfo/ParsonalInfo';
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';

const UserAppointments = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [userAppointments, setUserAppointments] = useState([])
    console.log(userAppointments);
    useEffect(() => {
        fetch('https://server-six-wine.vercel.app/userAppointments?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserAppointments(data))
    }, [])
    return (
        <div className='row'>
            <div className="col-md-3">
                <ProfileSidebar></ProfileSidebar>
            </div>

            {/* <div className="col-md-3">
                <ParsonalInfo></ParsonalInfo>
            </div> */}

            <div className="col-md-9 container">
                <h5 className='text-brand mt-3 mb-5'>My Appointments: {userAppointments.length}</h5>
                {
                    userAppointments.length <= 0 ? <Loading></Loading> : <div>
                        <table className='table table-hover  text-center' style={{ height: '350px', padding: '100px' }}>
                            <thead>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Date</th>
                                <th scope="col">Height</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Action</th>
                            </thead>

                            {

                                userAppointments.map(UserAppoint => <tbody key={UserAppoint._id}>

                                    <tr>
                                        <td>{UserAppoint.name}</td>
                                        <td>{UserAppoint.phone}</td>
                                        <td>{UserAppoint.date}</td>
                                        <td>{UserAppoint.height}</td>
                                        <td>{UserAppoint.weight}</td>
                                        <td>{UserAppoint.gender}</td>
                                        <td>
                                            <button className="btn-brand">Delete</button>
                                        </td>


                                    </tr>
                                </tbody>)
                            }
                        </table>
                    </div>
                }

            </div>
        </div>
    );
};

export default UserAppointments;