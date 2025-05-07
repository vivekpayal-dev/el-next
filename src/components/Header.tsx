"use client";

import { navLinks } from "@/utils/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex items-center text-white justify-between px-4 md:px-16 py-10">
      <div>
        <Link href="/" className="text-2xl font-bold">
          Lobby
        </Link>
      </div>
      <nav>
        <ul
          className="flex justify-center 
        border-1 h-[56] items-center rounded-[40px] border-white overflow-hidden"
        >
          {navLinks.map((link) => {
            return (
              <li
                className={`${
                  pathname === link.href
                    ? "backdrop-blur-md bg-white/20  rounded-[40px]"
                    : ""
                } h-full flex items-center px-8`}
              >
                <Link href={`${link.href}`} className="text-white">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <Link href="/">Help</Link>
      </div>
    </header>
  );
}
