"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { ShowMoreProps } from '@/types';
import { CustomBtn } from '.';

const ShowMore = ({pageNumber,isNext}:ShowMoreProps) => {
  const router=useRouter()
  const handleNavigation=()=>{
    const searchParams = new URLSearchParams(window.location.search);
    const newLimit=(pageNumber + 1) * 10
    searchParams.set("limit", `${newLimit}`);
    const newPathName =
      window.location.pathname + "?" + searchParams.toString();
    router.push(newPathName); 
  }
    return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext&&(
            <CustomBtn 
            title="Show More" btnType="button" containerStyles="bg-primary-blue rounded-full text-white" handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore