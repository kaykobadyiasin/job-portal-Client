import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import FreshersJobs from '../FreshersJobs/FreshersJobs';
import ExperiencedJobs from '../ExperiencedJobs/ExperiencedJobs';
import TopBdCompanys from '../TopBdCompanys/TopBdCompanys';
import TopCompanysWorld from '../TopCompanysWorld/TopCompanysWorld';

const Home = () => {


    const [freshersJobs, setFreshersJobs] = useState([]);
    const [experiencedJobs, setExperiencedJobs] = useState([]);
    const [topBdCompanys, setTopBdCompanys] = useState([]);
    const [topItCompanyWorld, setTopItCompanyWorld] = useState([]);

    
    useEffect(() => {
        fetch('fresherJobs.json')
            .then(res => res.json())
            .then(data => setFreshersJobs(data))
    }, [])
    
    useEffect(() => {
        fetch('experiencedJobs.json')
            .then(res => res.json())
            .then(data => setExperiencedJobs(data))
    }, [])

    useEffect(() => {
        fetch('TopItCompanyBD.json')
            .then(res => res.json())
            .then(data => setTopBdCompanys(data))
    }, [])
    useEffect(() => {
        fetch('TopItCompanyWorld.json')
            .then(res => res.json())
            .then(data => setTopItCompanyWorld(data))
    }, [])
    

    return (
        <div className='w-10/12 mx-auto my-10'>
            <Tabs>
                <TabList className='border-b font-semibold border-[#60A5FA]  pt-5'>
                    <Tab>Job Seeker</Tab>
                    <Tab>Job poster</Tab>
                </TabList>

                <TabPanel className='mt-10'>
                    <h2 className='mx-auto border-b-4 lg:w-[400px]  pb-3 rounded w-[400px] text-3xl text-center border-[#60A5FA] font-semibold'>Fresher Jobs</h2>
                    <div className='my-20'>
                        <div className='hero-content mx-auto grid lg:grid-cols-3 gap-8 justify-center'>

                            {
                                freshersJobs.map(freshersJob => <FreshersJobs
                                    key={freshersJob.id}
                                    freshersJob={freshersJob}
                                ></FreshersJobs>)
                            }

                        </div>
                        <div className='flex justify-center my-5'>
                            <button className="btn btn-primary">See All Jobs</button>
                        </div>
                    </div>

                    <h2 className='mx-auto border-b-4 my-20 lg:w-[400px]  pb-3 rounded w-[400px] text-3xl text-center border-[#60A5FA] font-semibold'>Experienced Jobs</h2>
                    <div className='mt-5'>
                        <div className='hero-content mx-auto grid lg:grid-cols-3 gap-8 justify-center'>

                            {
                                experiencedJobs.map(experiencedJob => <ExperiencedJobs
                                    key={experiencedJob.id}
                                    experiencedJob={experiencedJob}
                                ></ExperiencedJobs>)
                            }

                        </div>
                        <div className='flex justify-center my-5'>
                            <button className="btn btn-primary">See All Jobs</button>
                        </div>
                    </div>

                    <h2 className='mx-auto my-20 border-b-4 lg:w-full  pb-3 rounded w-full text-3xl text-center border-[#60A5FA] font-semibold'>Top 3 IT Companies in Bangladesh</h2>
                    <div className='mt-5'>
                        <div className='hero-content mx-auto grid lg:grid-cols-3 gap-8 justify-center'>

                            {
                                topBdCompanys.map(topBdCompany => <TopBdCompanys
                                    key={topBdCompany.id}
                                    topBdCompany={topBdCompany}
                                ></TopBdCompanys>)
                            }

                        </div>
                        {/* <div className='flex justify-center my-5'>
                            <button className="btn btn-primary">See All Jobs</button>
                        </div> */}
                    </div>
                    <h2 className='mx-auto my-20 border-b-4 lg:w-full  pb-3 rounded w-full text-3xl text-center border-[#60A5FA] font-semibold'>Top 3 IT Companies WorldWide</h2>
                    <div className='mt-5'>
                        <div className='hero-content mx-auto grid lg:grid-cols-3 gap-8 justify-center'>

                            {
                                topItCompanyWorld.map(topItCompanyWw => <TopCompanysWorld
                                    key={topItCompanyWw.id}
                                    topItCompanyWw={topItCompanyWw}
                                ></TopCompanysWorld>)
                            }

                        </div>
                        {/* <div className='flex justify-center my-5'>
                            <button className="btn btn-primary">See All Jobs</button>
                        </div> */}
                    </div>

                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Home;