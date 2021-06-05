import React from 'react';
import CourseCard from '../Courses/CourseCard';
import Footer from '../Footer/Footer';
import Service from '../Services/Service';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <CourseCard></CourseCard>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;