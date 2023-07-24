import React from 'react';
import c_img1 from '../../../assets/job-company/2.png'
import { FaBuilding, FaLocationDot } from 'react-icons/fa6';
import { Fade, Roll } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const FreshersJobs = ({ freshersJob }) => {
    return (
        <div>
            <Fade>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='w-6/12 h-[250px] mx-auto'><img className='w-full rounded-md' src={freshersJob.companyLogo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{freshersJob.positionName}</h2>
                        <div className='flex items-center'><FaLocationDot></FaLocationDot> &#160; {freshersJob.jobLocation} </div>
                        <div className='flex items-center'><FaBuilding></FaBuilding>&#160; {freshersJob.companyName}</div>
                        <div className="card-actions justify-end">
                            <Link to='/applyJob' className="btn btn-primary">Apply</Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default FreshersJobs;