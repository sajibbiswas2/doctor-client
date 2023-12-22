import React from 'react';
import './InfoCard.css'
const InfoCard = ({ info }) => {
    return (
        <div className='col-md-4 text-white'
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-duration="1000"
        >
            <div className={`d-flex  align-items-center justify-content-center info-container info-${info.background}`}>
                <div className='info-icon'>
                    {info.icon}
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;