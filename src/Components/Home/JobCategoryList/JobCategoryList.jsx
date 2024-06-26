import img1 from '../../../assets/icons/accounts.png'
import img2 from '../../../assets/icons/creative.png'
import img3 from '../../../assets/icons/marketing.png'
import img4 from '../../../assets/icons/chip.png'

const JobCategoryList = () => {
    return (
        <div className="w-[90%] max-w-[1440px] mx-auto my-[130px]">
            <div className="w-[50%] max-w-[1000px] mx-auto text-center mb-[32px]">
                <h2 className='text-[48px] font-bold'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4  gap-[25px]">

                <div className='bg-purple-100 rounded-xl p-[54px]'>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <h2 className='text-black text-[20px] mt-[32px]'>Account & Finance</h2>
                    <p className=' mt-[8px] text-[#A3A3A3]    font-bold '>Account & Finance</p>
                </div>
                <div className='bg-purple-100 rounded-xl p-[54px]'>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <h2 className='text-black text-[20px] mt-[32px]'>Account & Finance</h2>
                    <p className=' mt-[8px] text-[#A3A3A3] font-semibold'>Account & Finance</p>
                </div>
                <div className='bg-purple-100 rounded-xl p-[54px]'>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <h2 className='text-black text-[20px] mt-[32px]'>Account & Finance</h2>
                    <p className=' mt-[8px] text-[#A3A3A3] font-semibold'>Account & Finance</p>
                </div>
                <div className='bg-purple-100 rounded-xl p-[54px]'>
                    <div>
                        <img src={img4} alt="" />
                    </div>
                    <h2 className='text-black text-[20px] mt-[32px]'>Account & Finance</h2>
                    <p className=' mt-[8px] text-[#A3A3A3] font-semibold'>Account & Finance</p>
                </div>

            </div>
        </div>
    );
};

export default JobCategoryList;