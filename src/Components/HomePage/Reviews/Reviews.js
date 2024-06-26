import React, { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';
import loading from '../../../images/loading.gif';

const Reviews = () => {
    const [reviewData, setReviewData] = useState([]);
    useEffect(() => {
        fetch(`https://spark-skill-server.onrender.com/review`)
            .then(res => res.json())
            .then(data => {
                setReviewData(data);
            })
    }, [])

    return (
        <section className="review-container my-5 py-5">
            <div className="text-center">
                <h2>Our Students <span className="text-brand">Review</span></h2>
            </div>
            <div className="d-flex justify-content-center my-5">
                <div className="row w-75">
                    {
                        reviewData.length === 0 && <img src={loading} alt="loading" className="mx-auto w-50" />
                    }
                    {
                        reviewData.map(review => <ReviewDetail key={review._id} review={review}></ReviewDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;