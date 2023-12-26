"use client";

import Sidebar from "@/components/sidebar";
import React, { Ref, useEffect, useRef } from "react";
import Prism from "prismjs";

import CodeMirror, { useCodeMirror } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

import { dracula } from "@uiw/codemirror-theme-dracula";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { abyss } from "@uiw/codemirror-theme-abyss";

// import "prismjs/themes/prism-dark.css";
// import "../../style/dracula.css";
import { useSelector } from "react-redux";
import { RootState } from "@/sm/store";

export default function page() {
  const languageMode = useSelector((state: RootState) => state.control.mode);
  const selectedTheme = useSelector((state: RootState) => state.control.theme);

  console.log(languageMode);

  const [value, setValue] = React.useState(
    "const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)const unfold = (f, seed) => {const go = (f, seed, acc) => {const res = f(seed)return res ? go(f, res[1], acc.concat([res[0]])) : acc}"
  );

  let extensions;

  let code = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

  const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
  
  const unfold = (f, seed) => {
    const go = (f, seed, acc) => {
      const res = f(seed)
      return res ? go(f, res[1], acc.concat([res[0]])) : acc
    }
    return go(f, seed, [])
  }
    `;

  switch (languageMode) {
    case "javascript":
      extensions = [javascript()];

      break;
    case "python":
      extensions = [python()];

      break;
    // Add other cases for different language modes as needed

    default:
      // Default to JavaScript if language mode is not recognized
      extensions = [javascript({ jsx: true })];

      break;
  }

  let theme = undefined;
  console.log(theme);
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

  const { setContainer, state, setView } = useCodeMirror({
    container: editor.current,
    extensions,

    basicSetup: {
      lineNumbers: false,
      highlightActiveLine: false,
      highlightActiveLineGutter: false,
      foldGutter: false,
    },
    value: code,
    width: "700px",
    height: "300px",
    theme: theme,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current, languageMode, selectedTheme]);

  const handleInput = () => {
    Prism.highlightAll(); // Call Prism to highlight code on input changes
  };

  const preRef = useRef(null);

  const BG = useSelector((state: RootState) => state.control.bg);

  return (
    <>
      <div className="mt-[200px]  mx-auto flex  w-full m-[10px] lg:ml-[400px]  ">
        <div className="">
          <div className="content text-center">
            <h2 className="font-bold text-[36px] text-primary">
              🌈 Let’s create Magic! ✨
            </h2>

            <p className="font-medium text-lg my-[13px] text-primary">
              Edit the frame below to create your magical Snipx
            </p>
          </div>

          <div
            style={{ backgroundColor: BG?.hex }}
            className={` lg:w-[800px] w-full  py-[51px] flex justify-center items-center px-[15px]`}
          >
            {/* code mirror */}
            <div ref={editor} />
          </div>
        </div>
      </div>
    </>
  );
}
