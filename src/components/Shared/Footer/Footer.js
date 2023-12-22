import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <section className='footer-container p-5 bd-highlight'

            data-aos="flip-left"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="1000"
        >
            <div className="row d-flex align-items-center ">
                <div className="col-md-3">
                    <ul className='footerList' >
                        <li><Link to='/'>Emargency Dental Care</Link></li>
                        <li><Link to='/'>Check Up</Link></li>
                        <li><Link to='/'>Treatment of Personal Diseases</Link></li>
                        <li><Link to='/'>Tooth Extraction</Link></li>
                        <li><Link to='/'>Check UP</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className='footerList'>
                        <h5 style={{ color: '#1cc7c1' }}>Services</h5>
                        <li><Link to='/'>Emargency Dental Care</Link></li>
                        <li><Link to='/'>Check Up</Link></li>
                        <li><Link to='/'>Treatment of Personal Diseases</Link></li>
                        <li><Link to='/'>Tooth Extraction</Link></li>
                        <li><Link to='/'>Check UP</Link></li>
                        <li><Link to='/'>Check UP</Link></li>
                        <li><Link to='/'>Check UP</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className='footerList'>
                        <h5 style={{ color: '#1cc7c1' }}>Oral Health</h5>
                        <li><Link to='/'>Emargency Dental Care</Link></li>
                        <li><Link to='/'>Check Up</Link></li>
                        <li><Link to='/'>Treatment of Personal Diseases</Link></li>
                        <li><Link to='/'>Tooth Extraction</Link></li>
                        <li><Link to='/'>Check UP</Link></li>
                        <li><Link to='/'>Check UP</Link></li>
                        <li><Link to='/'>Check UP</Link></li>

                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className='my-5 text-secondary'>
                        <h5 style={{ color: '#1cc7c1' }}>Our Address</h5>
                        <p>New York-101010 Hudson <br /> Yards</p>
                        <div className="social mb-5">
                            <span><i class="fa-brands fa-facebook"></i></span>
                            <span><i class="fa-brands fa-google-plus"></i></span>
                            <span><i class="fa-brands fa-square-twitter"></i></span>
                        </div>

                        <p>Call Now</p>
                        <button className='btn btn-primary'>+012345688</button>
                    </ul>
                </div>
            </div>
            <div className='d-flex justify-content-center' >
                <p>Copyright&copy; {(new Date().getFullYear())} All Rights Reserved</p>
            </div>
        </section>
    );
};

export default Footer;