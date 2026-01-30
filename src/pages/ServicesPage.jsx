
import React from 'react';
import Navbar from '../components/Navbar';
import ServicesComponent from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage = () => {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <Navbar />

            <ServicesComponent />

            <Footer />
        </div>
    );
};

export default ServicesPage;
