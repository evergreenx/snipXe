import CanvasControl from "@/components/CanvasControl";
import { createClient } from "@/utils/supabase/server";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
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
    <main className=" overflow-y-auto  w-full bg-white ">
      <div className=" ">
        <div className="  h-full">
          {children}
        </div>
      </div>
    </main>
  );
}
