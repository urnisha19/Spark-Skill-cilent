import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const CourseCardChild = (props) => {
    const { addCourse, course } = props;
    const { image, title, duration, price } = props.course;
    return (
        <div className="col-md-4 py-md-5 my-md-3 text-center rounded serviceDetail">
            <div>
                <img style={{ height: '80px' }} src={`data:image/png;base64,${image.img}`} alt="..." />
                <h4 className="my-3">{title}</h4>
                <h6>Total {duration} hours</h6>
                <p className="text-secondary">lorem dui sapien eget mi proin sed libero enim sed faucibus.</p>
                <h6 className="my-3">${price}</h6>
                <Link to='/student/enroll' >
                    <button className="btn text-white ml-4 " onClick={() => addCourse(course)
                    } type="button" id="button-addon2" style={{ backgroundColor: "#00AEEF", fontWeight: "bold" }}>View Details</button>
                </Link>
            </div>
        </div>
           

        // <div>
        //     <div className="card  " >
        //         <img src={`data:image/png;base64,${image.img}`} className="card-img-top" alt="..." />
        //         <div className="card-body">
        //             <h4 className="card-title">{title}</h4>
        //             <div className="row">
        //                 <div className="d-flex col-md-6"><p>{duration} total hours</p></div>
        //                 <h4 style={{ fontWeight: 'bolder', fontSize: "30px", color: "#275A53" }} className="mr-5">${price}</h4>
        //                 <Link  to='/student/enroll' >
        //                     <button className="btn text-white ml-4 " onClick={() => addCourse(course) 
        //                     } type="button" id="button-addon2" style={{ backgroundColor: "#275A53" }}>View Details</button>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default CourseCardChild;