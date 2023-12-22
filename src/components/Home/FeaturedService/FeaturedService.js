import React from 'react';
import treatment from '../../../images/treatment.png'
const FeaturedService = () => {
    return (
        <section className='my-5 pt-5 pb-5'>
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5"
                        data-aos="flip-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <img className='img-fluid' src={treatment} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center"
                    >
                        <h1
                            data-aos="fade-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >Exceptional Dental <br /> Care, on Your Terms</h1>

                        <p className=' text-secondary my-5'
                            data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi inventore nisi sint adipisci. Veniam ipsum praesentium accusamus consectetur reprehenderit impedit asperiores, illum nemo unde eaque dolores illo magni rerum fugiat porro quod iusto minima quia, nisi nam quae quasi dignissimos beatae? Laborum enim sapiente ad recusandae, ipsum neque esse nihil? nisi nam quae quasi dignissimos beatae? Laborum enim sapiente ad recusandae, ipsum neque esse nihil?</p>
                        <button className='btn btn-primary '>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;