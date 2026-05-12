import React from 'react';

const Links = () => {
    return (
        <div className='w-full md:w-10/12 mx-auto md:ml-20 px-4 sm:px-6 lg:px-8 py-5 border-2 my-4 bg-[#F7F9FC]'>
            <div className="text-center">
                <h2 className='text-xl font-semibold'>-友情链接-</h2>
                <ul className='my-4 flex gap-4 justify-center'>
                    <li className='text-[#5CB796] border-b-2 border-[#5CB796]'><a href="">前途出国</a></li>
                    <li className='text-[#5CB796] border-b-2 border-[#5CB796]'><a href="">斯芬克</a></li>
                    <li className='text-[#5CB796] border-b-2 border-[#5CB796]'><a href="">美刻云直播</a></li>
                    <li className='text-[#5CB796] border-b-2 border-[#5CB796]'><a href="">东方云校</a></li>
                    <li className='text-[#5CB796] border-b-2 border-[#5CB796]'><a href="">乐学东方</a></li>
                    <li className='text-[#5CB796] border-b-2 border-[#5CB796]'><a href="">新东方在线</a></li>
                    <li className='text-[#5CB796] border-b-2 border-[#5CB796]'><a href="">网易教育</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Links;