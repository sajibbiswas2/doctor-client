import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='text-center text-danger mt-5 pt-5'>
            <i style={{fontSize:'70px'}} class="fas fa-exclamation-triangle"></i>
            <h1>Not Found 404</h1>
            <Link to='/home'>Go To Home Page</Link>
            
        </div>
    );
};

export default NotFound;