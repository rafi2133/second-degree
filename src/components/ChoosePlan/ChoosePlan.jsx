import React from 'react';

const ChoosePlan = () => {
    return (
        <div className='w-10/12 ml-20 mt-5 border-4 p-2'>
            <div className=" text-right">
                <button className='btn btn-soft btn-error text-white mb-1'>点击报名</button>
                <div className="border-4 border-[#FDDDD7] bg-[#FEF7F6] grid grid-cols-7 p-4 gap-4">
                    <div className="flex items-center justify-center text-center border-2 border-[#FE7332] bg-[#F99779] text-white py-5">学<br />习<br />计<br />划</div>
                    <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] text-center justify-center flex p-1"><p className='font-bold flex items-center '>提供专属自学包</p></button>
                    <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] text-center justify-center flex p-1"><p className='font-bold flex items-center '>制定学习计划</p></button>
                    <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] text-center justify-center flex p-1"><p className='font-bold flex items-center '>每周日下发任务</p></button>
                    <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] text-center justify-center flex p-1"><p className='font-bold flex items-center '>次周五前完成任务</p></button>
                    <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] text-center justify-center flex p-1"><p className='font-bold flex items-center '>老师审评任务卡</p></button>
                    <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] text-center justify-center flex p-1"><p className='font-bold flex items-center '>1V1沟通辅导</p></button>
                </div>
            </div>


            <div className="my-3 text-right">
                <button className='btn btn-soft btn-error text-white mb-1'>点击报名</button>
                <div className="border-4 border-[#FDDDD7] bg-[#FEF7F6] grid grid-cols-4 p-4 gap-4">
                    <div className="flex items-center justify-center text-center border-2 border-[#FE7332] bg-[#F99779] text-white py-5">职<br />业<br />规<br />划</div>
                    <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] text-center justify-center flex p-1"><p className='font-bold flex items-center '>学生实习推荐对接</p></button>
                    <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] text-center justify-center flex p-1"><p className='font-bold flex items-center '>学生就职推荐对接</p></button>
                    <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] text-center justify-center flex p-1"><p className='font-bold flex items-center '>跨境创业指导</p></button>
                </div>
            </div>

            <div className="my-3 text-right">
                <button className='btn btn-soft btn-info text-white mb-1'>用人企业进入</button>
                <div className="border-4 border-[#4dbfec] bg-[#74c8e975] grid grid-cols-4 p-4 gap-4">
                    <div className="flex items-center justify-center text-center border-2 border-[#2ed6ec] bg-[#26b3c5] text-white py-5">人<br />才<br />智<br />库</div>
                    <button className="border border-[#2ed6ec] bg-[#55eafd] hover:bg-[#4ac6d6] text-center justify-center flex p-1"><p className='font-bold flex items-center '>企业招聘</p></button>
                    <button className="border border-[#2ed6ec] bg-[#55eafd] hover:bg-[#4ac6d6] text-center justify-center flex p-1"><p className='font-bold flex items-center '>初创项目对接</p></button>
                    <button className="border border-[#2ed6ec] bg-[#55eafd] hover:bg-[#4ac6d6] text-center justify-center flex p-1"><p className='font-bold flex items-center '>合伙创投对接</p></button>
                </div>
            </div>
            

              <div className="my-3 text-right">
                <button className='btn btn-soft btn-info text-white mb-1'>点击进入</button>
                <div className="border-4 border-[#4dbfec] bg-[#74c8e975] grid grid-cols-4 p-4 gap-4">
                    <div className="flex items-center justify-center text-center border-2 border-[#2ed6ec] bg-[#26b3c5] text-white py-5">智<br />学<br />乐<br />行</div>
                    <button className="border border-[#2ed6ec] bg-[#55eafd] hover:bg-[#4ac6d6] text-center justify-center flex p-1"><p className='font-bold flex items-center '>积累积分</p></button>
                    <button className="border border-[#2ed6ec] bg-[#55eafd] hover:bg-[#4ac6d6] text-center justify-center flex p-1"><p className='font-bold flex items-center '>积分兑换</p></button>
                    <button className="border border-[#2ed6ec] bg-[#55eafd] hover:bg-[#4ac6d6] text-center justify-center flex p-1"><p className='font-bold flex items-center '>学习帮扶带</p></button>
                </div>
            </div>

        </div>
    );
};

export default ChoosePlan;