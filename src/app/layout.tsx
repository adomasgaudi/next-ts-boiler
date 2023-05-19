import './css/globals.css'

export const metadata = {
  title: 'The big bad title',
  description: 'Website description goes here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className='container mx-auto flex flex-row justify-between py-3'>
            <h3 className="text-xl">Chunky UI</h3>
            <ul className='flex flex-row gap-3'>
              <li>tab 1</li>
              <li>tab 2</li>
            </ul>
          </div>
        </header>
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
