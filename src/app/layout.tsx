import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideBar from './components/SideBar/SideBar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
      <body className={inter.className}>
        <div className='flex flex-col'>
          <div className='fixed w-screen z-20'>
           <SideBar></SideBar>
          </div>
          <div>
            {children}
          </div>
        </div>
        
        </body>
    </html>
  )
}
