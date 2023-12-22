import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import swal from 'sweetalert';
import Loading from '../Loading/Loading';
const AllDoctros = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    const [singleDoctor, setSingleDoctor] = useState({})
    const [doctorOnChange, setDoctorOnChange] = useState({})
    console.log(doctorOnChange);
    useEffect(() => {
        fetch('https://server-six-wine.vercel.app/doctors')
            .then(res => res.json())
            .then(data => {
                setAllDoctors(data)
            })
    }, [])

    const handleDelete = (id) => {
        // console.log(id);
        fetch('https://server-six-wine.vercel.app/deleteDoctor/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                fetch('https://server-six-wine.vercel.app/doctors')
                    .then(res => res.json())
                    .then(data => setAllDoctors(data))
            })
            .catch(err => {
                console.log("delete err: ", err);
            })
    }

    const singleDoctorLoad = (id) => {
        fetch('https://server-six-wine.vercel.app/singleDoctor/' + id)
            .then(res => res.json())
            .then(data => setSingleDoctor(data))
    }

    // update data
    const handleUpdate = (id) => {
        const name = doctorOnChange.name;
        const email = doctorOnChange.email;
        const phone = doctorOnChange.phone;
        const info = { id, name, email, phone }
        fetch('https://server-six-wine.vercel.app/update/' + id, {
            method: 'PATCH',
            // headers: { 'content-type': 'application/json' },
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                swal({
                    title: "Good job!",
                    text: "Patients Delete Successfull",
                    icon: "success",
                    button: "OK",
                });
                fetch('https://server-six-wine.vercel.app/doctors')
                    .then(res => res.json())
                    .then(data => {
                        setAllDoctors(data)
                    })
            })
    }

    const doctorChange = (e) => {
        const newDoctor = { ...doctorOnChange }
        newDoctor[e.target.name] = e.target.value;
        setDoctorOnChange(newDoctor);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-9 container">
                    <h3 className='text-brand  mt-5'>Doctors</h3>
                    {
                        allDoctors.length <= 0 ? <Loading></Loading> :

                            <table className='table table-hover text-center ' style={{ weight: '500px', padding: '80px' }}>

                                <thead >
                                    <tr style={{ backgroundColor: '#0FCFE8' }} className='text-secondary'>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>

                                {
                                    allDoctors.map(doctor => <tbody key={doctor._id}>
                                        <tr>
                                            <td>{doctor.name}</td>
                                            <td>{doctor.phone}</td>
                                            <td>{doctor.email}</td>
                                            <td>
                                                <button onClick={() => singleDoctorLoad(doctor._id)} type="button" className='btn-brand btn me-3' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="fa-solid fa-pen-to-square"></i></button>
                                                <button className='btn-brand btn' onClick={() => handleDelete(doctor._id)}><i class="fa-solid fa-trash"></i></button>
                                            </td>



                                        </tr>

                                    </tbody>)
                                }
                            </table>
                    }
                </div>

                {/* Edit field doctors  start */}

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Doctor Information</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={handleUpdate}>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Name:</label>
                                        <input type="text" class="form-control" id="recipient-name" name='name' onChange={doctorChange} defaultValue={singleDoctor.name} />

                                        <label for="recipient-email" class="col-form-label">Email:</label>
                                        <input type="email" class="form-control" id="recipient-email" name='email' onChange={doctorChange} defaultValue={singleDoctor.email} />

                                        <label for="recipient-phone" class="col-form-label">Phone Number:</label>
                                        <input type="text" class="form-control" id="recipient-phone" name='phone' onChange={doctorChange} defaultValue={singleDoctor.phone} />
                                    </div>


                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={() => handleUpdate(singleDoctor._id)} type="button" class="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Edit field doctors  end */}


            </div>
        </div>
    );
};

export default AllDoctros;