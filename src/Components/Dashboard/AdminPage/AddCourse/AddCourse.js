import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../../../HomePage/Navbar/NavBar';
import AdminSideBar from '../../AdminPage/AdminSideBar/AdminSideBar';

const AddCourse = () => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    const history = useHistory();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.filesinfo[0];
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file)
        formData.append('title', info.title)
        formData.append('price', info.price)
        formData.append('duration', info.duration)
        formData.append('description', info.description)

        fetch('https://limitless-caverns-18914.herokuapp.com/admin/addCourse', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                history.replace('/');
                history.go(0);
            });
        e.preventDefault();
        alert('Course added successfully')
    }

    return (
        <div>
            <NavBar></NavBar>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-12 py-3"></div>
                        <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                            <h4 className="text-brand text-center">Add New Course</h4>
                            <div className="profile">
                                <h4>{JSON.parse(localStorage.getItem("name"))}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-3">
                            <AdminSideBar></AdminSideBar>
                        </div>
                        <div className="col-md-9 col-9 container p-4" style={{ backgroundColor: '#e6f3f8' }}>
                            {!isAdmin && <h4 className="text-danger">Sorry! You are not admin. </h4>}
                            {isAdmin &&
                                <form onSubmit={handleSubmit} className="py-5 px-4" style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Course Title</label>
                                            <input onBlur={handleBlur} name="title" className="form-control" type="text" placeholder="Enter title" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Duration</label>
                                            <input onBlur={handleBlur} name="duration" className="form-control" type="text" placeholder="Enter total hour" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Price</label>
                                            <input onBlur={handleBlur} name="price" className="form-control" type="number" placeholder="Price" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Description</label>
                                            <textarea name="description" onBlur={handleBlur} className="form-control" type="number" placeholder="Course Description" required />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Image</label><br />
                                        <input onChange={e => setFile(e.target.files[0])} type="file" name="file" required />
                                    </div>
                                    <div className="form-group d-flex justify-content-start p-3">
                                        <button type="submit" className="btn btn-success">Add Course</button>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddCourse;