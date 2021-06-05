import React, { useEffect, useState } from 'react';
import loading from '../../../../images/loading.gif';
import enrollImg from '../../../../images/booking.png';
import NavBar from '../../../HomePage/Navbar/NavBar';
import StudentSideBar from '../StudentSideBar/StudentSideBar';
import './MyEnrollment.css';

const MyEnrollment = () => {
    const name = JSON.parse(localStorage.getItem("name"));
    const email = JSON.parse(localStorage.getItem("email"));
    const [MyEnrollmentData, setMyEnrollmentData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5010/enrolled?email=' + email)
            .then(res => res.json())
            .then(data => {
                setMyEnrollmentData(data);
            })
    }, [email])

    return (
        <section className="enroll-container">
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12 py-3"></div>
                    <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4 className="text-brand">My Enrollment</h4>
                        <div className="profile">
                            <h4>{name}</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-3">
                        <StudentSideBar></StudentSideBar>
                    </div>
                    <div className="col-md-9 col-9 container p-4" style={{ backgroundColor: '#e6f3f8' }}>
                        <div className="row d-flex justify-content-between enroll-card">
                            {
                                MyEnrollmentData.length === 0 && 
                                <div className="text-center">
                                    <h4 style={{ color: "#00AEEF" }}>You have no enrolls!</h4>
                                    <img src={loading} alt="loading" className="mt-3 w-25" />
                                </div>
                            }
                            {
                                MyEnrollmentData.map(course =>
                                    <div className="card col-md-5 my-2" key={course._id}>
                                        <div className="card-header d-flex justify-content-between">
                                            <img className="img-fluid" src={enrollImg} alt="courseImage" width="60" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-text font-weight-bold">{course.title}</h5>
                                            <h6 className="card-text">${course.price}</h6>
                                            <h6 className="card-text">Course Id: {course._id}</h6>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyEnrollment;