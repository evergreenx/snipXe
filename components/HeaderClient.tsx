"use client";
import { handleSetRef } from "@/sm/features/control/downloadSlice";
import { RootState } from "@/sm/store";
import { createClient } from "@/utils/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import html2canvas from "html2canvas";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import download from "downloadjs";

export default function HeaderClient({ session }: { session: Session | null }) {
  const coderefstate = useSelector((state: RootState) => state.download.ref);

  const snipxName = useSelector((state: RootState) => state.control.name);

  const pathname = usePathname();

  const [isLoadingSave, setIsLoadingSave] = useState<boolean>(false);

  const supabase = createClient();

  const router = useRouter();

  const handleDownloadClick  = async () => {
    if (coderefstate) {

      const fontEmbedCSS = await htmlToImage.getFontEmbedCSS(coderefstate);
      const elementToCapture = coderefstate;

      const clone = elementToCapture.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.top = '0';
      clone.style.transition = 'transform 0.5s ease-in-out';
      clone.style.zIndex = '9999';

      document.body.appendChild(clone);

      requestAnimationFrame(() => {
        clone.style.transform = 'scale(0)';
      });

      setTimeout(() => {

        
        htmlToImage.toPng(coderefstate, {fontEmbedCSS }).then((dataUrl) => {
          document.body.removeChild(clone);

          download(dataUrl , snipxName)

          // const link = document.createElement('a');
          // link.href = dataUrl;
          // link.download = snipxName;
          // link.click();
        });
      }, 500); // Adjust the delay to match your animation duration
    }
  };

  const datax = useSelector((state: RootState) => state.control);

  const handleupdate = async () => {
    setIsLoadingSave(true);
    try {
      const { data: Id } = await supabase.auth.getUser();

      const { data, error } = await supabase
        .from("snipx")
        .upsert([{ ...datax, user_id: Id.user?.id }])
        .select()
        .single();

      if (data) router.push(`/${data?.id}`);
    } catch {
      alert("an error occured");
    } finally {
      setIsLoadingSave(false);
    }
  };

  return (
    <>
  
      {pathname === "/create" && (
        <div className="">
          <div
            onClick={handleDownloadClick}
            className="download cursor-pointer"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 7.5L28.5 3M28.5 3L33 7.5M28.5 3V12M18.75 4.5H11.7C9.17976 4.5 7.91965 4.5 6.95704 4.99047C6.11031 5.4219 5.4219 6.11031 4.99047 6.95704C4.5 7.91965 4.5 9.17976 4.5 11.7V24.3C4.5 26.8202 4.5 28.0804 4.99047 29.043C5.4219 29.8897 6.11031 30.5781 6.95704 31.0095C7.91965 31.5 9.17976 31.5 11.7 31.5H25.5C26.895 31.5 27.5924 31.5 28.1647 31.3467C29.7176 30.9306 30.9306 29.7176 31.3467 28.1647C31.5 27.5924 31.5 26.895 31.5 25.5M15.75 12.75C15.75 14.4069 14.4069 15.75 12.75 15.75C11.0931 15.75 9.75 14.4069 9.75 12.75C9.75 11.0931 11.0931 9.75 12.75 9.75C14.4069 9.75 15.75 11.0931 15.75 12.75ZM22.4851 17.8772L9.79672 29.4121C9.08304 30.0609 8.7262 30.3853 8.69464 30.6663C8.66728 30.9099 8.76068 31.1515 8.94478 31.3133C9.15717 31.5 9.63942 31.5 10.6039 31.5H24.684C26.8427 31.5 27.9221 31.5 28.7699 31.1373C29.8342 30.6821 30.6821 29.8342 31.1373 28.7699C31.5 27.9221 31.5 26.8427 31.5 24.684C31.5 23.9576 31.5 23.5945 31.4206 23.2562C31.3208 22.8312 31.1295 22.433 30.8599 22.0896C30.6454 21.8163 30.3618 21.5894 29.7946 21.1357L25.5987 17.779C25.0311 17.3249 24.7473 17.0978 24.4347 17.0177C24.1592 16.947 23.8693 16.9562 23.5988 17.044C23.2919 17.1437 23.023 17.3882 22.4851 17.8772Z"
                stroke="#5465FF"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      )}

      {pathname === "/create" && session && (
        <button
          onClick={handleupdate}
          className="border-[#5465FF]  text-[#5465FF] border rounded-lg w-[99px] h-[34px] "
        >
          {isLoadingSave ? "saving" : "save"}
        </button>
      )}
    </>
  );
}
