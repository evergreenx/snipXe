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

import CodeMirror, { useCodeMirror } from "@uiw/react-codemirror";
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

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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

  const FontSizeTheme = EditorView.theme({
    "&": {
      fontSize: "13.5px",
    },
    ".cm-content": {},
    ".cm-gutters": {
      // minHeight: "200px",
    },
    ".cm-scroller": {
      overflow: "auto",
      maxHeight: "600px",
      fontFamily: selectedFont,

      lineHeight: selectedLineHeight,
    },
  });

  let extensions = [];

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

  let theme = undefined;

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

  useEffect(() => {
    const scrollerElement = document.querySelector<HTMLElement>(
      ".cm-editor .cm-scroller"
    );

    // console.log(scrollerElement, "dd");

    if (scrollerElement) {
      scrollerElement.style.fontFamily = `${selectedFont}`; // Update the font family
    }
  }, [editor.current, selectedFont]);

  // console.log(selectedFont);
  const preRef = useRef(null);

  const BG = useSelector((state: RootState) => state.control.bg);

  
  const osActive = useSelector((state: RootState) => state.control.os.active);

  console.log(osActive)

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

  return (
    <div className="bg-white w-full flex items-center justify-center h-screen">
      <TransformWrapper
        initialScale={1}
        centerOnInit={true}
        // initialPositionX={200}
        // initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <TransformComponent>
              <div className="  mt-[200px]   lg:flex w-full m-[10px]  p-3 ">
                <div className="">
                  <div
                    ref={codeRef}
                    style={{
                      background: BG,
                      padding: `${Padding.v}px ${Padding.h}px`,

                      // minHeight: "90px",
                    }}
                    className={` max-w-[100%] mx-auto my-0 w-full   lg:w-[700px]`}
                  >
                    {/* code mirror */}
                    <div className="relative mx-auto max-w-[100%] ">




                      {/* OS */}
                      {
                      osActive &&   <div className="os    z-50 ml-[14px]">
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
                      }
                    
                      <CodeMirror
                        value={value}
                        extensions={extensions}
                        theme={theme}
                        onChange={(value, viewUpdate) => {
                          dispatch(handleValueUpdate(value));
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TransformComponent>

            <div className="p-2 left-0  absolute  w-[130px] m-[10px] lg:ml-[400px] bottom-0 flex space-x-2 items-center bg-primary rounded-md ">
              <button className=" p-2 outline-none" onClick={() => zoomIn()}>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill="#fff"
                    d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
                  ></path>
                </svg>
              </button>
              <button className=" p-2 outline-none" onClick={() => zoomOut()}>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                >
                  <g fill="#fff">
                    <rect height="4" width="20" x="2" y="10"></rect>
                  </g>
                </svg>
              </button>
              <button
                className=" p-2 outline-none"
                onClick={() => resetTransform()}
              >
                <svg
                  viewBox="0 0 448 512"
                  focusable="false"
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g>
                    <path
                      fill="#fff"
                      d="M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
