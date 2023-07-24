import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className='bg-[#1F2937] h-40 flex justify-center items-center'>
                <h2 className='font-bold text-3xl text-white'>About Us</h2>
            </div>
            <div className="hero  py-10">
                <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
                    <div>
                        <img src="https://i.ibb.co/qMYXKgT/faizur-rehman-p-HPzd-EHN6-Os-unsplash.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold text-[#60A5FA]">16k+ Skilled person are <br /> getting jobs</h1>
                        <p className="py-6">You can job post or apply. post or Apply for job click Apply job button <br /> home page scroll down and select job apply or poster option.</p>
                        <Link to='/' className="btn bg-[#60A5FA] text-white hover:bg-transparent border-2 hover:text-[#1F2937] hover:border-[#60A5FA]">Apply Job</Link>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto my-10'>
                <Marquee speed={200} pauseOnHover={true}>
                    <div className='flex items-center gap-20'>
                        <div className='tooltip tooltip-right tooltip-primary' data-tip="BrainStation"><img className='w-[300px] h-full' src="https://i.ibb.co/TrQpQXT/6.png" alt="" /></div>
                        <div className='tooltip tooltip-right tooltip-primary' data-tip="MicroSoft"><img className='w-[300px] h-full' src="https://i.ibb.co/ThS3SzB/5.png" alt="" /></div>
                        <div className='tooltip tooltip-right tooltip-primary' data-tip="Google"><img className='w-[100px] h-full' src="https://i.ibb.co/3f0mLNN/4.png" alt="" /></div>
                        <div className='tooltip tooltip-right tooltip-primary' data-tip="Gucci"><img className='w-[100px] h-full' src="https://i.ibb.co/FXmkvkK/3.png" alt="" /></div>
                        <div className='tooltip tooltip-right tooltip-primary' data-tip="McDonalds"><img className='w-[100px] h-full' src="https://i.ibb.co/KL6Nmmx/1.png" alt="" /></div>
                        <div className='tooltip tooltip-right tooltip-primary' data-tip="Apple"><img className='w-[100px] h-full' src="https://i.ibb.co/3BXqSvF/2.png" alt="" /></div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default About;