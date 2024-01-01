"use client";
import { RootState } from "@/sm/store";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ChromePicker, ColorResult, SketchPicker } from "react-color";
import { useOnClickOutside } from "usehooks-ts";

import { handleBgUpdate } from "@/sm/features/control/controlSlice";
import { useToggle } from "usehooks-ts";

import ColorPicker from "react-best-gradient-color-picker";

export default function BGControl() {
  const [value, toggle, setValue] = useToggle(false);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [color, setColor] = useState("rgba(255,255,255,1)");

  const handleClickOutside = () => {
    setValue(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const handleChangeBgColor = (color:string) => {
    dispatch(handleBgUpdate(color));

    // console.log(color)
  };

  const colorBG = useSelector((state: RootState) => state.control.bg);

  return (
    <div className="">
      <div
        className=" flex space-x-[8px] items-center
        border p-[6px] rounded  border-[#DDE1E1]  w-[200px]
        "
      >
        <div
          onClick={() => {
            setValue((x) => !x);
          }}
          style={{
            background: colorBG,
          }}
          className={` w-[28px] h-[28px] cursor-pointer`}
        ></div>

        <p className="text-base lowercase font-semibold text-[#DDE1E1]">
          {/* {colorBG} */}
        </p>
      </div>

      {value ? (
        <div ref={ref} className="bg-white p-3 rounded-md absolute">
          <ColorPicker 
      height={200}
      width={220}
      className={''}
      hideEyeDrop={false}
      hideGradientAngle={true}
      hideGradientStop={true}
      hideGradientControls={true}
      hideColorGuide={true}
          
          value={colorBG} onChange={handleChangeBgColor} />
        </div>
      ) : null}
    </div>
  );
}
