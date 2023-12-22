import React from 'react';
import ParsonalInfo from './ParsonalInfo/ParsonalInfo';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
import UserAppointments from './UserAppointments/UserAppointments';

const Profile = () => {
    return (
        <div className='row'
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="500"
        >
            <div className="col-md-3">
                <ProfileSidebar></ProfileSidebar>
            </div>

            <div className="col-md-9">
                <ParsonalInfo></ParsonalInfo>
            </div>
        </div>
    );
};

export default Profile;