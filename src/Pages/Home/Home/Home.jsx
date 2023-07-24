import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import FreshersJobs from '../FreshersJobs/FreshersJobs';
import ExperiencedJobs from '../ExperiencedJobs/ExperiencedJobs';
import TopBdCompanys from '../TopBdCompanys/TopBdCompanys';
import TopCompanysWorld from '../TopCompanysWorld/TopCompanysWorld';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaBuilding, FaLocationDot } from 'react-icons/fa6';
import InterviewQA from '../InterviewQA/InterviewQA';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import FresherJobPoster from '../FresherJobPoster/FresherJobPoster';
import ExperiencedJobPoster from '../ExperiencedJobPoster/ExperiencedJobPoster';

const Home = () => {

    // const { user } = useContext(AuthContext);
    const [freshersJobs, setFreshersJobs] = useState([]);
    const [experiencedJobs, setExperiencedJobs] = useState([]);
    const [topBdCompanys, setTopBdCompanys] = useState([]);
    const [topItCompanyWorld, setTopItCompanyWorld] = useState([]);


    useEffect(() => {
        fetch('https://job-portal-server-gamma.vercel.app/fresherJobs')
            .then(res => res.json())
            .then(data => setFreshersJobs(data))
    }, [])

    useEffect(() => {
        fetch('https://job-portal-server-gamma.vercel.app/experiencedJobs')
            .then(res => res.json())
            .then(data => setExperiencedJobs(data))
    }, [])

    useEffect(() => {
        fetch('https://job-portal-server-gamma.vercel.app/topItCompanyBD')
            .then(res => res.json())
            .then(data => setTopBdCompanys(data))
    }, [])
    useEffect(() => {
        fetch('https://job-portal-server-gamma.vercel.app/topItCompanyWorld')
            .then(res => res.json())
            .then(data => setTopItCompanyWorld(data))
    }, [])

    return (
        <div className='w-10/12 mx-auto my-10'>
            <div className='mb-20'>
                <h2 className='mx-auto border-b-4 lg:w-[400px] mb-10 pb-3 rounded w-[300px] text-3xl text-center border-[#60A5FA] font-semibold'>My Profile</h2>
                <div className='lg:w-5/12 h-[400px] mx-auto'>
                    <h2 className='text-center text-xl font-semibold my-5'>Video Resume</h2>
                    <iframe className='w-full h-full rounded-lg border' src="https://www.youtube.com/embed/xOceQUon9jA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='hero-content mx-auto grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-8 mt-20 justify-center'>
                    <Slide direction='left'>
                        <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
                            <figure className='w-8/12 h-[250px] mx-auto workContainer'><img className='w-full work' src='https://i.ibb.co/9hczQBT/screencapture-freedom-yoga-6b25a-web-app-2023-07-23-19-43-16.png' alt="Shoes" /></figure>
                            <div className="card-body bg-slate-50">
                                <h2 className="text-2xl font-semibold my-3">Freedom Yoga</h2>
                                <ul className='px-5 pb-5'>
                                    <li className='list-disc'>Login/Registration Authentication</li>
                                    <li className='list-disc'>Class add and remove functions</li>
                                    <li className='list-disc'>Change user/admin role</li>
                                    <li className='list-disc'>Payment Getway system</li>
                                </ul>
                                <div className="card-actions justify-center">
                                    <a href='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-kaykobadyiasin' target='blank' className="btn bg-[#60A5FA] hover:bg-transparent border-2 hover:border-[#60A5FA] hover:text-[#1F2937] text-white">Client Side</a>
                                    <a href='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-kaykobadyiasin' target='blank' className="btn bg-[#1F2937] hover:bg-transparent border-2 hover:border-[#1F2937] hover:text-[#1F2937] text-white">Server Side</a>
                                    <a href='https://freedom-yoga-6b25a.web.app/' target='blank' className="btn bg-[#60A5FA] hover:bg-transparent border-2 hover:border-[#60A5FA] hover:text-[#1F2937] text-white">Live</a>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Fade>
                        <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
                            <figure className='w-8/12 h-[250px] mx-auto workContainer'><img className='w-full work' src='https://i.ibb.co/mRf3J03/screencapture-toy-animal-car-web-app-2023-07-23-20-25-26.png' alt="Shoes" /></figure>
                            <div className="card-body bg-slate-50">
                                <h2 className="text-2xl font-semibold my-3">Toy Animal Car</h2>
                                <ul className='px-5 pb-5'>
                                    <li className='list-disc'>Login/Registration Authentication</li>
                                    <li className='list-disc'>Toy add and remove, Update toy</li>
                                    <li className='list-disc'>Search and view details toy info</li>
                                    <li className='list-disc'>Show All Toys Page</li>
                                </ul>
                                <div className="card-actions justify-center">
                                    <a href='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-kaykobadyiasin' target='blank' className="btn bg-[#60A5FA] hover:bg-transparent border-2 hover:border-[#60A5FA] hover:text-[#1F2937] text-white">Client Side</a>
                                    <a href='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-kaykobadyiasin' target='blank' className="btn bg-[#1F2937] hover:bg-transparent border-2 hover:border-[#1F2937] hover:text-[#1F2937] text-white">Server Side</a>
                                    <a href='https://toy-animal-car.web.app/' target='blank' className="btn bg-[#60A5FA] hover:bg-transparent border-2 hover:border-[#60A5FA] hover:text-[#1F2937] text-white">Live</a>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Slide direction='right'>
                        <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
                            <figure className='w-8/12 h-[250px] mx-auto workContainer'><img className='w-full work' src='https://i.ibb.co/pn5dV0r/screencapture-chef-info-web-app-2023-07-23-20-23-40.png' alt="Shoes" /></figure>
                            <div className="card-body bg-slate-50">
                                <h2 className="text-2xl font-semibold my-3">Chef Info</h2>
                                <ul className='px-5 pb-5'>
                                    <li className='list-disc'>Login/Registration, google & Github</li>
                                    <li className='list-disc'>View chef details, chef rating</li>
                                    <li className='list-disc'>favorite button click to show the popup</li>
                                    <li className='list-disc'>Marquee, photo auto slide</li>
                                </ul>
                                <div className="card-actions justify-center">
                                    <a href='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-kaykobadyiasin' target='blank' className="btn bg-[#60A5FA] hover:bg-transparent border-2 hover:border-[#60A5FA] hover:text-[#1F2937] text-white">Client Side</a>
                                    <a href='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-kaykobadyiasin' target='blank' className="btn bg-[#1F2937] hover:bg-transparent border-2 hover:border-[#1F2937] hover:text-[#1F2937] text-white">Server Side</a>
                                    <a href='https://chef-info.web.app/' target='blank' className="btn bg-[#60A5FA] hover:bg-transparent border-2 hover:border-[#60A5FA] hover:text-[#1F2937] text-white">Live</a>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>

            <div className=''>
                <h2 className='mx-auto border-b-4 lg:w-[400px] mb-10 pb-3 rounded w-[350px] text-3xl text-center border-[#60A5FA] font-semibold'>MERN Stack Technologies Interview Questions & Answers</h2>
                <InterviewQA></InterviewQA>
            </div>

            <Tabs>
                <TabList className='border-b font-semibold border-[#60A5FA]  pt-5'>
                    <Tab>Job Seeker</Tab>
                    <Tab>Job poster</Tab>
                </TabList>

                <TabPanel className='mt-10'>
                    <h2 className='mx-auto border-b-4 lg:w-[400px]  pb-3 rounded w-[300px] text-3xl text-center border-[#60A5FA] font-semibold'>Fresher Jobs</h2>
                    <div className='my-20'>
                        <div className='hero-content mx-auto grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-8 justify-center'>

                            {
                                freshersJobs.map(freshersJob => <FreshersJobs
                                    key={freshersJob._id}
                                    freshersJob={freshersJob}
                                ></FreshersJobs>)
                            }

                        </div>
                        <div className='flex justify-center my-5'>
                            <button className="btn btn-primary">See All Jobs</button>
                        </div>
                    </div>

                    <div className='bg-slate-50 rounded-md'>
                        <h2 className='mx-auto border-b-4 pt-5 my-20 lg:w-[400px]  pb-3 rounded w-[300px] text-3xl text-center border-[#60A5FA] font-semibold'>Experienced Jobs</h2>
                        <div className='mt-5'>
                            <div className='hero-content mx-auto grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-8 justify-center'>

                                {
                                    experiencedJobs.map(experiencedJob => <ExperiencedJobs
                                        key={experiencedJob._id}
                                        experiencedJob={experiencedJob}
                                    ></ExperiencedJobs>)
                                }

                            </div>
                            <div className='flex justify-center'>
                                <button className="btn btn-primary my-5">See All Jobs</button>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#1F2937] rounded-md pb-5'>
                        <h2 className='mx-auto mt-20 border-b-4 lg:w-full text-white py-3 rounded w-full text-3xl text-center border-[#60A5FA] font-semibold'>Top 3 IT Companies in Bangladesh</h2>
                        <div className='mt-5'>
                            <div className='hero-content mx-auto grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-8 justify-center'>

                                {
                                    topBdCompanys.map(topBdCompany => <TopBdCompanys
                                        key={topBdCompany._id}
                                        topBdCompany={topBdCompany}
                                    ></TopBdCompanys>)
                                }

                            </div>
                            {/* <div className='flex justify-center my-5'>
                            <button className="btn btn-primary">See All Jobs</button>
                        </div> */}
                        </div>
                        <h2 className='mx-auto mt-20 border-b-4 lg:w-full text-white py-3 rounded w-full text-3xl text-center border-[#60A5FA] font-semibold'>Top 3 IT Companies WorldWide</h2>
                        <div className='mt-5'>
                            <div className='hero-content mx-auto grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-8 justify-center'>

                                {
                                    topItCompanyWorld.map(topItCompanyWw => <TopCompanysWorld
                                        key={topItCompanyWw._id}
                                        topItCompanyWw={topItCompanyWw}
                                    ></TopCompanysWorld>)
                                }

                            </div>
                            {/* <div className='flex justify-center my-5'>
                            <button className="btn btn-primary">See All Jobs</button>
                        </div> */}
                        </div>

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='lg:flex justify-between'>
                        <FresherJobPoster></FresherJobPoster>
                        <ExperiencedJobPoster></ExperiencedJobPoster>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Home;