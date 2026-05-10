import React from 'react';
import callService from '../../assets/call_service.ico'
import call from '../../assets/call.ico'
import book from '../../assets/bookmark.ico'
import verify from '../../assets/veryfi.svg'

const RightSide = () => {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 shadow-xl rounded-lg p-2">
            <div className="border p-2 bg-white shadow-lg rounded-l-md flex flex-col">
                <button className="relative whitespace-nowrap hover:bg-[#46f3e2]">
                    <img className='w-20 ' src={callService} alt="call service" />
                    <span className='absolute left-1/2  -translate-x-1/2  px-2 py-0.5 text-xs border bg-[#1AC1AF] text-white rounded-full whitespace-nowrap'>
                        在线客服
                    </span>
                </button>
                  <button className="relative whitespace-nowrap hover:bg-[#d9ecea] my-8">
                     <img className='w-20' src={call} alt="call service" />
                    <span className='absolute left-1/2  -translate-x-1/2  px-2 py-0.5 text-xs border  text-[#5a5757] rounded-full whitespace-nowrap'>
                        电话客服
                    </span>
                </button>
                  <button className="relative whitespace-nowrap hover:bg-[#d9ecea] mb-8">
                    <img className='w-20' src={book} alt="call service" />
                    <span className='absolute left-1/2  -translate-x-1/2  px-2 py-0.5 text-xs border text-[#5a5757] rounded-full whitespace-nowrap'>
                        领取课程
                    </span>
                </button>
                  <button className="relative whitespace-nowrap hover:bg-[#d9ecea] mb-8">
                    <img className='w-20' src={verify} alt="call service" />
                    <span className='absolute left-1/2  -translate-x-1/2  px-2 py-0.5 text-xs border text-[#5a5757] rounded-full whitespace-nowrap'>
                       关注公众号
                    </span>
                </button>
            </div>
        </div>
    );
};

export default RightSide;