import React from 'react'
import footerLogo from "../assets/footer-logo.png"
import { Link } from 'react-router-dom'

import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1 - About */}
                    <div>
                        <div className="mb-6">
                            <img src={footerLogo} alt="Books Heaven" className="w-36" />
                        </div>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            Books Heaven is your premier destination for books across all genres. 
                            Discover new authors, bestsellers, and rare finds all in one place.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                                <FaFacebook size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                    
                    {/* Column 2 - Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                                    <span className="mr-2">›</span> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/books" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                                    <span className="mr-2">›</span> Books
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                                    <span className="mr-2">›</span> About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Column 3 - Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/terms" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                                    <span className="mr-2">›</span> Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                                    <span className="mr-2">›</span> Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/copyright" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                                    <span className="mr-2">›</span> Copyright
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Column 4 - Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-gray-400 mr-3 mt-1" />
                                <span className="text-gray-400">Sunakothi-26, Lalitpur, Nepal</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="text-gray-400 mr-3" />
                                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors duration-300">+977 9849533661</a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="text-gray-400 mr-3" />
                                <a href="mailto:info@bookstore.com" className="text-gray-400 hover:text-white transition-colors duration-300">info@bookstore.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Newsletter Section */}
                <div className="border-t border-gray-800 pt-8 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h4 className="text-lg font-medium mb-2">Subscribe to Our Newsletter</h4>
                            <p className="text-gray-400 text-sm">Get the latest updates on new books and special offers</p>
                        </div>
                        <div className="w-full md:w-auto">
                            <form className="flex flex-col sm:flex-row gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <button 
                                    type="submit" 
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                
                {/* Copyright Section */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500">
                        &copy; {currentYear} Books Heaven. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                        All book covers and content are copyright of their respective publishers and authors.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer