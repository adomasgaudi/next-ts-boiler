'use client'
import { useState } from 'react' // eslint-disable-next-line
import tw from 'twin.macro'
import Link from 'next/link'
import { Container } from './components/ChunkyUI'
import { useCssOutline } from './utils/useTools'

const CardComp = ({ name, ...props }: any) => <Link href={`/${name}`}>
  <div tw="border p-10 inline m-10 rounded-xl" {...props}>{name}</div>
</Link>

function HomePage() {
  useCssOutline()
  const [isPopupShown, setIsPopupShown] = useState(false)

  const onHoverProps = {
    onMouseEnter: () => setIsPopupShown(true),
    onMouseLeave: () => setIsPopupShown(false),
  }

  return (
    <>

      <Container tw="pb-[500px]">
        <section tw='my-[300px]'>
          <h1 tw="text-5xl my-12">ChunkyUI</h1>
          <h2 tw="text-2xl">Rationale</h2>
          <p>CSS is disorganised.</p>
          <p>Building css components often means re-inventing the "wheel" for each component.</p>
          <p>Chunky UI tries to define the "wheel" such that it doesn't need to be invented ever again.</p>
        </section>

        <section>
          {['alerts', 'banners'].map((_, idx) => <CardComp key={idx} name={_} />)}
        </section>
      </Container>
    </>
  )
}

export default HomePage
