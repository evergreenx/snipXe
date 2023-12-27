import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/Header";
import CanvasControl from "@/components/CanvasControl";
import { ReduxProvider } from "@/providers/ReduxProvider";
import Head from "next/head";


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>

      <Head>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"/>
      </Head>
      <ReduxProvider>
        <body className="bg-background text-foreground">
          <div className=" justify-between">
            <Sidebar />
            <Header />
          </div>

          <main className="flex ">{children}</main>
        </body>
      </ReduxProvider>

      {/* </ReduxProvider> */}
    </html>
  );
}
