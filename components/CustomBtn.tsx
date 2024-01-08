"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";
const CustomBtn = ({
  title,
  btnType,
  containerStyles,
  textStyles,
  rightIcon,
  isDisabled,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            width={20}
            height={20}
            alt="right-icon"
            className="self-center"
          />
        </div>
      )}
    </button>
  );
};

export default CustomBtn;
