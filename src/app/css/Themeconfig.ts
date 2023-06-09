import { createGlobalStyle } from 'styled-components'

export function themeFn(font: any, col: any) {
  const fonts = ['m', 'inter']
  const colors = ['#333', '#f00']

  const theme: any = {
    font: fonts[font],
    fontS: {
      min: 'm',
      inter: 'inter',
    },
    textCol: colors[col],
  }
  return theme
}

export const GlobalStyles = createGlobalStyle`
  /* body {
    color: ${({ theme }: any) => theme.textCol};
  } */
`
