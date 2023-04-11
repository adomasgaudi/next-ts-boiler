import React, { FC, useState } from "react";
import tw from "twin.macro";
import { Link } from "./Header.styles";

type Props = {};

const Header: FC<Props> = () => {
  return (
    <header className="w-full z-10 mb-20">
      <div tw="flex justify-between items-center p-3">
        <Link href="/">home</Link>
        <Link href="/test">test</Link>
      </div>
    </header>
  );
};

export default Header;
