import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import NavBar from '../../../HomePage/Navbar/NavBar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const MakeAdmin = () => {
    const name = JSON.parse(localStorage.getItem("name"));
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

    const history = useHistory();
    const [info, setInfo] = useState({});
    const { register, handleSubmit, errors } = useForm();

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const onSubmit = (e) => {
        const formData = new FormData();
        formData.append('email', info.email);

        fetch('https://limitless-caverns-18914.herokuapp.com/admin/makeAdmin', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                history.replace('/');
                history.go(0);
            });
        e.preventDefault();
        alert('Admin added successfully')
    }

    return (
        <section className="add-admin">
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-12 py-3"></div>
                    <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4 className="text-brand">Make Admin</h4>
                        <div className="profile">
                            <h4>{name}</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-2">
                        <AdminSideBar />
                    </div>
                    <div className="col-md-10 col-10 container p-4" style={{ backgroundColor: '#e6f3f8' }}>
                        {!isAdmin && <h4 className="text-danger">Sorry! You are not admin. </h4>}
                        {isAdmin &&
                            <form onSubmit={handleSubmit(onSubmit)} className="form-row py-5 px-4" id="myForm" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input onBlur={handleBlur} type="email" name="email" placeholder="admin@gmail.com" className="form-control" ref={register({ required: true })} />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group col-md-6" style={{ paddingTop: '31px' }}>
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;