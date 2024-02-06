"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CarObjectProps } from "@/types";
import { CallActionBtn, CarMoreDetails } from ".";
import { calculateCarRent } from "@/utils";
import CarFeature from "./CarFeature";

type CarCardProps = {
  car: CarObjectProps;
};
const CarCard = ({ car }: CarCardProps) => {
  const carRentPrice = calculateCarRent(car.city_mpg, car.year);
  const [isOpen, setIsOpen] = useState(false);
  const carFeatrues = [
    {
      image: "/steering-wheel.svg",
      title: car.transmission === "a" ? "Automatic" : "Manual",
    },
    {
      image: "/tire.svg",
      title: car.drive.toUpperCase(),
    },
    { image: "/gas.svg", title: `${car.city_mpg} MPG` },
  ];
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card_content-title">
          {car.make} {car.model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRentPrice}
        <span className="self-end text-[14px] font-medium"> /day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car image"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt2">
        {[...Array(3)].map((_, i) => (
          <CarFeature key={i} {...carFeatrues[i]} />
        ))}
        <div className="car-card__btn-container">
          <CallActionBtn
            title="View More"
            containerStyle="w-full bg-primary-blue text-white rounded-full mt-10 py-[16px]"
            trailingIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarMoreDetails
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
