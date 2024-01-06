import { createClient } from "@/utils/supabase/server";
import HeaderClient from "./HeaderClient";
import { cookies } from "next/headers";
import { AvatarHeader } from "./AvatarHeader";

import MobileNav from "./mobileNav";

export default async function Header() {
  const supabase = createClient(cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <header
      className="flex 

    lg:pr-[80px]
  
    justify-between
    lg:justify-end
  lg:h-[120px] w-full fixed z-[90] h-[90px] p-[20px] 
  gap-[20px] items-center bg-white border-b-2 "
    >
      {" "}
      <MobileNav session={session} />
      <div className="flex items-center space-x-7">
        <HeaderClient session={session} />
        {session && (
          <>
            <AvatarHeader session={session} />
          </>
        )}
      </div>
    </header>
  );
}
