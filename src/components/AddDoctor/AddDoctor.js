import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import swal from 'sweetalert';
const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [ loading, setLoading] = useState(false)
    
    const handleChange = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)

    }



    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
        formData.append('phone', info.phone)
        fetch('https://server-six-wine.vercel.app/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                swal({
                    title: "Good job!",
                    text: "Submit Successfull",
                    icon: "success",
                    button: "OK",
                });
                setLoading(false)


            })
            .catch(error => {
                console.error(error)
            })

            setLoading(true)
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-9">
                    <form onSubmit={handleSubmit} className='container'>
                        <div class="mb-3">

                            <div className="form-group mt-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" placeholder=' Email' onChange={handleChange} name='email' />
                            </div>

                            <div className="form-group mt-3">
                                <label for="name" class="form-label"> Full Name</label>
                                <input type="text" class="form-control" placeholder=' Name' onChange={handleChange} name='name' />
                            </div>

                            <div className="form-group mt-3">
                                <label for="phone" class="form-label"> Phone Number</label>
                                <input type="number" class="form-control" placeholder=' Phone Number' onChange={handleChange} name='phone' />
                            </div>

                            <div className="form-group mt-3">
                                <label for="file" class="form-label"> Upload a Image</label>
                                <input type="file" class="form-control" placeholder=' file' onChange={handleFileChange} name='name' />
                            </div>

                        </div>


                        <button type="submit" class="btn btn-primary">Submit</button>
                        {
                            loading && <h1>loadding...</h1>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;