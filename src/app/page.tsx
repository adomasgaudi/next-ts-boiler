'use client'
import { useState } from 'react'
import tw from 'twin.macro'
import { Container } from './components/ChunkyUI'
import { useCssOutline } from './utils/useTools'

function HomePage() {
  useCssOutline()
  const [showPopup, setShowPopup] = useState(false)

  const onHoverProps = {
    onMouseEnter: () => setShowPopup(true),
    onMouseLeave: () => setShowPopup(false),
  }
  return (
    <>
      <header tw="border-b">
        <Container tw='flex flex-row justify-between py-3'>
          <h3 tw="text-xl">Chunky UI</h3>
          <ul tw='flex flex-row gap-3'>
            <li>tab 1</li>
            <li>tab 2</li>
          </ul>
        </Container>
      </header>

      <Container tw="pb-[500px]">
        <section tw='mb-[300px]'>
          <h1 tw="text-5xl my-12">ChunkyUI</h1>
          <h2 tw="text-2xl">Rationale</h2>
          <p>CSS is disorganised.</p>
          <p>Building css components often means re-inventing the "wheel" for each component.</p>
          <p>Chunky UI tries to define the "wheel" such that it doesn't need to be invented ever again.</p>
        </section>

        <section tw="my-10">
          <div tw='flex flex-row '>
            <div tw="border inline-block p-2">
              <div tw="border w-[300px] h-10 m-2"></div>
              <div tw="border w-[300px] h-10 m-2"></div>
              <div tw="border w-[300px] h-10 m-2"></div>
            </div>
            <div {...onHoverProps} tw="mx-10 relative">
              <h1 tw="text-3xl">Card with vertical blocks</h1>
              <p>show popup</p>
              <div css={[tw`hidden absolute top-0 left-3 border border-black bg-red-400`, showPopup && tw` block `]}><p>{` <div tw="border inline-flex p-2 flex-row w-[300px]">
              <div tw="border w-[80%] h-10 m-2"></div>
              <div tw="border w-[20%] h-10 m-2"></div>
            </div>`}</p></div>
              <p>card: inline-block </p>
              <p>blocks: none</p>
              
            </div>
          </div>
          <div tw='flex flex-row my-[100px]'>
            <div tw="border inline-flex p-2 flex-row w-[300px]">
              <div tw="border w-[80%] h-10 m-2"></div>
              <div tw="border w-[20%] h-10 m-2"></div>
            </div>
            <div tw='mx-10'>
              <h1 tw="text-3xl">Card with horizontal blocks</h1>
              <p>card: inline-block </p>
              <p>blocks: none</p>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default HomePage
