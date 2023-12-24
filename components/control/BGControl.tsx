"use client";
import { RootState } from "@/sm/store";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ChromePicker, ColorResult, SketchPicker } from "react-color";
import { useOnClickOutside } from "usehooks-ts";

import { handleBgUpdate } from "@/sm/features/control/controlSlice";
import { useToggle } from "usehooks-ts";

export default function BGControl() {
  const [value, toggle, setValue] = useToggle(false);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleClickOutside = () => {
    setValue(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const handleChangeBgColor = (color: ColorResult) => {
    dispatch(handleBgUpdate(color.hex));
  };

  const colorBG = useSelector((state: RootState) => state.control.bg?.hex);

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
            backgroundColor: colorBG,
          }}
          className={` w-[28px] h-[28px] cursor-pointer`}
        ></div>




        <p className="text-base lowercase font-semibold text-[#DDE1E1]">
            {colorBG}
        </p>
      </div>

      {value ? (
        <div ref={ref} className="">
          <ChromePicker
            color={colorBG}
            onChange={(color) => handleChangeBgColor(color)}
          />
        </div>
      ) : null}
    </div>
  );
}
