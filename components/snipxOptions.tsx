"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Database } from "@/lib/database.types";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

type snpix = Database["public"]["Tables"]["snipx"]["Row"][] | null;

export default function SnipxOptions({ snipx }: { snipx: snpix }) {
  const supabase = createClient();
  const router = useRouter();
  const handleDelete = async (id: number) => {
    console.log(id);
    const { error } = await supabase.from("snipx").delete().eq("id", id).select();

    router.refresh()
  };

  return (
    <>
      {snipx &&
        snipx?.map((snip) => {
          return (
            <section
              key={snip.id}
              style={{
                background: snip?.bg,
              }}
              className="m-[10px] shadow-xl w-[318px] h-[174px] rounded-s-[16px]  p-3 rounded-tr-[4px] rounded-bl-[16px] rounded-br-[4px] rounded-e"
            >
              <div className="flex justify-between items-center">
                <p className="text-[14px] font-medium text-[#0D102A]">
                  {snip.name}
                </p>

                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    {" "}
                    <svg
                      className="cursor-pointer"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.13455 9.00513C8.50274 9.00513 8.80122 8.70665 8.80122 8.33846C8.80122 7.97027 8.50274 7.67179 8.13455 7.67179C7.76636 7.67179 7.46789 7.97027 7.46789 8.33846C7.46789 8.70665 7.76636 9.00513 8.13455 9.00513Z"
                        stroke="#0D102A"
                        stroke-width="1.54709"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.13455 4.33846C8.50274 4.33846 8.80122 4.03998 8.80122 3.67179C8.80122 3.3036 8.50274 3.00513 8.13455 3.00513C7.76636 3.00513 7.46789 3.3036 7.46789 3.67179C7.46789 4.03998 7.76636 4.33846 8.13455 4.33846Z"
                        stroke="#0D102A"
                        stroke-width="1.54709"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.13455 13.6718C8.50274 13.6718 8.80122 13.3733 8.80122 13.0051C8.80122 12.6369 8.50274 12.3385 8.13455 12.3385C7.76636 12.3385 7.46789 12.6369 7.46789 13.0051C7.46789 13.3733 7.76636 13.6718 8.13455 13.6718Z"
                        stroke="#0D102A"
                        stroke-width="1.54709"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[170px]">
                    <DropdownMenuItem className="flex space-x-[8px] px-[16px] py-[10px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99998 16.6667H17.5M2.5 16.6667H3.89545C4.3031 16.6667 4.50693 16.6667 4.69874 16.6206C4.8688 16.5798 5.03138 16.5125 5.1805 16.4211C5.34869 16.318 5.49282 16.1739 5.78107 15.8856L16.25 5.41669C16.9404 4.72634 16.9404 3.60705 16.25 2.91669C15.5597 2.22634 14.4404 2.22634 13.75 2.91669L3.28105 13.3856C2.9928 13.6739 2.84867 13.818 2.7456 13.9862C2.65422 14.1353 2.58688 14.2979 2.54605 14.468C2.5 14.6598 2.5 14.8636 2.5 15.2713V16.6667Z"
                          stroke="#0D102A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="text-[#0D102A] text-sm font-semibold">
                        Edit
                      </p>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex space-x-[8px] px-[16px] py-[10px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.15833 11.2584L12.85 14.5751M12.8417 5.42508L7.15833 8.74175M17.5 4.16675C17.5 5.54746 16.3807 6.66675 15 6.66675C13.6193 6.66675 12.5 5.54746 12.5 4.16675C12.5 2.78604 13.6193 1.66675 15 1.66675C16.3807 1.66675 17.5 2.78604 17.5 4.16675ZM7.5 10.0001C7.5 11.3808 6.38071 12.5001 5 12.5001C3.61929 12.5001 2.5 11.3808 2.5 10.0001C2.5 8.61937 3.61929 7.50008 5 7.50008C6.38071 7.50008 7.5 8.61937 7.5 10.0001ZM17.5 15.8334C17.5 17.2141 16.3807 18.3334 15 18.3334C13.6193 18.3334 12.5 17.2141 12.5 15.8334C12.5 14.4527 13.6193 13.3334 15 13.3334C16.3807 13.3334 17.5 14.4527 17.5 15.8334Z"
                          stroke="#0D102A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="text-[#0D102A] text-sm font-semibold">
                        Share
                      </p>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleDelete(snip.id)}
                      className="flex space-x-[8px] px-[16px] py-[10px] cursor-pointer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 2.5H12.5M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5M8.33333 8.75V12.9167M11.6667 8.75V12.9167"
                          stroke="#0D102A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="text-[#0D102A] text-sm font-semibold">
                        Delete
                      </p>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </section>
          );
        })}
    </>
  );
}
