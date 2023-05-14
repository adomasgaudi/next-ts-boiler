'use client'
import { Container } from '../components/ChunkyUI'
import { useCssOutline } from '../utils/useTools'

function HomePage() {
  useCssOutline()

  return (
    <Container>
      <h1 className="text-6xl">Chunky Code </h1>

      <section className="my-10">
        <p>Chunky code deals with how the code should look like.</p>
      </section>
    </Container>
  )
}

export default HomePage
