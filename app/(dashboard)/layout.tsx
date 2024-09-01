import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid lg:grid-cols-5">
      <div className="hidden lg:block lg:min-h-screen lg:col-span-1">
        <SideBar />
      </div>
      <div className="lg:col-span-4">
        <Navbar />
        <div className="py-16 px-4 sm:px-8">{children}</div>
      </div>
    </main>
  );
};

export default layout;
