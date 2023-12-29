import React from "react";
import ThemeSelect from "../ThemeSelect";
import FontSelect from "../FontSelect";
import FontSizeControl from "./FontSizeControl";
import LineHeight from "./LineHeightControl";

export default function FontControl() {
  const fonts = [
    {
      name: "Fira Sans",
      value: "'__Fira_Sans_22278b', '__Fira_Sans_Fallback_22278b'",
    },
    {
      name: "Nunito",
      value: "'__Nunito_1c0e92', '__Nunito_Fallback_1c0e92'",
    },
    {
      name: "Raleway",
      value: "'__Raleway_c3f4a3', '__Raleway_Fallback_c3f4a3'",
    },
    {
      name: "Roboto",
      value: "'__Roboto_a789c4', '__Roboto_Fallback_a789c4'",
    },

    {
      name: "Rubik",
      value: "'__Rubik_a7fb71', '__Rubik_Fallback_a7fb71'",
    },
    {
      name: "Poppins",
      value: "'__Poppins_8c1529', '__Poppins_Fallback_8c1529'",
    },
    {
      name: "Source Code Pro",
      value: "'__Source_Code_Pro_388350', '__Source_Code_Pro_Fallback_388350'",
    },
    {
      name: "Ubuntu",
      value: "'__Ubuntu_5449ac', '__Ubuntu_Fallback_5449ac'",
    },
  ];

  return (
    <div className="border-b-[0.5px] border-t-[0.5px]  border-[#414D77]">
      <div className="p-[28px]">
        <h2 className="text-base  text-secondary font-medium">Text</h2>

        <FontSelect data={fonts} />

      <FontSizeControl />



      <LineHeight />

      </div>


    </div>
  );
}
