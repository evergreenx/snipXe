import { RootState } from "@/sm/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ColorResult, SketchPicker } from "react-color";

import { handleBgUpdate } from "@/sm/features/control/controlSlice";
import { useToggle } from "usehooks-ts";

export default function BGControl() {
  const [value, toggle, setValue] = useToggle(false);

  const dispatch = useDispatch();

  const handleChangeBgColor = (color: ColorResult) => {
    dispatch(handleBgUpdate(color.hex));
  };

  const colorBG = useSelector((state: RootState) => state.control.bg?.hex);

  return (
    <div>
     


{
    value ? (

        <SketchPicker
        color={colorBG}
        onChange={(color) => handleChangeBgColor(color)}
      />
    ) : ( <div
        className=" flex mb-[24px]
        
        border p-[6px] rounded  border-[#DDE1E1]
        
        "
      >
        <div

onClick={() => {
    setValue((x) => !x);
  }}
          style={{
            backgroundColor: colorBG,
          }}
          className={`bg w-[28px] h-[28px] cursor-pointer  `}
        ></div>
      </div>)
}
      
    </div>
  );
}
