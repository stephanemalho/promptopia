import '@styles/globals.css'

export const metadata = {
  title: 'promptopia',
  description: 'Discover & Share AI prompts',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className="main">
          <div  className="gradient"/>
        </div>
        <main classNamne="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout