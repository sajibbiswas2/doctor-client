import React from 'react';
import { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Notice = () => {
    const [notice, setNotice] = useState({});
    const handleChange = (e) => {
        const newNotice = { ...notice };
        newNotice[e.target.name] = e.target.value
        setNotice(newNotice)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
     console.log(notice);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-9">
                    <h3 className='text-brand mt-5'>Notice </h3>
                    <div className='mt-5 container'>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <input type="text" placeholder='Title' name='title' onChange={handleChange} required className="form-control bg-white p-3" />
                            </div>

                            <div class="mb-3">
                                <textarea type="email" placeholder='Description' name='description' onChange={handleChange} required className="form-control bg-white p-5" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>   
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notice;