import React from 'react';
import qr from '../../assets/qr.png';

const Footer = () => {
  return (
    <footer className="w-full md:w-10/12 mx-auto md:ml-20 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5] mb-20">
      <div className="w-full lg:w-10/12 mx-auto text-center lg:ml-20 px-4 sm:px-6 py-8">
        {/* Responsive grid: 1 column on mobile → 2 on small → 3 on medium → 6 on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-5">
          
          {/* First 5 columns - same as yours */}
          <div className="">
            <h4 className="border-b border-gray-300 pb-1 font-semibold">关于我们</h4>
            <ul className="my-2 space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">公司简介</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">加入我们</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">联系我们</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">媒体报道</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="border-b border-gray-300 pb-1 font-semibold">学习支持</h4>
            <ul className="my-2 space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">学习计划</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">职业规划</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">人才智库</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">智学乐行</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="border-b border-gray-300 pb-1 font-semibold">帮助中心</h4>
            <ul className="my-2 space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">常见问题</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">在线客服</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">电话客服</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">领取课程</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="border-b border-gray-300 pb-1 font-semibold">商务合作</h4>
            <ul className="my-2 space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">广告合作</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">机构入驻</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">讲师招募</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">校园代理</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="border-b border-gray-300 pb-1 font-semibold">关注我们</h4>
            <ul className="my-2 space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">微信公众号</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">抖音</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">小红书</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 text-sm">B站</a></li>
            </ul>
          </div>

          {/* Last column: QR + title below */}
          <div className="text-center sm:text-left">
            <img src={qr} alt="QR code" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto sm:mx-0 object-contain bg-white p-1 rounded-md" />
            <h4 className="mt-2 font-semibold text-sm text-gray-700">微信扫码</h4>
          </div>
        </div>

        {/* Optional copyright line */}
        <div className="text-center text-gray-500 text-xs mt-8 pt-4 border-t border-gray-300">
          © {new Date().getFullYear()} Second-DEG. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;