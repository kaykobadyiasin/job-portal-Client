import React from 'react';
import { FaBuilding } from 'react-icons/fa6';

const TopCompanysWorld = ({ topItCompanyWw }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='w-6/12 h-[250px] mx-auto'><img className='w-full' src={topItCompanyWw.companyLogo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><FaBuilding></FaBuilding>&#160; {topItCompanyWw.companyName}</h2>
                    {/* <div className='flex items-center'><FaLocationDot></FaLocationDot> &#160; {topBdCompany.jobLocation} </div> */}
                    {/* <div className='flex items-center'><FaBuilding></FaBuilding>&#160; {topBdCompany.companyName}</div> */}
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">view details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCompanysWorld;