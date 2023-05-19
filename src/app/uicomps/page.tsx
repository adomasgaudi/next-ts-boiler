import React from 'react'

const App = () => {
  return (
    <>
      <section tw="my-10">
        <Div_FlexRow>
          <div tw="border inline-block p-2 " {...onHoverProps}>
            <Div_Popup {...{ isPopupShown }} tw="bg-red-300 pointer-events-none"><p>{'inline-block'}</p></Div_Popup>
            <div tw="border" >Lorem ipsum dolor sit amet, ca.</div>
            {Array(3).fill('').map((_, index) => (
              <div key={index} tw="border w-[300px] h-10 my-2" ></div>
            ))}
          </div>

          <div tw="mx-10">
            <h1 tw="text-3xl">Card with vertical blocks</h1>
            <p>show popup</p>
            <p>card: inline-block </p>
            <p>blocks: none</p>
          </div>
        </Div_FlexRow>

        <Div_FlexRow tw="my-20">
          <div tw="border inline-block px-10 py-2 w-80" {...onHoverProps}>
            <Div_Popup {...{ isPopupShown }} tw="bg-red-300 pointer-events-none">
              <p>{'inline-block'}</p>
            </Div_Popup>
            <Container tw='border min-h-[50px]'></Container>
          </div>

          <div tw="mx-10">
            <TabsComp />
            <h1 tw="text-3xl">Container</h1>
            <p>tw: container mx-auto</p>
            <p>css: container mx-auto</p>
            <p>Responsive content looks buggy and performs worse without breakpoints.</p>
            <div tw='w-[500px]'>
              <CodeBlock />
            </div>
          </div>
        </Div_FlexRow>

        <Div_FlexRow tw='my-[100px]'>
          <div tw="border inline-flex p-2 flex-row w-[300px]">
            <div tw="border w-[80%] h-10 m-2"></div>
            <div tw="border w-[20%] h-10 m-2"></div>
          </div>
          <div tw='mx-10'>
            <h1 tw="text-3xl">Card with horizontal blocks</h1>
            <p>card: inline-block </p>
            <p>blocks: none</p>
          </div>
        </Div_FlexRow>
      </section>
    </>
  )
}

export default App
