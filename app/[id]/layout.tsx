import CanvasControl from "@/components/CanvasControl";
import { createClient } from "@/utils/supabase/server";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "edit snipx",
  description: "Non exist",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient(cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <main className=" w-full bg-white ">
      <div className=" ">
        <div className=" overflow-hidden overflow-y-auto h-full pb-[100px]">
          {children}
        </div>

        <CanvasControl />
      </div>
    </main>
  );
}
