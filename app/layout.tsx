import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MotionContainer } from "@/components/animations/motion-container";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akasha Paravakal',
  description: 'Empowering Change Through Community Action',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akashaparavakal.org',
    title: 'Akashaparavakal Old Age Home',
    description: 'A loving home for the elderly, providing care, comfort, and community.',
    siteName: 'Akashaparavakal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akashaparavakal Old Age Home',
    description: 'A loving home for the elderly, providing care, comfort, and community.',
    creator: '@akashaparavakal',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gray-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <Navigation />
            <div className="pt-20">
              <MotionContainer>
                {children}
              </MotionContainer>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
