import React from 'react';

const BlogDetails = ({ blog }) => {
    return (
        <div className='col-md-4 my-5 blog-Card'>

            <div className='d-flex  mt-5'>
                <img style={{ width: '50px', height: '50px' }} src={blog.authorImg} alt="" />
                <div className='ms-2'
                    data-aos="flip-up"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-duration="1000"
                >
                    <h5 style={{ color: '#1cc7c1' }}>{blog.author}</h5>
                    <p>{blog.date}</p>
                </div>
            </div>

            <h5
                data-aos="flip-up"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-duration="1000"
            >{blog.title}</h5>
            <p className='text-secondary'
                data-aos="zoom-in-left"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-duration="1000"
            >{blog.description}</p>
            <div>

            </div>
        </div>
    );
};

export default BlogDetails;