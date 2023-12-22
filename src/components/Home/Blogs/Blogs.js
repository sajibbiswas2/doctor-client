import React from 'react';
import './Blogs.css'
import woshon from '../../../images/people-1.png'
import jhon from '../../../images/people-2.png'
import coudi from '../../../images/people-3.png'
import BlogDetails from '../BlogDetails/BlogDetails';
const blogData = [
    {
        title: 'Check at last a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet  tempora aut tenetur, lorem ipsum culpa, nihil in autem!',
        author: 'Dr. Woshon',
        authorImg: woshon,
        date: '23 April 2022'
    },

    {
        title: 'tow times of bursh in a day  can  keep your healthy',
        description: 'Lorem ipsum dolor sit amet  tempora aut tenetur, lorem ipsum culpa, nihil in autem!',
        author: 'Dr. jhon metica',
        authorImg: jhon,
        date: '23 April 2022'
    },

    {
        title: 'The tooth cancer is taking  a challange',
        description: 'Lorem ipsum dolor sit amet  tempora aut tenetur, lorem ipsum culpa, nihil in autem!',
        author: 'Dr. coudi',
        authorImg: coudi,
        date: '23 April 2022'
    },
]
const Blogs = () => {
    return (
        <section className='blog-container blog'>
            <div className="container">
                <div className="section-header text-center mb-3"
                      data-aos="zoom-in"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-duration="1000"
                >
                    <h5 style={{color:'#1cc7c1'}}>OUR BLOG</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className="row w-72">
                        {
                            blogData.map(blog => <BlogDetails blog={blog}></BlogDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;