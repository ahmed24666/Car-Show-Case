"use client";
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';
const CustomBtn = ({title,containerStyles,handleClick}:CustomButtonProps) => {
  return (
    <button disabled={false} type={"button"} className={`custom-btn`} onClick={handleClick} >
        <span className={`flex-1 ${containerStyles}`}>
            {title}
        </span>
        
    </button>
  )
}

export default CustomBtn