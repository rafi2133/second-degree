import React from 'react';
import callService from '../../assets/call_service.ico';
import call from '../../assets/call.ico';
import book from '../../assets/bookmark.ico';
import verify from '../../assets/veryfi.svg';

const RightSide = () => {
  return (
    <>
      {/* Desktop view (md and up) */}
      <div className="hidden lg:block fixed right-0 top-1/3 -translate-y-1/3 z-50 shadow-xl rounded-lg p-2">
        <div className="border p-2 bg-white shadow-lg rounded-l-md flex flex-col">
          <button className="relative whitespace-nowrap hover:bg-[#46f3e2]">
            <img className="w-20 " src={callService} alt="call service" />
            <span className="absolute left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs border bg-[#1AC1AF] text-white rounded-full whitespace-nowrap ">
              在线客服
            </span>
          </button>
          <button className="relative whitespace-nowrap hover:bg-[#d9ecea] my-8">
            <img className="w-20" src={call} alt="call service" />
            <span className="absolute left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs border text-[#5a5757] rounded-full whitespace-nowrap">
              电话客服
            </span>
          </button>
          <button className="relative whitespace-nowrap hover:bg-[#d9ecea] mb-8">
            <img className="w-20" src={book} alt="bookmark" />
            <span className="absolute left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs border text-[#5a5757] rounded-full whitespace-nowrap">
              领取课程
            </span>
          </button>
          <button className="relative whitespace-nowrap hover:bg-[#d9ecea] mb-8">
            <img className="w-20" src={verify} alt="verify" />
            <span className="absolute left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs border text-[#5a5757] rounded-full whitespace-nowrap">
              关注公众号
            </span>
          </button>
        </div>
      </div>

      {/* Mobile view (below md) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl rounded-t-xl p-2 flex justify-around items-center">
        <button className="relative flex flex-col items-center whitespace-nowrap hover:bg-[#46f3e2] p-2 rounded-lg">
          <img className="w-8 h-8" src={callService} alt="call service" />
          <span className="text-xs mt-1 bg-[#1AC1AF] text-white px-2 py-0.5 rounded-full">
            在线客服
          </span>
        </button>
        <button className="relative flex flex-col items-center whitespace-nowrap hover:bg-[#d9ecea] p-2 rounded-lg">
          <img className="w-8 h-8" src={call} alt="call" />
          <span className="text-xs mt-1 text-[#5a5757] px-2 py-0.5 rounded-full border">
            电话客服
          </span>
        </button>
        <button className="relative flex flex-col items-center whitespace-nowrap hover:bg-[#d9ecea] p-2 rounded-lg">
          <img className="w-8 h-8" src={book} alt="book" />
          <span className="text-xs mt-1 text-[#5a5757] px-2 py-0.5 rounded-full border">
            领取课程
          </span>
        </button>
        <button className="relative flex flex-col items-center whitespace-nowrap hover:bg-[#d9ecea] p-2 rounded-lg">
          <img className="w-8 h-8" src={verify} alt="verify" />
          <span className="text-xs mt-1 text-[#5a5757] px-2 py-0.5 rounded-full border">
            关注公众号
          </span>
        </button>
      </div>
    </>
  );
};

export default RightSide;