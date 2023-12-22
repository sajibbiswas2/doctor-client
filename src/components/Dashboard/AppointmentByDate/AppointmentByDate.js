import React from 'react';
import './AppointmentByDate.css';
const AppointmentByDate = ({ appointments, selectedDate }) => {
    return (
        <div className='appointmentByDate-Container'>

            <div className="row">
                <div className="col-6">
                    <h6 className='mt-3 mb-5 pb5'>Appointments</h6>

                </div>
                <div className="col-6">
                    <h6 className='mt-3 mb-5 pb5'>{selectedDate.toDateString()}</h6>
                </div>
            </div>

            {
                appointments.length <= 0 && <div class="alert alert-danger  d-flex align-items-center" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <div>
                        No Appointments For This Date
                    </div>
                </div>
            }
            <table className="  table table-hover ">
                {
                    appointments.length > 0 && <thead>
                        <tr style={{ backgroundColor: '#0FCFE8' }} className='text-secondary'>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                }



                {
                    appointments.map(appoint => <tbody key={appoint._id}>
                        <tr>
                            <td>{appoint.name}</td>
                            <td>{appoint.phone}</td>
                            <td>
                                <select class="form-select btn" >
                                    <option selected>No Visited</option>
                                    <option value='1' >Visited</option>
                                </select>
                            </td>
                        </tr>

                    </tbody>)
                }
            </table>
        </div>
    );
};

export default AppointmentByDate;