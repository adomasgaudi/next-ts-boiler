'use client'
/** @jsxImportSource @emotion/react */
import { _ } from 'chainedcss'
import chroma from 'chroma-js'
import styled from 'styled-components'
import { useCssOutline } from './utils/useTools'

// import tw, { theme } from 'twin.macro'
const startColor = chroma('#df8')
const endColor = startColor.darken().hex()
const DivGrad = styled.div`
  background-image: linear-gradient(to right, ${endColor}, ${startColor});
`

function HomePage() {
  useCssOutline()

  return (
    <>
      <DivGrad {..._.p2().wFull().hFull()} >
        <div tw="container m-auto py-10 border">
          <div {..._.textCenter``.mt30``.style(`background-image: linear-gradient(to right, ${startColor}, ${endColor})`)}>
            <h1 {..._.text(50).fontBold``}>The power of JS<br /> with the comfort of TailwindCSS</h1>
            <h3 {..._.textXl``.textWarmGray400``}>A new syntax for the Emotion css framework.</h3>
          </div>
        </div>
      </DivGrad>
    </>
  )
}

export default HomePage
