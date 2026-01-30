
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Send, Instagram, MessageCircle } from 'lucide-react';

import { services } from '../constants/services';

const Footer = () => {
    const [showAllServices, setShowAllServices] = React.useState(false);

    return (
        <footer className="bg-[rgb(115,32,158)] text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/new_logo.png" alt="DigiGro Logo" className="h-12 w-auto drop-shadow-md" />
                            <span className="font-heading font-bold text-2xl text-white">DigiGro</span>
                        </div>
                        <p className="text-gray-400 font-body mb-6">
                            A Strategic Shield for Global Conference Growth. Empowering healthcare and nursing conferences with digital dominance.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-6 border-b-2 border-accent inline-block pb-2">Quick Links</h3>
                        <ul className="space-y-3 font-body text-gray-400">
                            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
                            <li><Link to="/collaboration" className="hover:text-accent transition-colors">Partner With Us</Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-6 border-b-2 border-accent inline-block pb-2">Services</h3>
                        <ul className="space-y-3 font-body text-gray-400">
                            {(showAllServices ? services : services.slice(0, 3)).map((service, index) => (
                                <li key={index}>
                                    <Link to={`/services/${service.slug}`} className="hover:text-accent transition-colors text-sm">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setShowAllServices(!showAllServices)}
                            className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent hover:text-white transition-colors focus:outline-none"
                        >
                            {showAllServices ? 'Show Less' : 'View More'}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform duration-200 ${showAllServices ? 'rotate-180' : ''}`}
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-6 border-b-2 border-accent inline-block pb-2">Contact Us</h3>
                        <ul className="space-y-4 font-body text-gray-400">
                            <li className="flex gap-3">
                                <span className="text-accent">📍</span>
                                <span>Mahaveer Radiance, 1st floor; Madhapur, Road No. 36, Jubilee Hills, Telangana 500081</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent">✉️</span>
                                <a href="mailto:contact@digigro.com" className="hover:text-white">contact@digigro.com</a>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent">📞</span>
                                <a href="tel:+919492117897" className="hover:text-white">+91 94921 17897</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-6 border-b-2 border-accent inline-block pb-2">Newsletter</h3>
                        <p className="text-gray-400 font-body mb-4">Subscribe for the latest updates and digital growth strategies.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1 bg-[#16A34A] text-white p-2 rounded-md hover:shadow-lg transition-all"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mt-12 mb-8">
                    <a href="https://www.facebook.com/profile.php?id=61582994789463" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white">
                        <Facebook size={18} />
                    </a>
                    <a href="https://x.com/digigro56062" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white">
                        <Twitter size={18} />
                    </a>
                    <a href="https://www.instagram.com/digigro_09/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white">
                        <Instagram size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/digi-gro-0b8936390/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white">
                        <Linkedin size={18} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCzPez16R4fY5NY__7xYNcZQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white">
                        <Youtube size={18} />
                    </a>
                    <a href="https://www.reddit.com/user/Digigro_09/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white">
                        <MessageCircle size={18} />
                    </a>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 font-body text-sm">
                    <p>© 2026 DigiGro — All Rights Reserved | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms & Conditions</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
