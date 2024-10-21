"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SingleLink = ({ icon, title, route = "#", pattern }: SingleLinkRoute) => {
  const pathname = usePathname();
  const regex = RegExp(pattern || "");
  return (
    <Link
      href={route}
      className={`single__link ${pattern && regex.test(pathname) && "active"} `}
    >
      <Image src={icon} alt={title} />
      <span>{title}</span>
    </Link>
  );
};

export default SingleLink;
