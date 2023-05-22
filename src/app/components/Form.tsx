'use client'
import { useState } from 'react' // eslint-disable-next-lin

const Form = () => {
  const [response, setResponse] = useState<string[]>([])

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

  console.log({ response })

  return (
    <div className='flex justify-center'>
      <button className="border m-3 p-3 rounded-xl text-blue-800 bg-blue-300" onClick={funcgo}>submit now</button>
      {response.length > 0 && (
        <h3>
          You asked: {response[0]} <br /> GPT Response: {response[1]}
        </h3>
      )}
    </div>
  )
}

export default Form
