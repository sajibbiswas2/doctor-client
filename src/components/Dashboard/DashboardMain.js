import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import './Dashboard.css'
import Loading from '../Loading/Loading';
const DashboardMain = () => {
    const [appointments, setAppointments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://server-six-wine.vercel.app/appointmentsdash')
            .then(res => res.json())
            .then(data => {
                setAppointments(data)

            })
    })

    useEffect(() => {
        fetch('https://server-six-wine.vercel.app/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    },[])
    return (
        <div className="row ">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">

                <h5 className='mt-4'>Dashboard</h5>
                <div className="row container">
                    <div className="col-md-4">
                        <div style={{ backgroundColor: '#F1536E', height: '80px', borderRadius: '5px', }} className=' d-flex  justify-content-center align-items-center text-white lh-sm p-2 pe-4 ps-4 mt-4'>
                            <h1 className='me-3'>{doctors.length}</h1>
                            <p>Total <br /> Doctors</p>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div style={{ backgroundColor: '#00C689', height: '80px', borderRadius: '5px', }} className=' d-flex  justify-content-center align-items-center text-white lh-sm p-2 pe-4 ps-4 mt-4'>
                            <h1 className='me-3'>{appointments.length}</h1>
                            <p>Total<br />Appointments</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div style={{ backgroundColor: '#FDA006', height: '80px', borderRadius: '5px', }} className=' d-flex  justify-content-center align-items-center text-white lh-sm p-2 pe-4 ps-4 mt-4'>
                            <h1 className='me-3'>35</h1>
                            <p>Total <br />Patients</p>
                        </div>
                    </div>
                </div>

                <h4 className='text-brand mt-5'>Recent 10 Appointments</h4>
                {
                    appointments.length <= 0 ? <Loading></Loading> :

                        <div className='container'>
                            <table className='table table-hover  text-center' style={{ height: '350px', padding: '100px' }}>

                                <thead>
                                    <tr >
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Height</th>
                                        <th scope="col">Weight</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Prescription</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>

                                {
                                    appointments.slice(-10).map(appoint => <tbody key={appoint._id}>
                                        <tr>
                                            <td>{appoint.name}</td>
                                            <td>{appoint.phone}</td>
                                            <td>{appoint.date}</td>
                                            <td>{appoint.height}</td>
                                            <td>{appoint.weight}</td>
                                            <td>{appoint.gender}</td>
                                            <td>
                                                <button className="btn-brand">View</button>
                                            </td>
                                            <td>
                                                <button className="btn-brand">Pending</button>

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

export default DashboardMain;