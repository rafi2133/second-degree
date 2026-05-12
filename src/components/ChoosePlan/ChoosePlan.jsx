import React from 'react';

const ChoosePlan = () => {
    return (
        <div className="w-full md:w-10/12 mx-auto md:ml-20 px-4 sm:px-6 lg:px-8 py-5 border-2 my-4 ">
            {/* 1. 学习计划 */}
            <div className="mb-8">
                <div className="text-right mb-1">
                    <button className="btn btn-soft btn-error text-white">点击报名</button>
                </div>
                <div className="border-4 border-[#FDDDD7] bg-[#FEF7F6] p-4 rounded-lg">
                    {/* Mobile: stack, tablet: first col & rest as grid */}
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                        {/* 左侧竖排文字 */}
                        <div className="flex items-center justify-center text-center border-2 border-[#FE7332] bg-[#F99779] text-white py-5 md:py-0 md:flex-col">
                            <span className="md:block hidden">学<br />习<br />计<br />划</span>
                            <span className="md:hidden">学习计划</span>
                        </div>
                        {/* 按钮区域：小屏2列，中屏3列，大屏自动填满剩余6格 */}
                        <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                            <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] p-2 rounded">
                                <p className="font-bold text-center">提供专属自学包</p>
                            </button>
                            <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] p-2 rounded">
                                <p className="font-bold text-center">制定学习计划</p>
                            </button>
                            <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] p-2 rounded">
                                <p className="font-bold text-center">每周日下发任务</p>
                            </button>
                            <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] p-2 rounded">
                                <p className="font-bold text-center">次周五前完成任务</p>
                            </button>
                            <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] p-2 rounded">
                                <p className="font-bold text-center">老师审评任务卡</p>
                            </button>
                            <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] p-2 rounded">
                                <p className="font-bold text-center">1V1沟通辅导</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. 职业规划 */}
            <div className="mb-8">
                <div className="text-right mb-1">
                    <button className="btn btn-soft btn-error text-white">点击报名</button>
                </div>
                <div className="border-4 border-[#FDDDD7] bg-[#FEF7F6] p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="flex items-center justify-center text-center border-2 border-[#FE7332] bg-[#F99779] text-white py-5 md:py-0 md:flex-col">
                            <span className="md:block hidden">职<br />业<br />规<br />划</span>
                            <span className="md:hidden">职业规划</span>
                        </div>
                        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] p-2 rounded">
                                <p className="font-bold text-center">学生实习推荐对接</p>
                            </button>
                            <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] p-2 rounded">
                                <p className="font-bold text-center">学生就职推荐对接</p>
                            </button>
                            <button className="border border-[#FDDDD7] bg-[#FEEFEC] hover:bg-[#d8aca3] p-2 rounded">
                                <p className="font-bold text-center">跨境创业指导</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. 人才智库 */}
            <div className="mb-8">
                <div className="text-right mb-1">
                    <button className="btn btn-soft btn-info text-white">用人企业进入</button>
                </div>
                <div className="border-4 border-[#4dbfec] bg-[#74c8e975] p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="flex items-center justify-center text-center border-2 border-[#2ed6ec] bg-[#26b3c5] text-white py-5 md:py-0 md:flex-col">
                            <span className="md:block hidden">人<br />才<br />智<br />库</span>
                            <span className="md:hidden">人才智库</span>
                        </div>
                        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button className="border border-[#2ed6ec] bg-[#55eafd] hover:bg-[#4ac6d6] p-2 rounded">
                                <p className="font-bold text-center">企业招聘</p>
                            </button>
                            <button className="border border-[#2ed6ec] bg-[#55eafd] hover:bg-[#4ac6d6] p-2 rounded">
                                <p className="font-bold text-center">初创项目对接</p>
                            </button>
                            <button className="border border-[#2ed6ec] bg-[#55eafd] hover:bg-[#4ac6d6] p-2 rounded">
                                <p className="font-bold text-center">合伙创投对接</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. 智学乐行 */}
            <div className="mb-8">
                <div className="text-right mb-1">
                    <button className="btn btn-soft btn-info text-white">点击进入</button>
                </div>
                <div className="border-4 border-[#4dbfec] bg-[#74c8e975] p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="flex items-center justify-center text-center border-2 border-[#2ed6ec] bg-[#26b3c5] text-white py-5 md:py-0 md:flex-col">
                            <span className="md:block hidden">智<br />学<br />乐<br />行</span>
                            <span className="md:hidden">智学乐行</span>
                        </div>
                        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button className="border border-[#2ed6ec] bg-[#55eafd] hover:bg-[#4ac6d6] p-2 rounded">
                                <p className="font-bold text-center">积累积分</p>
                            </button>
                            <button className="border border-[#2ed6ec] bg-[#55eafd] hover:bg-[#4ac6d6] p-2 rounded">
                                <p className="font-bold text-center">积分兑换</p>
                            </button>
                            <button className="border border-[#2ed6ec] bg-[#55eafd] hover:bg-[#4ac6d6] p-2 rounded">
                                <p className="font-bold text-center">学习帮扶带</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoosePlan;