import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addCourse } from '../../../Redux/Action/courseAction';
import { connect } from 'react-redux';
import loading from '../../../images/loading.gif';
import CourseCardChild from './CourseCardChild';
import './Courses.css';

const CourseCard = (props) => {
    // console.log(props);
    const { addCourse } = props;
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5005/courses')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setCourses(data)
                    // console.log('data',data)
                }
            })
    }, [])

    return (
        <section className="services-container my-5 py-5">
            <div className="text-center">
                <h2>Discover <span className="text-brand">Your Desired Course</span></h2>
            </div>
            <div className="d-flex justify-content-center my-5">
                <div className="row w-75">
                    {
                        courses.length === 0 ? <img className="mx-auto w-50" src={loading} alt="" /> : courses.map(course => <CourseCardChild course={course} addCourse={addCourse} key={course._id}></CourseCardChild >)
                    }
                </div>
            </div>
        </section>


        // <div className="pt-3">
        //     <div className="flex-column mb-3 text-center">
        //         <h2 style={{color:'rebeccaPurple'}}>Discover Your Desired Courses</h2>
        //     </div>
        //     <section className="text-center row w-75 m-auto ">
        //         {
        //             courses.length === 0 ? <img className="mx-auto w-50" src={loading} alt="" /> : courses.map(course => <CourseCardChild course={course} addCourse={addCourse} key={course._id}></CourseCardChild >)
        //         }
        //     </section>
        // </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);