"use client";

import React from "react";
import Image from "next/image";
import { caBtnProps } from "@/types";

const CallActionBtn = ({
  title,
  type,
  containerStyle,
  trailingIcon,
  handleClick,
}: caBtnProps) => {
  return (
    <button
      disabled={false}
      type={type}
      className={`ca-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
      {trailingIcon && (
        <div className="relative w-6 h6">
          <Image
            src={trailingIcon}
            alt="trailing icon"
            width={20}
            height={20}
          />
        </div>
      )}
    </button>
  );
};

export default CallActionBtn;
