import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Contact.css'
const Contact = () => {
    return (
        <section className='contact-container contacts '
            data-aos="flip-up"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="1000"
        >
            <div className='text-center mt-5 p-5'>
                <h4 style={{ color: '#1cc7c1' }}>CONTACT US</h4>
                <h1>Always Connect with us</h1>
            </div>
            <div className="from-container w-50 text-center m-auto mt-3">
                <form>
                    <div class="mb-3">
                        <input type="email" placeholder='Email Address*' required className="form-control bg-white p-3" />
                    </div>

                    <div class="mb-3">
                        <input type="email" placeholder='Subject*' required className="form-control bg-white p-3" />
                    </div>

                    <div class="mb-3">
                        <textarea type="email" placeholder='Your Message*' required className="form-control bg-white p-5" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;