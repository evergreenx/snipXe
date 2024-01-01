import { createClient } from "@/utils/supabase/server";
import HeaderClient from "./HeaderClient";
import { cookies } from "next/headers";
import { AvatarHeader } from "./AvatarHeader";
import { useSelector } from "react-redux";
import { RootState } from "@/sm/store";

export default async function Header() {
  const supabase = createClient(cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();

  let { data: snipx, error } = await supabase.from("snipx").select("*");

  // console.log(snipx);
  return (
    <div
      className="flex 

    pr-[80px]
  
  lg:h-[120px] w-full fixed z-[90] h-[90px] p-[20px]
  gap-[20px] justify-end items-center bg-white shadow-xl"
    >
      <HeaderClient />

      {session && (
        <>
          {/* <button className="border-[#5465FF] text-[#5465FF] border rounded-lg w-[99px] h-[34px] ">
            Save
          </button> */}

          <AvatarHeader session={session} />
        </>
      )}
    </div>
  );
}
