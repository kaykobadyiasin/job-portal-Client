import React from 'react';
import { Fade, Flip, JackInTheBox, Roll, Slide } from 'react-awesome-reveal';
import { FaBuilding, FaLocationDot } from 'react-icons/fa6';

const ExperiencedJobs = ({ experiencedJob }) => {
    return (
        <div>
            <Fade direction='top'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='w-6/12 h-[250px] mx-auto'><img className='w-full rounded-md' src={experiencedJob.company_logo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{experiencedJob.position_name}</h2>
                        <div className='flex items-center'><FaLocationDot></FaLocationDot> &#160; {experiencedJob.job_location} </div>
                        <div className='flex items-center'><FaBuilding></FaBuilding>&#160; {experiencedJob.company_name}</div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ExperiencedJobs;