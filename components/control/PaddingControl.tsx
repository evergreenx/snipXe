import React from "react";
import VPaddingSelect from "../VPaddingSelect";
import HPaddingSelect from "../HPaddingSelect";

export default function PaddingControl() {
  return (
    <div className="border-b-[0.5px] border-t-[0.5px]  border-[#414D77]">
      <div className="p-[28px]">
        <h2 className="text-base text-secondary font-medium">Padding</h2>

        <div className="padding flex justify-between mt-[16px]">
          <div className="pver flex items-center space-x-[8px]">
            <p className="font-semibold text-base">V</p>

            <VPaddingSelect />
          </div>

          <div className="pver flex items-center space-x-[8px]">
            <p className="font-semibold text-base">H</p>

            <HPaddingSelect />
          </div>
        </div>
      </div>
    </div>
  );
}
