import { createClient } from "@/utils/supabase/server";
import HeaderClient from "./HeaderClient";
import { cookies } from "next/headers";
import { AvatarHeader } from "./AvatarHeader";
import { useSelector } from "react-redux";
import { RootState } from "@/sm/store";
import type { Database } from "@/lib/database.types";

export default async function Header() {
  const supabase = createClient(cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div
      className="flex 

    lg:pr-[80px]
  
  lg:h-[120px] w-full fixed z-[90] h-[90px] p-[20px]
  gap-[20px] justify-end items-center bg-white shadow-xl"
    >
      <HeaderClient session={session} />

      {session && (
        <>
          <AvatarHeader session={session} />
        </>
      )}
    </div>
  );
}
