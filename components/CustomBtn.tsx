"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";
const CustomBtn = ({
  title,
  btnType,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${containerStyles}`}>{title}</span>
    </button>
  );
};

export default CustomBtn;
