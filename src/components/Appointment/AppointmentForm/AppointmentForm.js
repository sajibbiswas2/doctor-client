import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import './AppointmentForm.css'
import swal from 'sweetalert';
import { userContext } from '../../../App';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const [appointment, setAppointment] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleChange = (e) => {
        const newAppoint = { ...appointment }
        newAppoint[e.target.name] = e.target.value
        setAppointment(newAppoint)
    }
    const handleSubmit = e => {
        appointment.service = appointmentOn;
        appointment.email = loggedInUser.email
        appointment.date = date;
        appointment.create = new Date();
        fetch('https://server-six-wine.vercel.app/addAppointments', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                closeModal();
                swal({
                    title: "Good job!",
                    text: "Appointment Successfull",
                    icon: "success",
                    button: "OK",
                });
            })
        e.preventDefault()
    };
    return (
        <div className='modal-container'>
            <Modal

                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h5 className='text-brand text-center'>{appointmentOn}</h5>
                <p>{date.toDateString()}</p>
                <form onSubmit={handleSubmit} className='p-5 form-container'>
                    <div class="form-group">

                        <input class="form-control" type="text" name='name' onChange={handleChange} defaultValue={loggedInUser.name} placeholder='Your Name' />
                        <input class="form-control" type="number" name='phone' onChange={handleChange} placeholder='Phone Number' />
                        {/* <input class="form-control" type="email" name='email' onChange={handleChange}  defaultValue={loggedInUser.email}  placeholder='Email' /> */}
                        <input class="form-control" type="number" name='height' onChange={handleChange} placeholder='Height' />
                        <input class="form-control" type="number" name='weight' onChange={handleChange} placeholder='Weight' />
                        <select name='gender' onChange={handleChange} class="form-control mb-5" id="sel1">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        {/* <input className='btn-brand' type="submit" value='Send' /> */}
                        <button type='submit' className='btn-brand pe-5 ps-5 m-2'>Send</button>
                        <button className='btn-brand' onClick={closeModal}>close</button>

                    </div>

                </form>

            </Modal>
        </div>
    );
};

export default AppointmentForm;