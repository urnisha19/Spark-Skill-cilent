import React from 'react';
import ServiceDetails from './ServiceDetails';

const Service=[
    {id:1,img:"https://i.ibb.co/sKqZpz9/support.png",title:"24/7 Support",description:"Our mentors and support team is always ready to give you the best support."},{ id:2,img:"https://i.ibb.co/b6dw1P9/job.png",title:"Career Guide" ,description:"Our experts are always ready to to guide you the best path for your career after every course."},{id:3,img:"https://i.ibb.co/vq01tz3/trusted.png",title:"Trusted by thousands" ,description:"Above 3thousand students attained our various course and trusted by a community of thousands of users."}
]

const Services = () => {
    return (
        <section className="review-container my-5 py-5">
        <div className="text-center">
        <h2>Why Should You <span className="text-brand">Choose US</span></h2>
        </div>
        <div className="d-flex justify-content-center my-5">
            <div className="row w-75">
            {
                    Service.map(service => <ServiceDetails service={service} key={service.title}></ServiceDetails>)
                }
            </div>
        </div>
    </section>
    );
};

export default Services;