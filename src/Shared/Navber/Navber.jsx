import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBlackTie } from "react-icons/fa6";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navber = () => {

    const { user, logOut, loading } = useContext(AuthContext);
    // const user = false;

    const handleLogOut = () => {
        logOut()
    }
    // if (loading) {
    //     <progress className="progress w-56"></progress>
    // }

    const navList = <>
        <li className='text-lg lg:text-white '><NavLink to='/'>Home</NavLink></li>
        <li className='text-lg lg:text-white '><NavLink to='/about'>About</NavLink></li>
        <li className='text-lg lg:text-white '><NavLink to='/contact'>Contact Us</NavLink></li>

    </>

    return (
        <div className='bg-blue-400 sticky top-0 z-10 drop-shadow-lg'>
            <div className='lg:w-10/12 mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
                                {navList}
                            </ul>
                        </div>
                        <Link to='/' className="font-bold text-3xl flex items-center"><FaBlackTie className='mr-2 text-4xl rounded-full text-white'></FaBlackTie> Job <span className='text-white'>Portal.</span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navList}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <>
                                <div className="tooltip lg:block hidden cursor-pointer border tooltip-bottom mr-5 p-3 rounded-lg" data-tip={user.email}>
                                    <p className="font-semibold">User</p>
                                </div>
                                <Link onClick={handleLogOut} className="btn font-bold">Sign Out</Link>
                            </>
                                :
                                <><Link to='/login' className="btn font-bold">Sign in</Link></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;