import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './StudentSideBar.css';

const StudentSideBar = () => {
    return (
        <div className="sidebar d-flex flex-column">
            <Link to="/student/myEnrollment" className="py-1">
                <h6 className="d-inline  text-brand"><FontAwesomeIcon icon={faClipboardCheck} className="mr-2" />My Enrollment</h6>
            </Link>
            <Link to="/student/addReview" className="py-1">
                <h6 className="d-inline text-brand"><FontAwesomeIcon icon={faCommentAlt} className="mr-2"/> Add Review</h6>
            </Link>
        </div>
    );
};
export default StudentSideBar;