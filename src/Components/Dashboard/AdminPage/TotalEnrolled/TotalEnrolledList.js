import React, { useEffect, useState } from 'react';
import loading from '../../../../images/loading.gif';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import TotalEnrolledListDetails from './TotalEnrolledDetails';
import NavBar from '../../../HomePage/Navbar/NavBar';
import './TotalEnrolled.css';

const TotalEnrolledList = () => {
    const name = JSON.parse(localStorage.getItem("name"));
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

    const [totalTotalEnrolledList, setTotalTotalEnrolledList] = useState([]);
    useEffect(() => {
        fetch(`https://spark-skill-server.onrender.com/admin/enrolledList`)
            .then(res => res.json())
            .then(data => {
                setTotalTotalEnrolledList(data);
            })
    }, [])

    return (
        <section className="enroll-container">
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-12 py-3"></div>
                    <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4 className="text-brand">Total Enrollment List</h4>
                        <div className="profile">
                            <h4>
                                {name}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-2">
                        <AdminSideBar />
                    </div>
                    <div className="col-md-10 col-10 container p-4" style={{ backgroundColor: '#e6f3f8' }}>
                        <table className="table">
                            <thead style={{ backgroundColor: '#00AEEF', color: 'white' }}>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Course</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            {!isAdmin && <h4 className="text-danger">Sorry! You are not admin. </h4>}
                            {isAdmin &&
                                <tbody>
                                    {
                                        totalTotalEnrolledList.length === 0 && <div className="d-flex justify-content-center">
                                            <img src={loading} alt="loading" className="mt-3 w-25" />
                                        </div>
                                    }
                                    {
                                        totalTotalEnrolledList.map(enroll => <TotalEnrolledListDetails enroll={enroll} />)
                                    }
                                </tbody>
                            }
                        </table>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TotalEnrolledList;