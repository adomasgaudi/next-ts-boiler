'use client'
// eslint-disable-next-line
import tw from 'twin.macro'
import Form from './components/Form'

// const CardComp = ({ name, link, ...props }: any) => <Link href={`/${link}`}>
//   <div tw="border p-10 inline m-10 rounded-xl" {...props}>{name}</div>
// </Link>

function HomePage() {
  return (
    <>

      <div className="container mx-auto pb-[500px]">
        <section tw='my-[300px]'>
          <h1>chat</h1>
        </section>

        {/* <section>
          {[{ name: 'count of monte christo', link: 'count_of_monte_christo' }].map((_, idx) => <CardComp key={idx} name={_.name} link={_.link} />)}
        </section> */}
        <section>
          <Form />
        </section>
      </div>
    </>
  )
}

export default HomePage
