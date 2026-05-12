import React from 'react';
import { useState, useEffect } from 'react';
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import banner4 from '../../assets/banner4.png'

const Banner = () => {
    const images = [banner1, banner2, banner3, banner4];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [images.length]);

    const goTo = (index) => setCurrent(index);
    const prev = () => setCurrent((current - 1 + images.length) % images.length);
    const next = () => setCurrent((current + 1) % images.length);





    return (
        <div className='w-10/12 ml-20 mt-5 flex gap-4'>
            {/* Left side - categories list (unchanged) */}
            <div className="left p-3 border-4 border-[#2adbdb] rounded-md flex flex-col justify-center">
                <h2 className='text-center font-semibold text-xl'>智学乐行</h2>
                <div className="flex my-2">
                    <h3 className='mr-4 '>小语种自学</h3>
                    <ul className='flex gap-2 hover:bg-black hover:text-white'>
                        <li className=' hover:text-[#46c0c9]'><button>日语</button></li>
                        <li className=' hover:text-[#46c0c9]'><button>泰语</button></li>
                        <li className=' hover:text-[#46c0c9]'><button>俄语</button></li>
                    </ul>
                </div>
                <div className="flex my-2">
                    <h3 className='mr-4'>AI学习应用</h3>
                    <ul className='flex gap-2 hover:bg-black hover:text-white'>
                        <li className='hover:text-[#46c0c9]'><button>AI学习</button></li>
                        <li className='hover:text-[#46c0c9]'><button>AI办公</button></li>
                        <li className='hover:text-[#46c0c9]'><button>AI自媒体</button></li>
                    </ul>
                </div>
                <div className="flex my-2">
                    <h3 className='mr-4'>跨境自媒体</h3>
                    <ul className='flex gap-2 hover:bg-black hover:text-white'>
                        <li className='hover:text-[#46c0c9]'><button>FaceBook</button></li>
                        <li className='hover:text-[#46c0c9]'><button>Instagram</button></li>
                        <li className='hover:text-[#46c0c9]'><button>TikTok</button></li>
                    </ul>
                </div>
                <div className="flex my-2">
                    <h3 className='mr-4'>跨境电商</h3>
                    <ul className='flex gap-2 hover:bg-black hover:text-white'>
                        <li className='hover:text-[#46c0c9]'><button>跨境平台</button></li>
                        <li className='hover:text-[#46c0c9]'><button>独立站</button></li>
                        <li className='hover:text-[#46c0c9]'><button>TK店铺</button></li>
                    </ul>
                </div>
                <div className="flex my-2">
                    <h3 className='mr-4'>国贸物流</h3>
                    <ul className='flex gap-2 hover:bg-black hover:text-white'>
                        <li className='hover:text-[#46c0c9]'><button>国际贸易</button></li>
                        <li className='hover:text-[#46c0c9]'><button>国际物流</button></li>
                        <li className='hover:text-[#46c0c9]'><button>进出口报关</button></li>
                    </ul>
                </div>
                <div className="flex my-2">
                    <h3 className='mr-4'>职业规划</h3>
                    <ul className='flex gap-2 hover:bg-black hover:text-white'>
                        <li className='hover:text-[#46c0c9]'><button>企业实习</button></li>
                        <li className='hover:text-[#46c0c9]'><button>企业就职</button></li>
                        <li className='hover:text-[#46c0c9]'><button>自行创业</button></li>
                    </ul>
                </div>
                <div className="flex my-2">
                    <h3 className='mr-4'>人才智库</h3>
                    <ul className='flex gap-2 hover:bg-black hover:text-white'>
                        <li className='hover:text-[#46c0c9]'><button>企业招聘</button></li>
                        <li className='hover:text-[#46c0c9]'><button>初创投资</button></li>
                        <li className='hover:text-[#46c0c9]'><button>合伙创投</button></li>
                    </ul>
                </div>
                <div className="flex my-2">
                    <h3 className='mr-4'>智学乐行</h3>
                    <ul className='flex gap-2 hover:bg-black hover:text-white'>
                        <li className='hover:text-[#46c0c9]'><button>积累积分</button></li>
                        <li className='hover:text-[#46c0c9]'><button>积分兑换</button></li>
                        <li className='hover:text-[#46c0c9]'><button>学长帮扶带</button></li>
                    </ul>
                </div>
            </div>

            {/* Right side - take remaining width and spread buttons */}
            <div className="right flex-1">
                <div className="right-top">
                    {/* Use grid to distribute buttons evenly across the available space */}
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                        <button className='border p-2 rounded-md hover:text-[#46c0c9] text-center'>龙虎榜</button>
                        <button className='border p-2 rounded-md hover:text-[#46c0c9] text-center'>小语种</button>
                        <button className='border p-2 rounded-md hover:text-[#46c0c9] text-center'>AI学习应用</button>
                        <button className='border p-2 rounded-md hover:text-[#46c0c9] text-center'>跨境自媒体</button>
                        <button className='border p-2 rounded-md hover:text-[#46c0c9] text-center'>跨境电商</button>
                        <button className='border p-2 rounded-md hover:text-[#46c0c9] text-center'>国贸物流</button>
                        <button className='border p-2 rounded-md hover:text-[#46c0c9] text-center'>职业规划</button>
                        <button className='border p-2 rounded-md hover:text-[#46c0c9] text-center'>人才智库</button>
                    </div>
                </div>
                <div className="right-bottom mt-4">
                    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                            >
                                <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}

                        {/* Previous / Next buttons (DaisyUI style) */}
                        <button
                            onClick={prev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm z-20 bg-white/80 hover:bg-white"
                        >
                            ❮
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm z-20 bg-white/80 hover:bg-white"
                        >
                            ❯
                        </button>

                        {/* Dots indicator */}
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goTo(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === current ? 'bg-white w-5' : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;