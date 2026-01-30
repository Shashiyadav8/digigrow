
import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = ({ isHome = false }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            await axios.post(`${apiUrl}/contact`, formData);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const contactCards = [
        {
            title: "Canada Presence",
            address: "Vancouver, Canada",
            phone: "+1 757 656 7778",
            email: "helix@helixsynergycorp.org"
        },
        {
            title: "India Presence",
            address: "Mahaveer Radiance, 1st floor; Madhapur, Road No. 36, Jubilee Hills, Telangana 500081",
            phone: "+91 94921 17897",
            email: "hello@helixsynergycorp.org"
        }
    ];

    return (
        <div className="w-full bg-[#EFF6FF]">
            {/* SECTION 1: Contact Info Cards */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header (Only show if isHome is true, otherwise the page header handles it) */}
                {isHome && (
                    <div className="text-center mb-16">
                        <span className="text-[#16A34A] font-bold tracking-wider uppercase text-sm mb-3 block">FIND US</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">Contact Info</h1>
                    </div>
                )}
                {!isHome && (
                    <div className="text-center mb-16">
                        <span className="text-[#155EEF] font-bold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">We'd Love to Hear From You</h2>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {contactCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-100 group"
                        >
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-[#155EEF] mb-6 group-hover:bg-[#155EEF] group-hover:text-white transition-colors duration-300">
                                {index === 0 && <span className="text-2xl">📍</span>}
                                {index === 1 && <span className="text-2xl">🏢</span>}
                            </div>
                            <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">{card.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 min-h-[40px]">
                                {card.address}
                            </p>
                            <div className="space-y-2 border-t border-gray-100 pt-6">
                                <p className="font-bold text-gray-800 hover:text-[#155EEF] transition-colors">{card.phone}</p>
                                <a href={`mailto:${card.email}`} className="block text-[#16A34A] font-medium hover:underline">{card.email}</a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {isHome && (
                    <div className="mt-16 text-center">
                        <a href="/contact" className="inline-block px-10 py-4 bg-[#16A34A] text-white font-bold rounded-full shadow-lg hover:bg-[#155EEF] transition-colors uppercase tracking-wider hover:shadow-xl transform hover:-translate-y-0.5">
                            Contact Us Details
                        </a>
                    </div>
                )}
            </section>

            {/* SECTION 2: Contact Form */}
            {!isHome && (
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">

                            {/* Form Side */}
                            <div className="flex-1 p-8 md:p-12 lg:p-16">
                                <h3 className="text-3xl font-bold font-heading text-gray-900 mb-2">Send us a Message</h3>
                                <p className="text-gray-500 mb-10">Fill out the form below and we'll get back to you within 24 hours.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#155EEF]/50 focus:border-[#155EEF] transition-all text-gray-900 placeholder-gray-400"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#155EEF]/50 focus:border-[#155EEF] transition-all text-gray-900 placeholder-gray-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#155EEF]/50 focus:border-[#155EEF] transition-all text-gray-900 placeholder-gray-400"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="How can we help?"
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#155EEF]/50 focus:border-[#155EEF] transition-all text-gray-900 placeholder-gray-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project..."
                                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#155EEF]/50 focus:border-[#155EEF] transition-all resize-none text-gray-900 placeholder-gray-400"
                                        ></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#155EEF] to-[#2563EB] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                                        >
                                            {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
                                            {!status.includes('submitting') && <Send size={18} />}
                                        </button>
                                    </div>

                                    {status === 'success' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 text-[#16A34A] rounded-xl flex items-center gap-3 border border-green-100">
                                            <CheckCircle size={24} />
                                            <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                                        </motion.div>
                                    )}
                                    {status === 'error' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 border border-red-100">
                                            <AlertCircle size={24} />
                                            <span className="font-medium">Something went wrong. Please try again later.</span>
                                        </motion.div>
                                    )}
                                </form>
                            </div>

                            {/* Info Side (Desktop only visual) */}
                            <div className="hidden lg:block w-1/3 bg-[#0F172A] relative overflow-hidden p-12 text-white">
                                <div className="absolute inset-0 opacity-20 bg-[url('/digital-marketing-wheel.png')] bg-cover bg-center"></div>
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-bold font-heading mb-6">Let's build something great together.</h4>
                                        <p className="text-blue-200 leading-relaxed mb-8">
                                            Whether you have a question, a project idea, or just want to say hello, we're here to help you grow.
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                                <span className="text-xl">📞</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-white">Call Us</p>
                                                <p className="text-blue-200 text-sm">+91 94921 17897</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                                <span className="text-xl">✉️</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-white">Email Us</p>
                                                <p className="text-blue-200 text-sm">contact@digigro.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* SECTION 3: Google Map */}
            {!isHome && (
                <div className="w-full h-[500px] relative grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.628236556408!2d-122.08374688469227!3d37.42199997982517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1615394247849!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    >
                    </iframe>
                    {/* Map Overlay for better text contrast if needed, or just style */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-white/10 to-transparent"></div>
                </div>
            )}
        </div>
    );
};

export default Contact;
