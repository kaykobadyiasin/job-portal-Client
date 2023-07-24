import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center items-center h-80'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold text-center'>404</h1>
                <h2 className='text-center'>Sorry, the page you were looking for doesn't exist</h2>
                <Link to='/' className='btn bg-[#60A5FA] text-white mt-5'>Back</Link>
            </div>
        </div>
    );
};

export default Error;