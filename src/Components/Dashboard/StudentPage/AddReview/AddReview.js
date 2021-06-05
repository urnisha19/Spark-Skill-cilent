import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {useHistory } from 'react-router-dom';
import NavBar from '../../../../Components/HomePage/Navbar/NavBar'
import StudentSideBar from '../StudentSideBar/StudentSideBar';

const AddReview = () => {
    const name = JSON.parse(localStorage.getItem("name"));
    const photoURL = JSON.parse(localStorage.getItem("photoURL"));

    const history = useHistory();
    const { errors } = useForm();
    const [addReviewInfo, setAddReviewInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...addReviewInfo };
        newInfo[e.target.name] = e.target.value;
        setAddReviewInfo(newInfo);
    }
    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('companyName', addReviewInfo.companyName);
        formData.append('description', addReviewInfo.description);
        formData.append('img', photoURL);
        fetch('https://limitless-caverns-18914.herokuapp.com/student/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history.replace('/');
                history.go(0);
            })
        e.preventDefault();
        alert("Review added successfully!");
    }
    
    return (
        <section>
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12 py-3"></div>
                    <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4 className="text-brand">Add Review</h4>
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
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input name="name" type="text" value={name} placeholder="Name" className="form-control" required="true" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} name="companyName" placeholder="Company’s name, Designation" className="form-control" required="true" />
                                {errors.companyName && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea onBlur={handleBlur} name="description" placeholder="Description" className="form-control" required="true" rows="3"></textarea>
                                {errors.description && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success mt-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;