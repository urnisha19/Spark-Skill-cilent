import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const AddCourse = () => {
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

        fetch('http://localhost:5010/admin/addCourse', {
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
        <h3 className="mt-5">Add Course</h3>
        <div className="order-box p-5 mt-5">
            <form onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Course Title</label>
                            <input onBlur={handleBlur} name="title" className="form-control" type="text" placeholder="Enter title" required/>
                        </div>
                        <div className="form-group">
                            <label>Duration</label>
                            <input onBlur={handleBlur} name="duration" className="form-control" type="text" placeholder="Enter total hour" required/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Price</label>
                            <input onBlur={handleBlur} name="price" className="form-control" type="number" placeholder="Price" required/>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea name="description" onBlur={handleBlur}  className="form-control" type="number" placeholder="Course Description" required/>
                        </div>
                        <div className="form-group">
                            <label>Image</label><br />
                            <input  onChange={e => setFile(e.target.files[0])} type="file" name="file" required/>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn text-white" style={{ backgroundColor: "#275A53" }}>Add</button>
            </form>
        </div>
    </div>


        // <div>
        //     <h3 className="mt-5">Add Course</h3>
        //     <div className="order-box p-5 mt-5">
        //         <form onSubmit={handleSubmit}>

        //             <div className="row">
        //                 <div className="col-md-6">
        //                     <div className="form-group">
        //                         <label>Course Title</label>
        //                         <input onBlur={handleBlur} name="title" className="form-control" type="text" placeholder="Enter title" required/>
        //                     </div>
        //                     <div className="form-group">
        //                         <label>Duration</label>
        //                         <input onBlur={handleBlur} name="duration" className="form-control" type="text" placeholder="Enter total hour" required/>
        //                     </div>
        //                 </div>

        //                 <div className="col-md-6">
        //                     <div className="form-group">
        //                         <label>Price</label>
        //                         <input onBlur={handleBlur} name="price" className="form-control" type="number" placeholder="Price" required/>
        //                     </div>
        //                     <div className="form-group">
        //                         <label>Description</label>
        //                         <textarea name="description" onBlur={handleBlur}  className="form-control" type="number" placeholder="Course Description" required/>
        //                     </div>
        //                     <div className="form-group">
        //                         <label>Image</label><br />
        //                         <input  onChange={e => setFile(e.target.files[0])} type="file" name="file" required/>
        //                     </div>
        //                 </div>
        //             </div>

        //             <button type="submit" className="btn text-white" style={{ backgroundColor: "#275A53" }}>Add</button>
        //         </form>
        //     </div>
        // </div>
    );
};

export default AddCourse;