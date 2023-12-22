import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../../App';
import user from '../../../../images/user.png'
import Profile from '../Profile';
import './ParsonalInfo.css'
import swal from 'sweetalert';

const ParsonalInfo = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [profileInfo, SetProfileInfo] = useState({});
    const [profileLoad, setProfileLoad] = useState({});
    const [file, setFile] = useState(null);
    const handleChange = (e) => {
        const newProfile = { ...profileInfo }
        newProfile[e.target.name] = e.target.value
        SetProfileInfo(newProfile);
    }
    useEffect(() => {
        fetch('https://server-six-wine.vercel.app/profileInfo?email=' + loggedInUser.email, {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => setProfileLoad(data))
    }, [])

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleFile = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', profileInfo.name)
        formData.append('HomeAddress', profileInfo.HomeAddress)
        formData.append('birth', profileInfo.birth)
        formData.append('blood', profileInfo.blood)
        formData.append('email', loggedInUser.email)

        fetch('https://server-six-wine.vercel.app/profile', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {

                swal({
                    title: "Good job!",
                    text: "Profile Saved Successfull",
                    icon: "success",
                    button: "OK",
                });
                fetch('https://server-six-wine.vercel.app/profileInfo?email=' + loggedInUser.email, {
                    method: 'GET',
                    headers: { 'content-type': 'application/json' }
                })
                    .then(res => res.json())
                    .then(data => setProfileLoad(data))
            })
            .catch(error => {
                swal({
                    title: "Worng",
                    text: `${error}`,
                    icon: "error",
                    button: "OK",
                });
            })

    }
    return (
        <div className='d-flex justify-content-center flex-column mb-5'>
            <img className='profilePhoto mt-5' src={`https://server-six-wine.vercel.app/${profileLoad.img}`} alt="" />
            <div className='mt-5 d-flex justify-content-center'>
                <form onSubmit={handleFile} className='w-75'>
                    <input className='form-control mb-4 ' type="text" onChange={handleChange} required name='name' defaultValue={profileLoad.name} placeholder='Full Name' />
                    <input className='form-control mb-4 ' type="email" required name='email' disabled defaultValue={loggedInUser.email} placeholder='Email Address' />
                    <input className='form-control mb-4 ' type="text" onChange={handleChange} required name='HomeAddress' defaultValue={profileLoad.HomeAddress} placeholder=' Home Address' />
                    <input className='form-control mb-4 ' type="text" onChange={handleChange} required name='cuntry' disabled defaultValue='Bangladesh' />
                    <input className='form-control mb-4 ' type="text" onChange={handleChange} required name='birth' defaultValue={profileLoad.birth} placeholder=' Date of birth ( 22-5-1995 )' />

                    {
                        !profileLoad.blood ? <select class="form-select" aria-label="Default select example" name='blood' defaultValue={profileLoad.blood} onChange={handleChange}>
                            <option selected>Selec Your Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select> : <div className="form-group mt-3">
                            <label for="blood" class="form-label"> Blood</label>
                            <input className='form-control mb-4 ' type="text" name='blood' defaultValue={profileLoad.blood} />
                        </div>
                    }

                    {
                        !profileLoad.img && <div className="form-group mt-3">
                            <label for="file" class="form-label"> Upload a Image</label>
                            <input type="file" class="form-control" onChange={handleFileChange} placeholder=' file' name='photo' />
                        </div>
                    }
                    {
                        !profileLoad.email && <button className='btn-brand w-75  m-auto  mt-4' type='Submit'> SAVE PROFILE </button>
                    }
                </form>

            </div>
        </div>
    );
};

export default ParsonalInfo;