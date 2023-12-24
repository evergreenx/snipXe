import React from "react";
import SelectDemo from "../select";

export default function ThemeControl() {

    const themes = [
        { name: 'Material', value: 'material' },
        { name: 'Dracula', value: 'dracula' },
        { name: 'Oceanic Next', value: 'oceanic-next' },
        { name: 'Solarized Light', value: 'solarized-light' },
        { name: 'Tomorrow Night', value: 'tomorrow-night' },
      ];
      
  return (
    <div className="border-b border-t border-[#7789A9]">

<div className="p-[28px]">
      <h2 className="text-lg  text-secondary font-medium">Choose Theme</h2>


      <SelectDemo  data={themes}/>
    </div>
    </div>
   
  );
}
