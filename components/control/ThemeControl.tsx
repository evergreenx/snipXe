import React from "react";
import ThemeSelect from "../ThemeSelect";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/sm/store";
import {
  controlSliceState,
  handleOSActiveUpdate,
  handleOSUpdate,
} from "@/sm/features/control/controlSlice";

import { Switch } from "@/components/ui/switch";

export default function ThemeControl() {
  const themes = [
    { name: "Abyss", value: "abyss" },
    // { name: 'Atom Dark', value: 'prism-atom-dark' },
    // { name: 'Base16 Ateliersulphurpool Light', value: 'prism-base16-ateliersulphurpool.light' },
    // { name: 'CB', value: 'prism-cb' },
    // { name: 'Coldark Cold', value: 'prism-coldark-cold' },
    // { name: 'Coldark Dark', value: 'prism-coldark-dark' },
    // { name: 'Coy Without Shadows', value: 'prism-coy-without-shadows' },
    { name: "Darcula", value: "darcula" },
    { name: "Dracula", value: "dracula" },
    // { name: 'Duotone Dark', value: 'prism-duotone-dark' },
    // { name: 'Duotone Earth', value: 'prism-duotone-earth' },
    // { name: 'Duotone Forest', value: 'prism-duotone-forest' },
    // { name: 'Duotone Light', value: 'prism-duotone-light' },
    // { name: 'Duotone Sea', value: 'prism-duotone-sea' },
    // { name: 'Duotone Space', value: 'prism-duotone-space' },
    // { name: 'Ghcolors', value: 'prism-ghcolors' },
    // { name: 'Gruvbox Dark', value: 'prism-gruvbox-dark' },
    // { name: 'Gruvbox Light', value: 'prism-gruvbox-light' },
    // { name: 'Holi Theme', value: 'prism-holi-theme' },
    // { name: 'Hopscotch', value: 'prism-hopscotch' },
    // { name: 'Laserwave', value: 'prism-laserwave' },
    // { name: 'Lucario', value: 'prism-lucario' },
    // { name: 'Material Dark', value: 'prism-material-dark' },
    // { name: 'Material Light', value: 'prism-material-light' },
    // { name: 'Material Oceanic', value: 'prism-material-oceanic' },
    // { name: 'Night Owl', value: 'prism-night-owl' },
    // { name: 'Nord', value: 'prism-nord' },
    // { name: 'One Dark', value: 'prism-one-dark' },
    // { name: 'One Light', value: 'prism-one-light' },
    // { name: 'Pojoaque', value: 'prism-pojoaque' },
    // { name: 'Shades of Purple', value: 'prism-shades-of-purple' },
    // { name: 'Solarized Dark Atom', value: 'prism-solarized-dark-atom' },
    // { name: 'Synthwave84', value: 'prism-synthwave84' },
    // { name: 'VS', value: 'prism-vs' },
    // { name: 'VSC Dark Plus', value: 'prism-vsc-dark-plus' },
    // { name: 'Xonokai', value: 'prism-xonokai' },
    // { name: 'Z Touch', value: 'prism-z-touch' },
  ];

  const os = useSelector((state: RootState) => state.control.os);

  const osActive = useSelector((state: RootState) => state.control.os.active);

  const dispatch = useDispatch();

  const handleChangeOS = (os: controlSliceState["os"]["type"]) => {
    dispatch(handleOSUpdate(os));
  };

  const handleChangeOSActive = (os: controlSliceState["os"]["active"]) => {
    dispatch(handleOSActiveUpdate(os));
  };

  console.log(osActive)

  return (
    <div className="border-b-[0.5px] border-t-[0.5px]  border-[#414D77]">
      <div className="p-[28px]">
        <h2 className="text-base  text-secondary font-semibold">
          Choose Theme
        </h2>

        <ThemeSelect data={themes} />

        <div className="os flex space-x-[13px] items-center mt-[20px] ">
          <p className="text-sm flex space-x-[10px] items-center">
            <p className="">OS</p>

            <Switch
              onCheckedChange={() => handleChangeOSActive(!osActive)}
              defaultChecked={os.active}
            />
          </p>

          <div className="flex space-x-[4px] p-2">
            <div
              onClick={() => handleChangeOS("m")}
              className={`p-2 rounded cursor-pointer  w-[60px]
            
            
            ${os.type === "m" && "border-[0.5px] border-[#DDE1E1] "}
            
            `}
            >
              <svg
                className="  "
                width="38"
                height="14"
                viewBox="0 0 58 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H11"
                  stroke="#878787"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M35 1H25C24.4477 1 24 1.44772 24 2V12C24 12.5523 24.4477 13 25 13H35C35.5523 13 36 12.5523 36 12V2C36 1.44772 35.5523 1 35 1Z"
                  stroke="#878787"
                ></path>
                <path
                  d="M47 2L57 12"
                  stroke="#878787"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M47 12L57 2"
                  stroke="#878787"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div
              onClick={() => handleChangeOS("w")}
              className={`p-2 rounded cursor-pointer 
              w-[60px]
            
            ${os.type === "w" && "border-[0.5px] border-[#DDE1E1] "}
            
            `}
            >
              <svg
                className="cursor-pointer "
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="14"
                viewBox="0 0 54 14"
              >
                <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    fill="#FF5F56"
                    stroke="#E0443E"
                    strokeWidth=".5"
                  ></circle>
                  <circle
                    cx="26"
                    cy="6"
                    r="6"
                    fill="#FFBD2E"
                    stroke="#DEA123"
                    strokeWidth=".5"
                  ></circle>
                  <circle
                    cx="46"
                    cy="6"
                    r="6"
                    fill="#27C93F"
                    stroke="#1AAB29"
                    strokeWidth=".5"
                  ></circle>
                </g>
              </svg>
            </div>
            <div
              onClick={() => handleChangeOS("mx")}
              className={`p-2 rounded cursor-pointer w-[60px]
            
            
            ${os.type === "mx" && "border-[0.5px] border-[#DDE1E1] "}
            
            `}
            >
              <svg
                viewBox="0 0 420 100"
                width="38"
                height="14"
                focusable="false"
              >
                <circle
                  fill="transparent"
                  stroke="#ff5f57"
                  strokeWidth="16"
                  cx="50"
                  cy="50"
                  r="42"
                ></circle>
                <circle
                  fill="transparent"
                  stroke="#febc2e"
                  strokeWidth="16"
                  cx="210"
                  cy="50"
                  r="42"
                ></circle>
                <circle
                  fill="transparent"
                  stroke="#28c840"
                  strokeWidth="16"
                  cx="370"
                  cy="50"
                  r="42"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
