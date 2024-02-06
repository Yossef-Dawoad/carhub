"use client";
import { CarObjectProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Image from "next/image";

type CarMoreDetailsProps = {
  isOpen: boolean;
  closeModel: () => void;
  car: CarObjectProps;
};
const CarMoreDetails = ({ isOpen, closeModel, car }: CarMoreDetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={closeModel}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel
                className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xsl transition-all flex flex-col gap-5`}
              >
                <button
                  type="button"
                  onClick={closeModel}
                  className="
                   absolute top-5 right-5 z-10 w-fit p-2 bg-primary-blue-100 rounded-md"
                >
                  <Image
                    src={"/close.svg"}
                    alt="close Model"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
                <div className="flex flex-1 flex-col gap-3">
                  <div className="relative  w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <Image
                      src={"/hero.png"}
                      alt="car image"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <div className="flex gap-3">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 relative w-full h-24 rounded-lg bg-primary-blue-100"
                      >
                        <Image
                          src={"/hero.png"}
                          alt="car image"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarMoreDetails;
