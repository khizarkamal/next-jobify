"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import links from "@/utils/links";
import Logo from "@/assets/logo.svg";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className=" h-full py- bg-muted py-4 px-8">
      <Image src={Logo} alt="Sidebar Logo" className="mx-auto" />
      <div className="flex flex-col mt-20 gap-4">
        {links.map((link) => {
          return (
            <Button
              variant={pathname === link.href ? "default" : "link"}
              key={link.href}
              asChild
            >
              <Link href={link.href} className="flex items-center gap-x-2">
                {link.icon}
                <span className="capitalize">{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
