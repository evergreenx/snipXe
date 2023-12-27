import React from "react";
import ThemeSelect from "../ThemeSelect";
import FontSelect from "../FontSelect";

export default function FontControl() {
    const fonts = [
        {
          name: 'Arial',
          value: 'Arial, sans-serif',
        },
        {
          name: 'Times New Roman',
          value: 'Times New Roman, serif',
        },
        {
          name: 'Verdana',
          value: 'Verdana, sans-serif',
        },
        {
          name: 'Courier New',
          value: 'Courier New, monospace',
        },
        {
          name: 'Roboto',
          value: 'Roboto, sans-serif',
        },
      ];
  

  return (
    <div className="border-b-[0.5px] border-t-[0.5px]  border-[#414D77]">
      <div className="p-[28px]">
        <h2 className="text-base  text-secondary font-medium">Choose Font</h2>

        <FontSelect data={fonts} />
      </div>
    </div>
  );
}
