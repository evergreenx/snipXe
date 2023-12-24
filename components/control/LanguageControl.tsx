import React from "react";
import SelectDemo from "../select";

export default function LanguageControl() {
    const popularLanguages = [
        { name: 'JavaScript', value: 'javascript' },
        { name: 'Python', value: 'python' },
        { name: 'Java', value: 'java' },
        { name: 'C++', value: 'cpp' },
        { name: 'C#', value: 'csharp' },
      ];
      
  return (
    <div className="border-b border-t border-[#7789A9]">

<div className="p-[28px]">
      <h2 className="text-lg  text-secondary font-medium">Choose Language</h2>


      <SelectDemo  data={popularLanguages}/>
    </div>
    </div>
   
  );
}
