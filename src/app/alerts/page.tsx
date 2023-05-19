'use client'
import React, { useState } from 'react'
import tw from 'twin.macro'

const App = () => {
  const [size, setSize] = useState(2)

  const getWidth = () => {
    switch (size) {
      case 0: return '25%' // Small
      case 1: return '50%' // Mid
      case 2: return '100%' // Large
      default: return '100%'
    }
  }

  return (
    <>
      <h1 tw='text-4xl font-bold my-20'>Alert 1</h1>

      <div tw='flex flex-row'>
        <div tw='border m-5 p-2' onClick={() => setSize(0)}>small</div>
        <div tw='border m-5 p-2' onClick={() => setSize(1)}>mid</div>
        <div tw='border m-5 p-2' onClick={() => setSize(2)}>large</div>
      </div>
      <div tw='border h-[500px]' style={{ width: getWidth() }}></div>
    </>
  )
}

export default App
