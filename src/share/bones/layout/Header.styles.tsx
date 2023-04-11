import React from "react";
import NextLink from "next/link";
import tw from "twin.macro";
import Image from "next/image";
import { base } from "../../../share/utils/tools/baseHOC";
import { im } from "../../../static/img";

export const Link = ({ children, href, cls }: any) => (
  <NextLink href={href}>
    <a className={cls}>{children}</a>
  </NextLink>
);

export const NavLink = base(Link, {
  cls: "cap_thin hover:cap_thick",
});

export const Logo = () => {
  return (
    <div tw="w-12 h-12 relative">
      <Image
        src={im.fire3}
        alt="cube"
        tw="bg-[#F4DBD7] rounded-lg p-3 absolute"
      />
    </div>
  );
};
