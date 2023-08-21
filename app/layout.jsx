import './globals.css'
import Providers from './Providers'
import RootLayout from './RootLayout'

export const metadata = {
  title: 'Attendance management system',
  description: 'Made by students for teachers',
}

export default function layout({ children }) {

  return (
    <html lang="en">
      <Providers>
        <RootLayout>
      {children}
        </RootLayout>
      </Providers>
    </html>
  )
}
