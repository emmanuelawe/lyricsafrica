import NavBar from '@/components/NavBar'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex flex-col bg-[#1D2025] text-white h-screen px-4 md:px-8'>
      <NavBar />
        <div>
        {children}
        </div>
        </div>
        </body>
    </html>
  )
}
