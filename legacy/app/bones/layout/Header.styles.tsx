import React from "react";
import NextLink from "next/link";
import tw from "twin.macro";

export const Link = ({ children, href, cls }: any) => (
  <NextLink href={href}>
    <a className={cls}>{children}</a>
  </NextLink>
);
