import React from 'react';
import CourseCard from '../Courses/CourseCard';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    
    return (
        <div>
            <TopBanner></TopBanner>
            <CourseCard></CourseCard>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;