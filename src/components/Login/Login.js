import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../images/login.png'
import Navbar from '../Shared/Navbar/Navbar';
import './Login.css'
import { initializeApp } from "firebase/app";
import firebaseConfig from '../../Firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { userContext } from '../../App';
import swal from 'sweetalert';
import Loading from '../Loading/Loading';
const app = initializeApp(firebaseConfig)
const auth = getAuth();
const Login = () => {

    const [newUser, setnewUser] = useState({
        signup: false,
        login: true
    })

    // user information state
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        phone: ''
    })

    const [loading, setLoading] = useState(false)

    // use context
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const history = useNavigate()
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSingup = () => {
        const newChange = { ...newUser }
        newChange.signup = true
        newChange.login = false
        setnewUser(newChange)
    }

    const handleregis = () => {
        const newChange = { ...newUser }
        newChange.signup = false
        newChange.login = true
        setnewUser(newChange)
    }
    //handle submit button 
    const handleSubmit = (e) => {
        e.preventDefault()
        // user new account create start
        if (newUser.signup && user.email && user.password && user.name) {
            const auth = getAuth();
            setLoading(true)
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((res) => {
                    // Signed in 
                    const user = res.user
                    console.log("my info", user);
                    setLoading(false)
                    // alert start
                    swal({
                        title: "Good job!",
                        text: "Account Create Successfull",
                        icon: "success",
                        button: "OK",
                    });
                    // alert end
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // alert start
                    setLoading(false)
                    swal({
                        title: "Please Try Again",
                        text: `${errorCode}`,
                        icon: "error",
                        button: "Close",
                    });
                    // alert end
                    // ..
                });
        }

        // user new account create end

        // user login account start
        if (newUser.login && user.email && user.password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((res) => {
                    // Signed in 
                    const user = res.user;
                    // ...
                    //const newUserInfo = { ...user }
                    setLoggedInUser(user);
                    storeAuthToken();
                    from && history(from.pathname);
                    // alert start
                    swal({
                        title: "Good job!",
                        text: "Account Login Successful",
                        icon: "success",
                        button: "OK",
                    });
                    // alert end
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error);
                    // alert start
                    setLoading(false)
                    swal({
                        title: "Worng",
                        text: `${errorCode}`,
                        icon: "error",
                        button: "Close",
                    });
                    // alert end
                });
        }

        // user login account End

        //loading........
        if (loggedInUser.email) {
            setLoading(false)
        }
        else {
            setLoading(true)
        }
    }

    // input user infromation handle 

    const handleChange = (e) => {
        let fieldvalid;
        if (e.target.name == 'email') {
            let isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            fieldvalid = isEmailValid;
        }

        if (e.target.name == 'password') {
            let passwordValid = e.target.value.length >= 6;
            fieldvalid = passwordValid;
        }

        if (e.target.name == 'name') {
            let nameValid = e.target.value.length >= 2;
            fieldvalid = nameValid;

        }
        if (e.target.name == 'phone') {
            let phoneValid = e.target.value.length >= 11;
            fieldvalid = phoneValid;

        }
        if (fieldvalid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const storeAuthToken = () => {
        getAuth(app).currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                // Send token to your backend via HTTPS
                sessionStorage.setItem('token', idToken)
                // ...
            })
            .catch(function (error) {
                // Handle error
            });
    }


    //  user save in the browser
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setLoggedInUser(user);
    //         } else {
    //             setLoggedInUser({})
    //         }
    //     });
    //     return () => unsubscribe;
    // }, [auth]);


    // password forgate or reset with email

    const handlePassReset = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, user.email)
            .then(() => {
                // Password reset email sent!
                alert("Check the email address and reset password")
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode)
                // ..
            });

    }

    return (
        <section>
            <Navbar></Navbar>
            {
                loading && <Loading></Loading>
            }

            {
                !loading && <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-5 text-center">
                            <h4 className='text-center mb-5'>{newUser.signup ? 'Registration' : 'Login'}</h4>
                            <form onSubmit={handleSubmit}
                                data-aos="zoom-in"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-duration="1000"
                            >
                                {
                                    newUser.signup && <input className='form-control mb-4 ' type="text" required name='name' onChange={handleChange} placeholder='Your Name' />
                                }
                                <input className='form-control mb-4 ' type="text" required name='email' onChange={handleChange} placeholder='Your Email' />
                                <input className='form-control mb-2 ' type="password" required name='password' onChange={handleChange} placeholder=' Password' />
                                {/* {
                                newUser.signup && <input className='form-control mb-2 ' type="confrmPassword" required name='password' onChange={handleChange} placeholder='Confrm Password' />
                            } */}
                                {
                                    !newUser.signup && <small onClick={() => handlePassReset()} > <Link style={{ color: 'red' }}>Forget Your Password</Link></small>
                                }
                                {/* <input className='form-control mb-4' type="Submit" /> */}
                                <button className=' btn-brand signIn text-center mb-2 mt-1' type='submit'>{newUser.signup ? 'Registration' : 'Login'}</button>
                                {/* <Link onClick={()=>handleSingup()}>{newUser.signup ? 'Login' : 'Create a Account'}</Link> */}

                                {
                                    !newUser.signup && <Link style={{ color: 'black' }} onClick={() => handleSingup()}>Create a Account</Link>
                                }

                                {
                                    !newUser.login && <Link style={{ color: 'black' }} onClick={() => handleregis()}>Login a Account</Link>
                                }
                            </form>
                        </div>
                        <div className="col-md-7"
                                data-aos="fade-left"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-duration="1000"
                        >
                            <img className='img-fluid' src={login} alt="" />
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default Login;