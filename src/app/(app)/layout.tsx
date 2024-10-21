import React, { ReactNode } from "react";
import Header from "./_components/Header";
import { Roboto, Work_Sans } from "next/font/google";
import Sidebar from "./_components/sidebar";
import MenuFilterProvider from "@/context/filter-menu";

interface AppLayoutProps {
  children: ReactNode;
}
const workSans = Work_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["400"],
  variable: "--font-roboto",
  subsets: ["latin"],
});
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={`${workSans.className} ${roboto.variable} app__container`}>
      <Header />
      <main className="app__main">
        <Sidebar />
        <MenuFilterProvider>
          <div>{children}</div>
        </MenuFilterProvider>
      </main>
    </div>
  );
};

export default AppLayout;
