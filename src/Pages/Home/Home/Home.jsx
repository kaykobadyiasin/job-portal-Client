import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import FreshersJobs from '../FreshersJobs/FreshersJobs';

const Home = () => {


    const [freshersJobs, setFreshersJobs] = useState([]);

    useEffect(() => {
        fetch('fresherJobs.json')
        .then(res => res.json())
        .then(data => setFreshersJobs(data))
    }, [])

    return (
        <div className='w-10/12 mx-auto my-10'>
            <Tabs>
                <TabList className='border-b border-[#60A5FA]  pt-5'>
                    <Tab >Job Seeker</Tab>
                    <Tab >Job poster</Tab>
                </TabList>

                <TabPanel className='mt-10'>
                    <h2 className='mx-auto border-b-4 lg:w-[180px] w-[180px] text-3xl text-center border-[#60A5FA] font-semibold'>Fresher Jobs</h2>
                    <div className='mt-5'>
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
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Home;