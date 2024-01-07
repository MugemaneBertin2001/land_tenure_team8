import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import PrelineScript from '@/components/landingPage/PrelineScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LandVaul: Web3 Land Tenure',
  description: 'Web3 Land Tenure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-35">
        {children}
        </div>
        <script src="./node_modules/preline/dist/preline.js"></script>
        {/* <script src="https://cdn.jsdelivr.net/npm/preline@2.0.3/dist/preline.min.js"></script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
      </body>
      <PrelineScript />
    </html>
    </ClerkProvider>
  )
}
