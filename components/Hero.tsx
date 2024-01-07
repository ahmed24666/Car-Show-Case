"use client";
import React, { use } from 'react'
import CustomBtn from "./CustomBtn";
import Image from 'next/image';

const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find ,Book ,Or Rent A Car -- Quickly And Easily
        </h1>
        <p className="hero__subtitle">
          Streemtime your car rental experience with our effortless booking process .
        </p>
        <CustomBtn title="Explore Cars" containerStyles="bg-primary-blue text-white rounded-full mt-10 py-2 px-3" handleClick={handleScroll} />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" fill className='object-contain' alt="hero"/>
        </div>
          <div className="hero__image-overlay"/>
      </div>
    </div>
  )
}

export default Hero