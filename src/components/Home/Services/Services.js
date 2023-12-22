import React from 'react';
import './Services.css'
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetails from '../ServicesDetails/ServiceDetails';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, exercitationem.'

    },

    {
        name: 'Cavity Filling',
        img: cavity,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, exercitationem.'

    },

    {
        name: 'Teeth Whitening',
        img: whitening,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, exercitationem.'

    }
]
const Services = () => {
    return (
        <section>
            <div className='text-center services-container'
                   data-aos="flip-left"
                   data-aos-easing="ease-out-cubic"
                   data-aos-duration="2000">
                <h5>OUR SERVICES</h5>
                <h2>Service We Provide</h2>
            </div>

            <div className='d-flex justify-content-center'>
                <div className='row w-75 mt-5 pt-5'>
                    {
                        servicesData.map(service=> <ServiceDetails service = {service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;