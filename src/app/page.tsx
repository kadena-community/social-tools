import HomePage from '@/components/homePage/homePage'
import { Background } from '@/components/background'

export const metadata = {
  title: 'Social Tools - Internal app to create your own graphics',
  description: 'Internal app to create your own graphics',
  keywords: ['developer', 'font', 'typeface', 'web3', 'monospace', 'blockchain'],
  authors: [{ name: 'Kadena', url: 'https://kadena.io' }],
  openGraph: {
    title: 'Social Tools',
    description: 'Internal app to create your own graphics',
    url: 'https://social-tools.kadena.io',
    siteName: 'Social Tools',
    images: ['https://social-tools.kadena.io/images/tile.png', 'https://social-tools.kadena.io/favicon.png'],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: [{ url: '/favicon.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png' }, { url: '/apple-icon@3x.png', sizes: '124x124', type: 'image/png' }],
  },
  themeColor: 'black',
  twitter: {
    card: 'summary_large_image',
    title: 'Social Tools',
    description: 'Internal app to create your own graphics',
    siteId: '@kadena_io',
    images: {
      url: 'https://social-tools.kadena.io/images/tile.png',
      alt: 'Internal app to create your own graphics',
    },
  },
  category: 'technology',
}

export default async function Page() {
  return (
    <>
      <Background />
      <HomePage />
    </>
  )
}
