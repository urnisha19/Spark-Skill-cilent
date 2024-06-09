import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addCourse } from '../../../Redux/Action/courseAction';
import NavBar from '../Navbar/NavBar';
import './Courses.css';
import StudentSideBar from '../../Dashboard/StudentPage/StudentSideBar/StudentSideBar';
import { useHistory } from 'react-router';

const CourseDetailsEnroll = (props) => {
    const { addCourse, course } = props;
    const { image, title, duration, price, description } = props.course;

    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('title', title)
        formData.append('price', price)

        fetch('https://spark-skill-server.onrender.com/student/enroll', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                history.replace('/');
                history.go(0);
            })
        alert('Enrolled successfully')
    }

    return (
        <div>
            <NavBar></NavBar>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-12 py-3"></div>
                        <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                            <h4 className="text-brand text-center">Enroll Course</h4>
                            <div className="profile">
                                <h4>{localStorage.getItem('name')}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-3">
                            <StudentSideBar></StudentSideBar>
                        </div>
                        <div className="col-md-9 col-9 container p-4" style={{ backgroundColor: '#e6f3f8' }}>
                            <div className="row text-center">
                                <div className="course-detail" style={{ width: "100%" }}>
                                    <h4 className="mt-3">{title}</h4>
                                    <img className="w-25 mb-3" src={`data:image/png;base64,${image.img}`} alt="" />
                                    <h6>Total {duration} hours</h6>
                                    <h6>Fees: ${price}</h6>
                                    <div className="mt-3">
                                        <h6 >Details</h6>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                                    <div className="form-group">
                                        <input className='form-control' type="text" placeholder="full name" name="name" defaultValue={JSON.parse(localStorage.getItem("name"))} required ref={register} />
                                    </div>
                                    <div className="form-group">
                                        <input required ref={register} placeholder='Email address' defaultValue={JSON.parse(localStorage.getItem("email"))} className='form-control' type="email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <input required ref={register} placeholder='Title' defaultValue={title} className='form-control' type="text" name="title" />
                                    </div>
                                    <br />
                                    <div className="form-group text-center">
                                        <input type="submit" value="Request Enrollment" className="btn btn-primary mt-3" />
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

const mapStateToProps = state => {
    return {
        course: state.course
    }
}
const mapDispatchToProps = {
    addCourse: addCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsEnroll);