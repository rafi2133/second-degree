import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import graduationcap from '../../assets/graduationCap.png'
import lou from '../../assets/lou.png'
import groth from '../../assets/groth.png'
import note from '../../assets/nota.png'

const BtnBgImg = () => {
    return (
        <div className='w-full md:w-10/12 mx-auto md:ml-20 px-4 sm:px-6 lg:px-8 py-5 border-2 my-4 grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#F7F9FC]'>
            <button
                className="relative gap-3 bg-cover bg-center bg-no-repeat py-8 pl-5 pr-20 rounded-md 
             transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110
             active:scale-95"
                style={{ backgroundImage: `url(${graduationcap})` }}
            >
                <span className="flex items-center gap-1 text-xl font-medium text-white drop-shadow-md">
                    课程产品 <IoIosArrowDropright className="transition-transform group-hover:translate-x-1" />
                </span>
            </button>
            <button
                className="relative gap-3 bg-cover bg-center bg-no-repeat py-8 pl-5 pr-20 rounded-md 
             transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110
             active:scale-95"
                style={{ backgroundImage: `url(${lou})` }}
            >
                <span className="flex items-center gap-1 text-xl font-medium text-white drop-shadow-md">
                    企业文化 <IoIosArrowDropright className="transition-transform group-hover:translate-x-1" />
                </span>
            </button>
            <button
                className="relative gap-3 bg-cover bg-center bg-no-repeat py-8 pl-5 pr-20 rounded-md 
             transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110
             active:scale-95"
                style={{ backgroundImage: `url(${groth})` }}
            >
                <span className="flex items-center gap-1 text-xl font-medium text-white drop-shadow-md">
                    发展历程 <IoIosArrowDropright className="transition-transform group-hover:translate-x-1" />
                </span>
            </button>
            <button
                className="relative gap-3 bg-cover bg-center bg-no-repeat py-8 pl-5 pr-20 rounded-md 
             transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110
             active:scale-95"
                style={{ backgroundImage: `url(${note})` }}
            >
                <span className="flex items-center gap-1 text-xl font-medium text-white drop-shadow-md">
                     新闻动态 <IoIosArrowDropright className="transition-transform group-hover:translate-x-1" />
                </span>
            </button>
         
        </div>
    );
};

export default BtnBgImg;