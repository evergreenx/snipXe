"use client";

import Sidebar from "@/components/sidebar";
import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

export default function page() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = `
    
  const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

  const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
  
  const unfold = (f, seed) => {
    const go = (f, seed, acc) => {
      const res = f(seed)
      return res ? go(f, res[1], acc.concat([res[0]])) : acc
    }
    return go(f, seed, [])
  }
  
    `;

  const handleInput = () => {
    Prism.highlightAll(); // Call Prism to highlight code on input changes
  };

  const preRef = useRef(null);
  return (
    <div className="mt-[200px]  mx-auto flex justify-center items-center w-full   ">
      <div className=" w-[782px] bg-yellow-600  py-[51px] flex justify-center items-center px-[91px]">
        <pre
          className="  "
          ref={preRef}
          contentEditable
          onInput={handleInput}
          style={{
            border: 0,
            boxShadow: "none",
            borderRadius: 0,
            overflow: "visible",
          }}
        >
          <code className="language-javascript"> {code}</code>
        </pre>
      </div>
    </div>
  );
}
