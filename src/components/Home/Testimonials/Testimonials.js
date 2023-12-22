import React from 'react';
import './Testimonials.css';
import wilson from '../../../images/people-1.png'
import Emma from '../../../images/people-2.png'
import Aliza from '../../../images/people-3.png'
import TestimonialsDetails from '../TestimonialsDetails/TestimonialsDetails';
const testimonialsData = [
    {
        quote: 'Lorem ipsum dolor sit amet, facilis ad minima quo error nobis, in totam illo magnam asperiores, dignissimos delectus, excepturi beatae veritatis! rerum facilis ad minima quo error nobis',
        name: 'Wilson',
        from: 'California',
        img: wilson
    },

    {
        quote: 'Lorem ipsum dolor sit amet, facilis ad minima quo error nobis, in totam illo magnam asperiores, dignissimos delectus, excepturi beatae veritatis! rerum facilis ad minima quo error nobis',
        name: 'Emma ghons',
        from: 'California',
        img: Emma
    },


    {
        quote: 'Lorem ipsum dolor sit ametm facilis ad minima quo error nobis, in totam illo magnam asperiores, dignissimos delectus, excepturi beatae veritatis! rerum facilis ad minima quo error nobis, ',
        name: 'Aliza Farari',
        from: 'California',
        img: Aliza
    },
]
const Testimonials = () => {
    return (
        <section className='mt-5 pt-5 mb-5 testimonials'>
            <div className="container">
                <div className="section-header"
                      data-aos="zoom-in"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-duration="1000"
                >
                    <h5 style={{color:'#1cc7c1'}}>TESTIMONIALS</h5>
                    <h1>What's Our Patients <br /> Says</h1>
                </div>

                <div className='d-flex justify-content-center'>
                    <div className="row w-70">
                        {
                            testimonialsData.map(testimonials => <TestimonialsDetails testimonials={testimonials}></TestimonialsDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;