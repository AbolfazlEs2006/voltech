import "./globals.css";
import type { Metadata } from "next";
import ReduxProvider from "@/provider/ReduxProvider";

import Navbar from "@/components/Navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { auth } from "@/auth";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "VOLTech",
  description: "Better e-commerce for u",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session: Session = await auth();
  return (
    <html lang="en" data-theme="light">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        ></link>
      </head>
      <body>
        <ReduxProvider>
          <SessionProvider session={session}>
            <Navbar />
            {children}
            <Toaster position="top-right" />
          </SessionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
