import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SnipxOptions from "@/components/snipxOptions";
import { RefreshOnFocus } from "@/components/RefreshOnFocus";
import { redirect } from "next/navigation";

export const revalidate = 10;
export default async function page() {
  const supabase = createClient(cookies());

  let { data: snipx, error } = await supabase.from("snipx").select("*");

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  if(error) {

    console.log(error)
  }
  return (
    <div className="mt-[200px] grid gap-4 grid-cols-1 lg:grid-cols-3 mx-auto  lg:ml-[400px] lg:mr-[80px] px-6  ">
      <RefreshOnFocus />

      {snipx?.length === 0 && (
        <p className="text-center text-xl mx-auto">
          you have no saved snipx : try saving your snipx
        </p>
      )}

      <SnipxOptions snipx={snipx} />
    </div>
  );
}
