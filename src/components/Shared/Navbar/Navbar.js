import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Navbar.css'
import { getAuth, signOut } from "firebase/auth";
import * as Scroll from 'react-scroll';

const Navbar = () => {
    let Scrols = Scroll.Link;
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [isAdmin, setIsAdmin] = useState(false)
    const handlelogut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("sign-out Successful")
            window.location.reload(false);
        }).catch((error) => {
            // An error happened.
        });
    }

    // is admin
    useEffect(() => {
        fetch('https://server-six-wine.vercel.app/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])


    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navs-wraper menu-container" id="navbarScroll">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/home'>  <a className="nav-link me-4 active" aria-current="page" href="#">Home</a></Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link me-4 active" aria-current="page" href="#">About</a>
                        </li>

                        <li className="nav-item">
                        <Scrols to='testimonials' smooth={true} duration={500}><a className="nav-link me-4 active" aria-current="page" href="#">Testimonials</a></Scrols>
                        </li>

                        <li className="nav-item">
                            <Scrols to='blog' smooth={true} duration={500}><a className="nav-link me-4 active" aria-current="page" href="#">Blog</a></Scrols>
                        </li>

                        <li className="nav-item">
                            <Scrols to='contacts' smooth={true} duration={500}><a className="nav-link me-4 active" aria-current="page" href="#">Contact us</a></Scrols>
                        </li>


                        <li className="nav-item">

                            {
                                isAdmin && <Link to='/dashboardMain'>  <a className="nav-link me-4 active " aria-current="page" href="#">Admin Dashboard</a></Link>
                            }
                        </li>

                        <li className="nav-item">

                            {
                                loggedInUser.email && <Link to='/profile'>  <a className="nav-link me-4 active " aria-current="page" href="#">My Account</a></Link>
                            }
                        </li>

                        <li className="nav-item">
                            {
                                !loggedInUser.email && <Link to='/login'>  <a className="nav-link me-4 active" aria-current="page" href="#">Login</a></Link>

                            }
                            {
                                loggedInUser.email && <Link onClick={() => { handlelogut() }} className="nav-link me-4 active" aria-current="page">Logout</Link>
                            }

                            {/* <Link onClick={() =>{handlelogut()}} className="nav-link me-4 active" aria-current="page">Logout</Link> */}

                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;