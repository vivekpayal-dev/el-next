"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BgWrapper() {
  const pathname = usePathname();
  return (
    <div
      className={`${
        pathname !== "/" ? " blur-md" : ""
      }  absolute top-0 left-0 w-full h-full -z-[1]`}
    >
      <Image
        src="/images/bg.jpeg"
        className="pointer-events-none"
        layout="fill"
        alt="Picture of the author"
      />
    </div>
  );
}
