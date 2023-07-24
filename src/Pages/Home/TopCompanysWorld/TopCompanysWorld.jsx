import React from 'react';
import { Fade, Hinge, JackInTheBox, Slide } from 'react-awesome-reveal';
import { FaBuilding } from 'react-icons/fa6';

const TopCompanysWorld = ({ topItCompanyWw }) => {
    return (
        <div>
            <Slide direction='left'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='w-6/12 h-[250px] mx-auto'><img className='w-full rounded-md' src={topItCompanyWw.companyLogo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><FaBuilding></FaBuilding>&#160; {topItCompanyWw.companyName}</h2>
                        {/* <div className='flex items-center'><FaLocationDot></FaLocationDot> &#160; {topBdCompany.jobLocation} </div> */}
                        {/* <div className='flex items-center'><FaBuilding></FaBuilding>&#160; {topBdCompany.companyName}</div> */}
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">view details</button>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default TopCompanysWorld;