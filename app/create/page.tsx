"use client";

import Sidebar from "@/components/sidebar";
import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
// import "prismjs/themes/prism-dark.css";
import "../../style/dracula.css";
import { useSelector } from "react-redux";
import { RootState } from "@/sm/store";

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

 const BG = useSelector((state: RootState)=> state.control.bg)

 console.log(BG)

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
          style={{ backgroundColor: BG?.hex  }}
          className={` lg:w-[800px] w-full  py-[51px] flex justify-center items-center px-[91px]`}>
            <pre
              className="  "
              ref={preRef}
              contentEditable
              onInput={handleInput}
              style={{
                border: 0,
                boxShadow: "none",
                borderRadius: 0,
                overflow: "hidden",
            
              }}
            >
              <code className="language-javascript"> {code}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
