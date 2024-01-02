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
export default async function page() {
  const supabase = createClient(cookies());

  let { data: snipx, error } = await supabase.from("snipx").select("*");


  return (
    <div className="mt-[200px] grid gap-4 grid-cols-1 lg:grid-cols-3 place-content-center mx-auto  lg:ml-[400px] lg:mr-[80px] p-3  ">
  
  
      <SnipxOptions snipx={snipx} />
    </div>
  );
}
