import { createClient } from "@/utils/supabase/server";
import HeaderClient from "./HeaderClient";
import { cookies } from "next/headers";

export default async function Header() {
  const supabase = createClient(cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return <HeaderClient session={session} />;
}
