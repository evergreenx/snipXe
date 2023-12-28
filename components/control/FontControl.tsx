import React from "react";
import ThemeSelect from "../ThemeSelect";
import FontSelect from "../FontSelect";

export default function FontControl() {
  const fonts = [
    {
      name: "Fira Sans",
      value: "'__Fira_Sans_22278b'",
    },
    {
      name: "Nunito",
      value: "'__Nunito_1c0e92'",
    },
    {
      name: "Raleway",
      value: "'__Raleway_Fallback_c3f4a3'",
    },
    {
      name: "Roboto",
      value: "'__Roboto_a789c4'",
    },

    {
      name: "Rubik",
      value: "'__Rubik_Fallback_a7fb71'",
    },
    {
      name: "Poppins",
      value: "'__Poppins_8c1529'",
    },
    {
      name: "Source Code Pro",
      value: "'__Source_Code_Pro_388350'",
    },
    {
      name: "Ubuntu",
      value: "'__Ubuntu_5449ac'",
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
