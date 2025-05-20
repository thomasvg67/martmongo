import React from 'react';
import News from '../components/News';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <News />
            <GetInTouch />
            <Footer />
        </div>
    );
};

export default About;
