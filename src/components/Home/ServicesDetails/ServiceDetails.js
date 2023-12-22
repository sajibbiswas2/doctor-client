import React from 'react';

const ServiceDetails = ({ service }) => {
    return (
        <div className='col-md-4 text-center'
            data-aos="flip-up"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="1000"
        >
            <img style={{ height: '60px' }} src={service.img} alt=""
                data-aos="zoom-in"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000"
            />
            <h5 className='mt-4 mb-4'>{service.name}</h5>
            <p className='text-secondary'>{service.description}</p>
        </div>
    );
};

export default ServiceDetails;