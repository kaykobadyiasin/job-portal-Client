import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { FaBuilding, FaLocationDot } from 'react-icons/fa6';

const TopBdCompanys = ({ topBdCompany }) => {
    return (
        <div>
            <Slide direction='right'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='w-6/12 h-[250px] mx-auto'><img className='w-full rounded-md' src={topBdCompany.companyLogo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><FaBuilding></FaBuilding>&#160; {topBdCompany.companyName}</h2>
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

export default TopBdCompanys;