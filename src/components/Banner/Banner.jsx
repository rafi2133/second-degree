import React, { useState, useEffect } from 'react';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import banner4 from '../../assets/banner4.png';

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
    <>
      {/* ----- Sticky full‑width button bar (always occupies full viewport width) ----- */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm shadow-md py-2 mb-4 w-full md:w-10/12 mx-auto md:ml-20 my-4">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            <button className="border p-2 rounded-md hover:text-[#46c0c9] text-center text-sm sm:text-base bg-gradient-to-r from-[#8d2f8d] via-[#db43cf] to-[#de66e9] text-white">龙虎榜</button>
            <button className="border p-2 rounded-md hover:text-[#46c0c9] text-center text-sm sm:text-base bg-gradient-to-r from-[#8d2f8d] via-[#db43cf] to-[#de66e9] text-white">小语种</button>
            <button className="border p-2 rounded-md hover:text-[#46c0c9] text-center text-sm sm:text-base bg-gradient-to-r from-[#8d2f8d] via-[#db43cf] to-[#de66e9] text-white">AI学习应用</button>
            <button className="border p-2 rounded-md hover:text-[#46c0c9] text-center text-sm sm:text-base bg-gradient-to-r from-[#8d2f8d] via-[#db43cf] to-[#de66e9] text-white">跨境自媒体</button>
            <button className="border p-2 rounded-md hover:text-[#46c0c9] text-center text-sm sm:text-base bg-gradient-to-r from-[#8d2f8d] via-[#db43cf] to-[#de66e9] text-white">跨境电商</button>
            <button className="border p-2 rounded-md hover:text-[#46c0c9] text-center text-sm sm:text-base bg-gradient-to-r from-[#8d2f8d] via-[#db43cf] to-[#de66e9] text-white">国贸物流</button>
            <button className="border p-2 rounded-md hover:text-[#46c0c9] text-center text-sm sm:text-base bg-gradient-to-r from-[#8d2f8d] via-[#db43cf] to-[#de66e9] text-white">职业规划</button>
            <button className="border p-2 rounded-md hover:text-[#46c0c9] text-center text-sm sm:text-base bg-gradient-to-r from-[#8d2f8d] via-[#db43cf] to-[#de66e9] text-white">人才智库</button>
          </div>
        </div>
      </div>

      {/* ----- Two‑column main layout (left categories + right carousel) ----- */}
      <div className="w-full md:w-10/12 mx-auto md:ml-20 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row gap-4 mt-2">
        {/* Left side – categories */}
        <div className="left p-3 border-4 border-[#2adbdb] rounded-md w-full md:w-auto md:min-w-[220px]">
          <h2 className="text-center font-semibold text-xl">智学乐行</h2>

          <div className="flex my-2 flex-wrap items-center gap-2">
            <h3 className="mr-2 font-medium">小语种自学</h3>
            <ul className="flex gap-2 flex-wrap">
              <li><button className="hover:text-[#46c0c9]">日语</button></li>
              <li><button className="hover:text-[#46c0c9]">泰语</button></li>
              <li><button className="hover:text-[#46c0c9]">俄语</button></li>
            </ul>
          </div>
          <div className="flex my-2 flex-wrap items-center gap-2">
            <h3 className="mr-2 font-medium">AI学习应用</h3>
            <ul className="flex gap-2 flex-wrap">
              <li><button className="hover:text-[#46c0c9]">AI学习</button></li>
              <li><button className="hover:text-[#46c0c9]">AI办公</button></li>
              <li><button className="hover:text-[#46c0c9]">AI自媒体</button></li>
            </ul>
          </div>
          <div className="flex my-2 flex-wrap items-center gap-2">
            <h3 className="mr-2 font-medium">跨境自媒体</h3>
            <ul className="flex gap-2 flex-wrap">
              <li><button className="hover:text-[#46c0c9]">FaceBook</button></li>
              <li><button className="hover:text-[#46c0c9]">Instagram</button></li>
              <li><button className="hover:text-[#46c0c9]">TikTok</button></li>
            </ul>
          </div>
          <div className="flex my-2 flex-wrap items-center gap-2">
            <h3 className="mr-2 font-medium">跨境电商</h3>
            <ul className="flex gap-2 flex-wrap">
              <li><button className="hover:text-[#46c0c9]">跨境平台</button></li>
              <li><button className="hover:text-[#46c0c9]">独立站</button></li>
              <li><button className="hover:text-[#46c0c9]">TK店铺</button></li>
            </ul>
          </div>
          <div className="flex my-2 flex-wrap items-center gap-2">
            <h3 className="mr-2 font-medium">国贸物流</h3>
            <ul className="flex gap-2 flex-wrap">
              <li><button className="hover:text-[#46c0c9]">国际贸易</button></li>
              <li><button className="hover:text-[#46c0c9]">国际物流</button></li>
              <li><button className="hover:text-[#46c0c9]">进出口报关</button></li>
            </ul>
          </div>
          <div className="flex my-2 flex-wrap items-center gap-2">
            <h3 className="mr-2 font-medium">职业规划</h3>
            <ul className="flex gap-2 flex-wrap">
              <li><button className="hover:text-[#46c0c9]">企业实习</button></li>
              <li><button className="hover:text-[#46c0c9]">企业就职</button></li>
              <li><button className="hover:text-[#46c0c9]">自行创业</button></li>
            </ul>
          </div>
          <div className="flex my-2 flex-wrap items-center gap-2">
            <h3 className="mr-2 font-medium">人才智库</h3>
            <ul className="flex gap-2 flex-wrap">
              <li><button className="hover:text-[#46c0c9]">企业招聘</button></li>
              <li><button className="hover:text-[#46c0c9]">初创投资</button></li>
              <li><button className="hover:text-[#46c0c9]">合伙创投</button></li>
            </ul>
          </div>
          <div className="flex my-2 flex-wrap items-center gap-2">
            <h3 className="mr-2 font-medium">智学乐行</h3>
            <ul className="flex gap-2 flex-wrap">
              <li><button className="hover:text-[#46c0c9]">积累积分</button></li>
              <li><button className="hover:text-[#46c0c9]">积分兑换</button></li>
              <li><button className="hover:text-[#46c0c9]">学长帮扶带</button></li>
            </ul>
          </div>
        </div>

        {/* Right side – carousel only (the button bar is moved above) */}
        <div className="right flex-1">
          <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}

            {/* Prev / Next buttons */}
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
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === current ? 'bg-white w-5' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;