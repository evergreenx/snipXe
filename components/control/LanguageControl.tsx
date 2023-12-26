import React from "react";
import LanguageSelect from "../LanguageSelect";

export default function LanguageControl() {
  const popularLanguages = [
    { name: "JavaScript", value: "javascript" },
    { name: "Python", value: "python" },
    // { name: "Java", value: "java" },
    // { name: "C++", value: "cilkcpp" },
    // { name: "C#", value: "clike" },
    // { name: "ABAP", value: "abap" },
    // { name: "ActionScript", value: "actionscript" },
    // { name: "Ada", value: "ada" },
    // { name: "Apache Configuration", value: "apacheconf" },
    // { name: "APL", value: "apl" },
    // { name: "AppleScript", value: "applescript" },
    // { name: "Arduino", value: "arduino" },
    // { name: "ARFF", value: "arff" },
    // { name: "WebAssembly", value: "wasm" },
    // { name: "Wiki markup", value: "wiki" },
    // { name: "Xeora", value: "xeora" },
    // { name: "Xojo (REALbasic)", value: "xojo" },
    // { name: "XQuery", value: "xquery" },
    // { name: "YAML", value: "yaml" },
  ];

  return (
    <div className="border-b border-t border-[#7789A9]">
      <div className="p-[28px]">
        <h2 className="text-lg  text-secondary font-medium">Choose Language</h2>

        <LanguageSelect data={popularLanguages} />
      </div>
    </div>
  );
}
