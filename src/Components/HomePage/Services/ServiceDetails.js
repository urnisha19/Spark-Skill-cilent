import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({ service }) => {

    return (
        <div className="col-md-4 py-md-3 my-md-3 my-2 ">
            <div className="rounded serviceDetail">
                <div className="d-flex align-items-center mt-2">
                    <img className="img-fluid mx-3" src={service.img} alt="serviceImage" width="60" />
                    <div>
                        <h6 className="font-weight-bold">{service.title}</h6>
                    </div>
                </div>
                <div className="serviceDetail-text p-3">
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;