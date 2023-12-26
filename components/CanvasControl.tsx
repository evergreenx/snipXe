"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToggle ,useMediaQuery } from "usehooks-ts";

import BGControl from "./control/BGControl";
import ThemeControl from "./control/ThemeControl";
import LanguageControl from "./control/LanguageControl";
import PaddingControl from "./control/PaddingControl";

function CanvasControl() {
  const [value, toggle, setValue] = useToggle(false);

  const matches = useMediaQuery('(min-width: 768px)')

  return (
    <div className="">
      <AnimatePresence>
        {value && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`w-[323px] pt-[24px] absolute lg:relative  right-0  mt-[120px] pb-[105px] scroll-x overflow-y-scroll bg-primary h-full text-white `}
          >
            <div
              className="toogle w-[10px] cursor-pointer px-[28px]"
              onClick={() => {
                setValue((x) => !x);
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="#DDE1E1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="control">
              <div className="p-[28px]">
                <div className="name mb-[20px]  flex space-x-[8px]">
                  <input
                    type="text"
                    placeholder="snipx name"
                    defaultValue={"UNTITLED SNIPX"}
                    className=" text-[#DDE1E1] w-[80%]   border-b font-semibold text-lg bg-transparent outline-none border-b-white"
                  />

                  <svg
                    className="cursor-pointer"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 8.83332L11.6667 5.49999M2.08331 18.4167L4.90362 18.1033C5.24819 18.065 5.42048 18.0459 5.58152 17.9937C5.72439 17.9475 5.86035 17.8821 5.98572 17.7995C6.12702 17.7063 6.2496 17.5837 6.49475 17.3386L17.5 6.33332C18.4205 5.41285 18.4205 3.92046 17.5 2.99999C16.5795 2.07951 15.0871 2.07951 14.1667 2.99999L3.16142 14.0052C2.91627 14.2504 2.79369 14.3729 2.70051 14.5142C2.61784 14.6396 2.55249 14.7756 2.50624 14.9185C2.45411 15.0795 2.43497 15.2518 2.39668 15.5964L2.08331 18.4167Z"
                      stroke="#7789A9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <BGControl />
              </div>

              <ThemeControl />

              <LanguageControl />

              <PaddingControl />
     

            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {!value && (
        <div className="bg-primary w-[76px] right-0 flex justify-center fixed top-[120px] h-[68px] pt-[24px]">
          {" "}
          <div
            className="toogle cursor-pointer"
            onClick={() => {
              setValue((x: boolean) => !x);
            }}
          >
            {" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.82936 16.1427L8.3164 17.238C8.46118 17.5641 8.69747 17.8412 8.99659 18.0356C9.29571 18.23 9.64483 18.3335 10.0016 18.3334C10.3583 18.3335 10.7075 18.23 11.0066 18.0356C11.3057 17.8412 11.542 17.5641 11.6868 17.238L12.1738 16.1427C12.3472 15.754 12.6388 15.43 13.0071 15.2168C13.3778 15.0029 13.8066 14.9119 14.2321 14.9566L15.4238 15.0834C15.7785 15.1209 16.1365 15.0547 16.4544 14.8929C16.7722 14.731 17.0363 14.4803 17.2145 14.1714C17.393 13.8626 17.4781 13.5086 17.4593 13.1525C17.4406 12.7963 17.3189 12.4532 17.109 12.1649L16.4034 11.1955C16.1522 10.8477 16.018 10.4291 16.0201 10.0001C16.02 9.57224 16.1555 9.15537 16.4071 8.80934L17.1127 7.8399C17.3226 7.55154 17.4443 7.20847 17.463 6.85231C17.4818 6.49615 17.3967 6.1422 17.2183 5.83341C17.04 5.52444 16.7759 5.27382 16.4581 5.11194C16.1402 4.95005 15.7822 4.88386 15.4275 4.92138L14.2358 5.04823C13.8103 5.09292 13.3815 5.00185 13.0108 4.78804C12.6418 4.57363 12.3501 4.24788 12.1775 3.85749L11.6868 2.76212C11.542 2.43606 11.3057 2.15901 11.0066 1.96458C10.7075 1.77015 10.3583 1.66669 10.0016 1.66675C9.64483 1.66669 9.29571 1.77015 8.99659 1.96458C8.69747 2.15901 8.46118 2.43606 8.3164 2.76212L7.82936 3.85749C7.6568 4.24788 7.36509 4.57363 6.99603 4.78804C6.62538 5.00185 6.19659 5.09292 5.77103 5.04823L4.57566 4.92138C4.22094 4.88386 3.86294 4.95005 3.54509 5.11194C3.22724 5.27382 2.96317 5.52444 2.78492 5.83341C2.60644 6.1422 2.52141 6.49615 2.54014 6.85231C2.55888 7.20847 2.68058 7.55154 2.89048 7.8399L3.59603 8.80934C3.84765 9.15537 3.98315 9.57224 3.98307 10.0001C3.98315 10.4279 3.84765 10.8448 3.59603 11.1908L2.89048 12.1603C2.68058 12.4486 2.55888 12.7917 2.54014 13.1479C2.52141 13.504 2.60644 13.858 2.78492 14.1667C2.96335 14.4756 3.22744 14.726 3.54525 14.8879C3.86306 15.0498 4.22096 15.1161 4.57566 15.0788L5.76733 14.9519C6.19289 14.9072 6.62167 14.9983 6.99233 15.2121C7.36277 15.4259 7.65583 15.7517 7.82936 16.1427Z"
                stroke="#DDE1E1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0001 12.5001C11.3808 12.5001 12.5001 11.3808 12.5001 10.0001C12.5001 8.61937 11.3808 7.50008 10.0001 7.50008C8.61939 7.50008 7.5001 8.61937 7.5001 10.0001C7.5001 11.3808 8.61939 12.5001 10.0001 12.5001Z"
                stroke="#DDE1E1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default CanvasControl;
