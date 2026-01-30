
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Industries from '../components/Industries';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <Navbar />
            <Hero />
            <About isHome={true} />
            <Services isHome={true} />
            <Industries />
            <Contact isHome={true} />
            <Footer />
        </div>
    );
};

export default Home;
