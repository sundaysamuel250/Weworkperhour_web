import React from 'react'
import JobSearch from '../home/components/JobSearch'
import PaginationPage from './components/pagination/PaginationPage'
import { BiChevronRight } from 'react-icons/bi'

const FindJob = () => {
  return (
    <>
   <div className='mt-[4rem] bg-[#f5f5f5] py-[4rem]'>
    <div className='flex gap-[1.5rem] xl:ml-[8rem] lg:ml-[8rem] md:ml-[2rem] ml-[2rem]'>
      <h2 className='flex gap-[2px] font-sans lg:text-[18px] md:text-[16px] sm:text-[12px] justify-center items-center text-[#2aa100]'>Home <BiChevronRight size={25} /></h2>
      <h2 className='lg:text-[18px] md:text-[16px] sm:text-[12px] text-[#646A73]'>Find Jobs</h2>
    </div>
   <JobSearch />
   </div>
    <PaginationPage />
    </>
  )
}

export default FindJob