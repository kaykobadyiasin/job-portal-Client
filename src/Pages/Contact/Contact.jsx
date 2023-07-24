import React from 'react';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content my-40 flex-col gap-10 lg:flex-row-reverse text-center  container mx-auto">
                    <div className="text-center lg:text-left lg:w-7/12">
                        <h1 className="text-5xl font-bold">Contact now!</h1>
                        <p className="py-6">Please enter your name, contact email and your contact message. Contact my phone or email.</p>
                        <div className='hero-content grid lg:grid-cols-3 gap-10'>
                            <div className='w-full leading-8'>
                                <span className="footer-title flex items-center gap-3"><FaLocationDot></FaLocationDot> Address</span>
                                <ul>
                                    <li><a className="link link-hover">Dhaka Mohammadpur</a></li>
                                </ul>
                            </div>
                            <div className='w-full leading-8'>
                            <span className="footer-title flex items-center gap-3"><FaPhone></FaPhone> Phone</span>
                                <ul>
                                    <li><a className="link link-hover">Phone: +8801706084806</a></li>
                                </ul>
                            </div>
                            <div className='w-full leading-8'>
                            <span className="footer-title flex items-center gap-3"><FaEnvelope></FaEnvelope> Email</span>
                                <ul>
                                    <li><a className="link link-hover">kaykobadyiasin@gmail.com</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name*</span>
                                </label>
                                <input type="text" placeholder="Your Name" required className="input input-bordered text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input type="text" placeholder="email" required className="input input-bordered text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message*</span>
                                </label>
                                <textarea placeholder="Write Your Message..." className="textarea text-black textarea-bordered textarea-lg w-full max-w-xs" required ></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn text-white bg-[#60A5FA] border-2 border-transparent hover:bg-transparent hover:border-[#60A5FA] hover:text-black">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;