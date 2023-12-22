import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import swal from 'sweetalert';
const AddAdmin = () => {
    const [admin, setAdmin] = useState({})
    const [listAdmin, setListAdmin] = useState([])
    const handleChange = (e) => {
        const newChange = { ...admin }
        newChange[e.target.name] = e.target.value
        setAdmin(newChange)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://server-six-wine.vercel.app/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                swal({
                    title: "Successfull",
                    text: "Admin Create Successfull",
                    icon: "success",
                    button: "OK",
                })

                fetch('https://server-six-wine.vercel.app/adminList')
                    .then(res => res.json())
                    .then(data => setListAdmin(data))
            })
    }

    useEffect(() => {
        fetch('https://server-six-wine.vercel.app/adminList')
            .then(res => res.json())
            .then(data => setListAdmin(data))
    })
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-9">
                    <h4 className='text-brand mt-5'>Admin</h4>
                    <div style={{ width: '100vh' }} className=' mt-5 d-flex justify-content-center'>
                        <form onSubmit={handleSubmit} className='w-75'>
                            <input className='form-control mb-4 ' type="text" required name='name' onChange={handleChange} placeholder='Full Name' />
                            <input className='form-control mb-4 ' type="email" required name='email' onChange={handleChange} placeholder='Email Address' />
                            <button className='btn-brand  mt-2' type='Submit'>Submit</button>
                        </form>
                    </div>


                    <div className='container'>
                        <table className='table mt-5 text-center'>
                            <thead style={{ background: 'orange' }}>
                                <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            {
                                listAdmin.map(listAdmin => <tbody>
                                    <tr>
                                        <td>{listAdmin.name}</td>
                                        <td>{listAdmin.email}</td>
                                        <td>
                                            <button className='btn-brand'>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>)
                            }
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddAdmin;