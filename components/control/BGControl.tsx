"use client";
import { RootState } from "@/sm/store";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ChromePicker, ColorResult, SketchPicker } from "react-color";
import { useOnClickOutside } from "usehooks-ts";

import { handleBgUpdate } from "@/sm/features/control/controlSlice";
import { useToggle } from "usehooks-ts";

import ColorPicker from "react-gcolor-picker";
import BGImage from "./BGImage";

export default function BGControl() {
  const [value, toggle, setValue] = useToggle(false);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleClickOutside = () => {
    setValue(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const handleChangeBgColor = (color: string) => {
    dispatch(handleBgUpdate(color));
  };

  const colorBG = useSelector((state: RootState) => state.control.bg);

  return (
    <div className=" flex items-center space-x-[30px]">
      <div
        className={` flex space-x-[8px] items-center
       p-[6px]    ${
         colorBG.active === "c" ? " border-[#DDE1E1] rounded   border" : null
       }     w-[45px]
        `}
      >
        <div
          onClick={() => {
            setValue((x) => !x);
          }}
          style={{
            background: colorBG.c,
          }}
          className={` w-[28px] h-[28px] cursor-pointer`}
        ></div>
      </div>

      <div
        className={`
      
      p-[6px]    ${
        colorBG.active === "i" ? " border-[#DDE1E1] rounded   border" : null
      }     w-[45px]
      `}
      >
        <BGImage />
      </div>

      {value ? (
        <div
          ref={ref}
          className="bg-white  rounded-md absolute top-32 left-0 z-50"
        >
          <ColorPicker
            showAlpha={false}
            gradient
            value={colorBG.c}
            onChange={handleChangeBgColor}
          />
        </div>
      ) : null}
    </div>
  );
}
