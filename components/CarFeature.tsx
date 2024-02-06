import React from "react";
import Image from "next/image";

type FeatureProps = {
  image: string;
  title: string;
};

const CarFeature = ({ image, title }: FeatureProps) => {
  return (
    <div className="flex group-hover:invisible w-full justify-between text-grey">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src={image} alt="steering wheel" width={20} height={20} />
        <p className="text-[14px]">{title}</p>
      </div>
    </div>
  );
};

export default CarFeature;
