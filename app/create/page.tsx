"use client";

import Sidebar from "@/components/sidebar";
import React, { Ref, useEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

import CodeMirror, { useCodeMirror } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

import { dracula } from "@uiw/codemirror-theme-dracula";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { abyss } from "@uiw/codemirror-theme-abyss";

import { UnControlled as CodeMirrorx } from "react-codemirror2";

// import "prismjs/themes/prism-dark.css";
// import "../../style/dracula.css";
import { useSelector } from "react-redux";
import { RootState } from "@/sm/store";

export default function page() {
  const languageMode = useSelector((state: RootState) => state.control.mode);
  const selectedTheme = useSelector((state: RootState) => state.control.theme);
  const matches = useMediaQuery("(min-width: 768px)");
  console.log(languageMode);

  const codeMirrorRef = useRef();

  //   useEffect(() => {
  //     require('codemirror/mode/markdown/markdown')
  //     const CodeMirror = require('codemirror')
  //     const instance = CodeMirror.fromTextArea(codeMirrorRef.current, {
  //         lineNumbers: false,
  //         lineWrapping: true,
  //         mode: "text/x-markdown"
  //     })
  // }, [])

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

  const Padding = useSelector((state: RootState) => state.control.p);

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
    width: "auto",

    height: "auto",
    theme: theme,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current, languageMode, selectedTheme]);

  const preRef = useRef(null);

  const BG = useSelector((state: RootState) => state.control.bg);

  return (
    <>
      <div className="mt-[200px]  mx-auto flex  w-full m-[10px] lg:ml-[400px] p-3 ">
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
            style={{
              backgroundColor: BG?.hex,
              padding: `${Padding.v}px ${Padding.h}px`,

              minHeight: "90px",
            }}
            className={`  rounded-md max-w-[100%] mx-auto my-0   w-[700px]`}
          >
            {/* code mirror */}
            <div className="relative mx-auto max-w-[100%] ">
              <div
                style={{
                  // fontSize: "16px",
                  borderRadius: "20px",
                  display: "block",
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
                ref={editor}
              />
            </div>

            {/* <CodeMirrorx
  value='<h1>I ♥ react-codemirror2</h1>'
  
  options={{
    mode: 'xml',
    theme: 'material',
    lineNumbers: true,
    visualViewport : 'infinity'
  }}
  onChange={(editor, data, value) => {
  }}
/> */}

            {/* <section>
        <textarea ref={codeMirrorRef}></textarea>
    </section> */}
          </div>
        </div>
      </div>
    </>
  );
}
