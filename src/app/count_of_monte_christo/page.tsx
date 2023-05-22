'use client'
import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'

import { count1_1 } from './text'

const Button_Arrow = tw.button`border rounded-xl bg-gray-200 p-5`

const App = () => {
  const [response, setResponse] = useState<string[]>([])
  const [showPopup, setShowPopup] = useState(false)

  const flipPage = (val) => {
  }

  const clearLocalStorage = () => {
    localStorage.removeItem('authorInfo')
    setShowPopup(true)
  }

  const getAuthorInfo = async () => {
    const localStorageData = localStorage.getItem('authorInfo')
    if (localStorageData) {
      console.log('local data')
      setResponse(prev => [...prev, localStorageData])
    }
    else {
      const message = 'give me info on the author of moby dick'

      const response = await fetch('/api/response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      if (!response.ok)
        throw new Error(response.statusText)

      const data = await response.text()

      if (data) {
        localStorage.setItem('authorInfo', data)
        setResponse(prev => [...prev, data])
      }
    }
  }

  const funcgo = async () => {
    const message = 'say hi in lithuanian'

    if (message) {
      setResponse(prev => [...prev, message])

      const response = await fetch('/api/response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      if (!response.ok)
        throw new Error(response.statusText)

      const data = await response.text()

      if (data)
        setResponse(prev => [...prev, data])
    }
  }

  useEffect(() => {
    console.log({ response })
  }, [response])

  return (
    <>
      <div tw='max-w-[800px] mx-auto'>
        <button tw="border inline-block p-5 rounded-xl my-[100px]" onClick={getAuthorInfo}>Author</button>
        <button onClick={clearLocalStorage}>🔄</button>

        <div className='w-full flex justify-between'>
          <Button_Arrow onClick={() => flipPage(-1)}>{'<-'}</Button_Arrow>
          <Button_Arrow>{'->'}</Button_Arrow>
        </div>
        <div className='mt-[100px] text-xl font-eb-garamond text-[#333] font-[400] leading-9 text-2xl'>{count1_1}</div>
        <div className='flex justify-center'>
          <button className="border m-3 p-3 rounded-xl text-blue-800 bg-blue-300" onClick={funcgo}>submit now</button>
          {response.length > 0 && response.map((res, index) => (
            <h3 key={index}>
              GPT Response: {res}
            </h3>
          ))}
        </div>
        {showPopup && <div>
    Your popup content here
          <button onClick={() => setShowPopup(false)}>Dismiss</button>
        </div>}
      </div>
    </>
  )
}

export default App
