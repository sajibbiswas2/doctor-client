import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import swal from 'sweetalert';
import Loading from '../Loading/Loading';
const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch('https://server-six-wine.vercel.app/appointments?search=' + search)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [search])

    const handleDelete = (id) => {
        try {
            fetch('https://server-six-wine.vercel.app/deleteAppointment/' + id, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    swal({
                        title: "Good job!",
                        text: "Patients Delete Successfull",
                        icon: "success",
                        button: "OK",
                    });
                    fetch('https://server-six-wine.vercel.app/appointments')
                        .then(res => res.json())
                        .then(data => setAppointments(data))
                })
        } catch (error) {
            console.log(error);
        }
    }
    // search change handler

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSearchSubmit = (data) => {
        data.preventDefault()
    }
    return (
        <div>
            <div className="row">

                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-9 container">
                    <h4 className='text-brand mb-5 mt-5'>Patients</h4>
                    <form onSubmit={handleSearchSubmit} class="d-flex mb-5">
                        <input class="form-control me-2 w-50 p-2" type="search" placeholder="Search Name" onChange={handleSearch} onBlur={handleSearch} aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    {
                        appointments.length <= 0 ? <Loading></Loading> :

                            <table className='table table-hover  text-center' style={{ weight: '500px', padding: '100px' }}>

                                <thead>
                                    <tr style={{ backgroundColor: '#0FCFE8' }} className='text-secondary'>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Height</th>
                                        <th scope="col">Weight</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>

                                {
                                    appointments.map(appoint => <tbody key={appoint._id}>
                                        <tr>
                                            <td>{appoint.name}</td>
                                            <td>{appoint.phone}</td>
                                            <td>{appoint.email}</td>
                                            <td>{appoint.height}</td>
                                            <td>{appoint.weight}</td>
                                            <td>{appoint.gender}</td>
                                            <td>
                                                {/* <button className='btn-brand me-2'>Edit</button> */}
                                                <button onClick={() => handleDelete(appoint._id)} className='btn-brand'><i class="fa-solid fa-trash"></i></button>
                                            </td>

                                        </tr>

                                    </tbody>)
                                }
                            </table>

                    }
                </div>
            </div>
        </div>
    );
};

export default AllPatients;