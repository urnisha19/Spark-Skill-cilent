import React from 'react';

const TotalEnrolledDetails = ({ enroll }) => {
    
    return (
        <tr>
            <td>{enroll.name}</td>
            <td>{enroll.email}</td>
            <td>{enroll.title}</td>
            <td>{enroll.price}</td>
        </tr>
    );
};

export default TotalEnrolledDetails;