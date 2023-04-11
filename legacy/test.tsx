import React from "react";
import styled, { css } from "styled-components";
import tw, { theme } from "twin.macro";
import Header from "../app/bones/layout/Header";
import { ContainX } from "../share/bones/components/Contain";
import Head from "../share/bones/components/Head";

const PP = ({ children }) => (
  <p css={css({ color: theme`colors.purple.500` })}>{children}</p>
);

const Text = styled.h1`
  color: yellowgreen;
`;
const PropsStyle = styled.input<any>(({ hasBorder }) => [
  `color: black;`,
  hasBorder && tw`border-purple-500`,
]);

const Text2 = styled.h1`
  color: ${({ theme }) => theme.textCol};
`;
const Tailwind = styled.h1`
  ${tw`text-gray-400`}
`;
const TW = tw.h1`
  text-2xl text-yellow-700
`;
const E800 = styled.h1`
  ${tw`text-2xl `}
`;

export default function Home() {
  return (
    <>
      <Head title="Analysis Paralysis" />
      <Header />
      <ContainX.H800p3>
        <main>
          <h1 className="hover:h_1">none</h1>
          <h1 className="hero">none</h1>
          <h1>none</h1>
          <p className="red">pure css</p>
          <p className="redd">pure css</p>
          <p className="text-blue-300">tailwind</p>
          <p tw="text-purple-800">twin</p>
          <p>TWIN TWIN</p>
          <Text>styled</Text>
          <Text2>styled theme text 2</Text2>
          <Tailwind>styled + tw</Tailwind>
          <TW>styled with TW</TW>
          <E800>800</E800>
          <PP>jojo pp</PP>
          {/* <StyledArray>styled array</StyledArray> */}
          <div
            css={`
              color: ${({ theme }) => theme.textCol};
            `}
          >
            styled with css
          </div>
        </main>
      </ContainX.H800p3>
    </>
  );
}
