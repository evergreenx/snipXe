"use client";

import Sidebar from "@/components/sidebar";
import React, {
  ReactHTMLElement,
  Ref,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMediaQuery } from "usehooks-ts";

import CodeMirror, { Extension, useCodeMirror } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

import { dracula } from "@uiw/codemirror-theme-dracula";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { abyss } from "@uiw/codemirror-theme-abyss";
import { EditorView } from "@codemirror/view";
import {
  Source_Code_Pro,
  Ubuntu,
  Poppins,
  Fira_Sans,
  Rubik,
  Nunito,
  Roboto,
  Raleway,
} from "next/font/google";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/sm/store";
import { handleSetRef } from "@/sm/features/control/downloadSlice";
import { handleValueUpdate } from "@/sm/features/control/controlSlice";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const sourcePro = Source_Code_Pro({ subsets: ["latin"], display: "swap" });

const ubuntu = Ubuntu({ subsets: ["latin"], display: "swap", weight: "400" });

const raleway = Raleway({ subsets: ["latin"], display: "swap", weight: "400" });

const roboto = Roboto({ subsets: ["latin"], display: "swap", weight: "400" });

const poppins = Poppins({ subsets: ["latin"], display: "swap", weight: "400" });

const firasans = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const rubik = Rubik({ subsets: ["latin"], display: "swap", weight: "400" });
const nunito = Nunito({ subsets: ["latin"], display: "swap", weight: "400" });

export default function page() {
  const languageMode = useSelector((state: RootState) => state.control.mode);
  const selectedTheme = useSelector((state: RootState) => state.control.theme);
  const os = useSelector((state: RootState) => state.control.os);

  const selectedLineHeight = useSelector(
    (state: RootState) => state.control.lineH
  );

  const selectedFont = useSelector((state: RootState) => state.control.font);

  console.log(selectedFont);
  let font;

  // font family switch
  switch (selectedFont) {
    case "Poppins":
      font = poppins.style.fontFamily;

      break;
    case "Roboto":
      font = roboto.style.fontFamily;

      break;

    case "Rubik":
      font = rubik.style.fontFamily;

      break;

    case "Raleway":
      font = raleway.style.fontFamily;

      break;

    case "Ubuntu":
      font = ubuntu.style.fontFamily;

      break;

    case "Nunito":
      font = nunito.style.fontFamily;

      break;

    case "Fira Sans":
      font = firasans.style.fontFamily;

      break;

    case "Source Code Pro":
      font = sourcePro.style.fontFamily;

      break;

    case "Roboto":
      font = roboto.style.fontFamily;

      break;
    // Add other cases for different language modes as needed

    default:
      // Default to JavaScript if language mode is not recognized
      font = sourcePro.style.fontFamily;

      break;
  }

  const ds = useSelector((state: RootState) => state.control.ds);


  const FontSizeTheme = EditorView.theme({
    "&": {
      fontSize: "13.5px",

      boxShadow: ds ? "0 20px 68px rgba(0, 0, 0, 0.55)": '',
    },
    ".cm-content": {},
    ".cm-gutters": {
      // minHeight: "200px",
    },
    ".cm-scroller": {
      overflow: "auto",

      fontFamily: font,

      lineHeight: selectedLineHeight,
    },
  });

  let extensions: Extension[] | undefined = [];

  // language switch
  switch (languageMode) {
    case "javascript":
      extensions = [javascript(), EditorView.lineWrapping, FontSizeTheme];

      break;
    case "python":
      extensions = [python(), EditorView.lineWrapping, FontSizeTheme];

      break;
    // Add other cases for different language modes as needed

    default:
      // Default to JavaScript if language mode is not recognized
      extensions = [javascript({ jsx: true })];

      break;
  }

  let theme: Extension | undefined = undefined;

  switch (selectedTheme) {
    case "dracula":
      theme = dracula;

      break;

    case "darcula":
      theme = darcula;

      break;
    case "abyss":
      theme = abyss;

      break;
    // Add other cases for different language modes as needed

    default:
      // Default to JavaScript if language mode is not recognized
      theme = dracula;

      break;
  }

  const editor: Ref<any> = useRef();

  const Padding = useSelector((state: RootState) => state.control.p);

  const value = useSelector((state: RootState) => state.control.value);

  const { setContainer, state, setView, setState } = useCodeMirror({
    container: editor.current,

    extensions,

    basicSetup: {
      lineNumbers: false,
      highlightActiveLine: false,
      highlightActiveLineGutter: false,
      foldGutter: false,
    },
    value: value,
    width: "auto",

    height: "auto",
    theme: theme,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current, languageMode, selectedTheme, selectedFont]);

  // console.log(selectedFont);
  const preRef = useRef(null);

  const BG = useSelector((state: RootState) => state.control.bg);

  const osActive = useSelector((state: RootState) => state.control.os.active);

  const coderefstate = useSelector((state: RootState) => state.download.ref);
  // const codeRef = useRef<null | (() => void)>(coderefstate);

  const codeRef: React.MutableRefObject<string | null | any> = useRef<
    string | null | any
  >(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (codeRef.current) {
      dispatch(handleSetRef(codeRef.current));
    }
  }, [codeRef]);


  console.log(ds);

  return (
    <div className="  h-screen flex justify-center items-center   p-3 ">
      <>
        <div
          ref={codeRef}
          style={{
            background: BG,
            padding: `${Padding.v}px ${Padding.h}px`,

            // minHeight: "90px",
          }}
          className={` w-full mx-auto my-0    `}
        >
          {/* code mirror */}
          <div className="relative mx-auto max-w-[100%] ">
            {/* OS */}
            {osActive && (
              <div className="os    z-50 ml-[14px]">
                {os.type === "m" ? (
                  <div className="os absolute top-4  right-4 z-50 ml-[14px]">
                    <svg
                      width="58"
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
                ) : os.type === "w" ? (
                  <div className="os absolute top-4  z-50  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="14"
                      viewBox="0 0 54 14"
                    >
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        transform="translate(1 1)"
                      >
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
                ) : (
                  <div className="os absolute top-4 w-[55px]  z-50  ">
                    <svg viewBox="0 0 420 100" focusable="false">
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
                )}
              </div>
            )}

            <CodeMirror
              value={value}
              style={{
                // boxShadow: ds ? "0 20px 68px rgba(0, 0, 0, 0.55)" : "none",
                borderRadius: "200px",
              }}
              extensions={extensions}
              theme={theme}
              onChange={(value, viewUpdate) => {
                dispatch(handleValueUpdate(value));
              }}
            />
          </div>
        </div>
      </>
    </div>
  );
}
