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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeaderClient({ session }: { session: Session | null }) {
  const coderefstate = useSelector((state: RootState) => state.download.ref);

  const snipxName = useSelector((state: RootState) => state.control.name);

  const pathname = usePathname();

  const [isLoadingSave, setIsLoadingSave] = useState<boolean>(false);

  const supabase = createClient();

  const router = useRouter();

  const handleDownloadPngClick = async () => {
    if (coderefstate) {
      const fontEmbedCSS = await htmlToImage.getFontEmbedCSS(coderefstate);
      const elementToCapture = coderefstate;

      const clone = elementToCapture.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.top = "0";
      clone.style.transition = "transform 0.5s ease-in-out";
      clone.style.zIndex = "9999";

      document.body.appendChild(clone);

      requestAnimationFrame(() => {
        clone.style.transform = "scale(0)";
      });

      setTimeout(() => {
        htmlToImage.toPng(coderefstate, { fontEmbedCSS }).then((dataUrl) => {
          document.body.removeChild(clone);

          download(dataUrl, snipxName);

          // const link = document.createElement('a');
          // link.href = dataUrl;
          // link.download = snipxName;
          // link.click();
        });
      }, 500); // Adjust the delay to match your animation duration
    }
  };

  const handleDownloadSvgClick = async () => {
    if (coderefstate) {
      const fontEmbedCSS = await htmlToImage.getFontEmbedCSS(coderefstate);
      const elementToCapture = coderefstate;

      const clone = elementToCapture.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.top = "0";
      clone.style.transition = "transform 0.5s ease-in-out";
      clone.style.zIndex = "9999";

      document.body.appendChild(clone);

      requestAnimationFrame(() => {
        clone.style.transform = "scale(0)";
      });

      setTimeout(() => {
        htmlToImage.toSvg(coderefstate, { fontEmbedCSS }).then((dataUrl) => {
          document.body.removeChild(clone);

          download(dataUrl, snipxName);

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
          <DropdownMenu>
            <DropdownMenuTrigger className="download border px-3 py-2 text-sm  border-primary outline-none   cursor-pointer">
              Export
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[99]">
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={handleDownloadSvgClick}>
                svg
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDownloadPngClick}>
                png
              </DropdownMenuItem>

              <DropdownMenuItem className="text-gray-300 cursor-not-allowed hover:text-gray-300">
                pdf
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
