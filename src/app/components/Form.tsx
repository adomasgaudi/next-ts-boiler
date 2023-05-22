'use client'
import { useRef, useState } from 'react'
import useSWR from 'swr'

const Form = () => {
  const messageInput = useRef<HTMLTextAreaElement | null>(null)
  const [response, setResponse] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [models, setModels] = useState<any>([])
  const [currentModel, setCurrentModel] = useState<string>('gpt-3.5-turbo')

  const funcgo = async () => {
    const message = 'say hi in lithuanian'
    if (message !== undefined) {
      setResponse(prev => [...prev, message])
      messageInput.current!.value = ''
    }
    if (!message)
      return

    const response = await fetch('/api/response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'say hi in lithuanian',
      }),
    })
    console.log('Edge function returned.')

    console.log(response)

    if (!response.ok)
      throw new Error(response.statusText)

    const data = response.body
    if (!data)
      return

    const reader = data.getReader()
    const decoder = new TextDecoder()
    let done = false

    setResponse(prev => [...prev, message])

    let currentResponse: string[] = []
    while (!done) {
      const { value, done: doneReading } = await reader.read()
      done = doneReading
      const chunkValue = decoder.decode(value)
      // currentResponse = [...currentResponse, message, chunkValue];
      currentResponse = [...currentResponse, chunkValue]
      setResponse(prev => [...prev.slice(0, -1), currentResponse.join('')])
    }
    // breaks text indent on refresh due to streaming
    // localStorage.setItem('response', JSON.stringify(currentResponse));
    setIsLoading(false)
  }

  useSWR('fetchingResponse', async () => {
    const storedResponse = localStorage.getItem('response')
    if (storedResponse)
      setResponse(JSON.parse(storedResponse))
  })

  const fetcher = async () => {
    const models = await (await fetch('/api/models')).json()
    setModels(models.data)
    const modelIndex = models.data.findIndex(
      (model: any) => model.id === 'gpt-3.5-turbo',
    )
    setCurrentModel(models.data[modelIndex].id)
    return models
  }

  useSWR('fetchingModels', fetcher)

  console.log({ response })

  return (
    <div className='flex justify-center'>

      <button onClick={funcgo}>submit now</button>

      <form
        onSubmit={() => {}}
        className='fixed bottom-0 w-full md:max-w-3xl bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] mb-4'>
        <textarea
          name='Message'
          placeholder='Type your query'
          ref={messageInput}
          className='w-full resize-none bg-transparent outline-none pt-4 pl-4 translate-y-1'/>
        <button
          disabled={isLoading}
          type='submit'
          className='border bg-white m-2'>
          sumbit
        </button>
      </form>
    </div>
  )
}

export default Form
