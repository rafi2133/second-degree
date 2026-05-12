import React from 'react';
import laptop from '../../assets/laptop.ico'
import drawing from '../../assets/drawing.ico'
import bulb from '../../assets/bulb.ico'
import login from '../../assets/login.ico'



const NavBar = () => {
    return (
        <nav className="bg-base-200 shadow-sm rounded-md w-full md:w-10/12 md:ml-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-3 md:px-6">
                {/* Logo - appears first in visual order */}
                <div className="flex-shrink-0">
                    <a
                        href="/"
                        className="btn btn-ghost text-xl font-bold normal-case gap-2 hover:bg-base-300/50 transition-colors"
                        aria-label="Homepage"
                    >

                        <span>Second-DEG</span>
                    </a>
                </div>

                {/* Search Box + Button (Second in order) */}
                <div className="w-full md:w-auto flex justify-center">
                    <div className="join w-full sm:w-auto shadow-sm">
                        <input
                            type="text"
                            placeholder="搜索框"
                            className="input input-bordered join-item w-full sm:w-64 md:w-56 lg:w-72 input-sm md:input-md bg-base-100 focus:outline-none"
                            aria-label="Search"
                        />
                        <button className="btn join-item btn-primary btn-sm md:btn-md gap-1 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 md:h-5 md:w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <span className="hidden sm:inline">搜索</span>
                        </button>
                    </div>
                </div>

                {/* Four Nav Links with Icons (Third in order) */}
                <div className="">
                    <ul className='flex gap-4'>
                        <li className='text-center hover:bg-[#ffff]'>
                            <img className='w-20' src={laptop} alt="" />
                            <a className='hover:text-[#0f9b61]' href="">业务介绍</a>
                        </li>
                        <li className='text-center hover:bg-[#ffff]'>
                            <img className='w-20' src={drawing} alt="" />
                            <a className='hover:text-[#0f9b61]' href="">购物车</a>
                        </li>
                        <li className='text-center hover:bg-[#ffff]'>
                            <img className='w-20' src={bulb} alt="" />
                            <a className='hover:text-[#0f9b61]' href="">信息中心</a>
                        </li>
                        <li className='text-center hover:bg-[#ffff]'>
                            <img className='w-20' src={login} alt="" />
                            <a className='hover:text-[#0f9b61]' href="">登录/注册</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;