import React from "react";
import VPaddingSelect from "../VPaddingSelect";
import HPaddingSelect from "../HPaddingSelect";
import LineHeightSelect from "../LineHeightSelect";

export default function LineHeight() {
  return (
    <div className="  mt-[20px]">
      <div className="flex space-x-5 items-center">
        <h2 className="text-base text-secondary font-medium">Line Height</h2>

<LineHeightSelect />
    
      </div>
    </div>
  );
}
