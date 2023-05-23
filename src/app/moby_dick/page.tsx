'use client'
import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'

import { count1_1 } from './text'

const Button_Arrow = tw.button`border rounded-xl bg-gray-200 p-5`

const fetchApi = async (message: string) => {
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

  return data
}

const App = () => {
  const [response, setResponse] = useState<string[]>([])
  const [showPopup, setShowPopup] = useState(false)
  const [mainText, setMainText] = useState<string>(count1_1)

  const flipPage = (val) => {
  }

  const clearLocalStorage = () => {
    localStorage.removeItem('authorInfo')
    setShowPopup(true)
  }

  const getAuthorInfo = async () => {
    const localStorageData = localStorage.getItem('authorInfo')
    if (localStorageData) {
      setMainText(localStorageData)
    }
    else {
      const message = 'give me info on the author of moby dick'
      const data = await fetchApi(message)
      localStorage.setItem('authorInfo', data)
      setMainText(data)
    }
  }

  const sayHiInLithuanian = async () => {
    const message = 'say hi in lithuanian'
    const data = await fetchApi(message)
    setResponse(prev => [...prev, data])
  }

  useEffect(() => {
    console.log({ response })
  }, [response])

  return (
    <>
      <div tw='max-w-[1000px] mx-auto'>
        <div className='mt-[20px] px-[5%] font-eb-garamond text-[#333] font-[400] leading-9 text-2xl'>{mainText}</div>
        <div className='flex justify-center'>
          <button className="border m-3 p-3 rounded-xl text-blue-800 bg-blue-300" onClick={sayHiInLithuanian}>submit now</button>
          {response.map((res, index) => (
            <h3 key={index}>
              GPT Response: {res}
            </h3>
          ))}
        </div>
        <div className='w-full flex justify-between'>
          <Button_Arrow onClick={() => flipPage(-1)}>{'<-'}</Button_Arrow>
          <Button_Arrow>{'->'}</Button_Arrow>
        </div>
        <button tw="border inline-block p-5 rounded-xl my-[100px]" onClick={getAuthorInfo}>Author</button>
        <button onClick={clearLocalStorage}>🔄</button>
        {showPopup
          && <div className='bg-green-200 text-green-700'>
            Successful refresh
            <button onClick={() => setShowPopup(false)}> Dismiss </button>
          </div>
        }
      </div>
    </>
  )
}

export default App
