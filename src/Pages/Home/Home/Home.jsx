import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Home = () => {
    return (
        <div className='w-10/12 mx-auto my-10'>
            <Tabs>
                <TabList className='border-b border-[#60A5FA]  pt-5 text-center'>
                    <Tab >Job Seeker</Tab>
                    <Tab >Job poster</Tab>
                </TabList>

                <TabPanel  className=' mt-5'>
                    <h2 className='border-b w-1/12 text-xl font-semibold'>Fresher Jobs</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Home;