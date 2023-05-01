'use client'
/** @jsxImportSource @emotion/react */
import { _ } from 'chainedcss'
import { useCssOutline } from './utils/useTools'

function HomePage() {
  useCssOutline()
  return (
    <>
      <div {..._.p2().wFull().hFull()} className="grad-4">
        <div tw="container m-auto py-10 border">
          <div {..._.textCenter``.mt30``.bgBlue500``}>
            <h1 {..._.text(50).fontBold``}>The power of JS<br /> with the comfort of TailwindCSS</h1>

            <h3 {..._.textXl``.textWarmGray400``}>A new syntax for the Emotion css framework.</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
