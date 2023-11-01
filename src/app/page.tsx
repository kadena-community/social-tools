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
    url: 'https://kadena-community.github.io/social-tools',
    siteName: 'Social Tools',
    images: [
      'https://kadena-community.github.io/social-tools/images/tile.png',
      'https://kadena-community.github.io/social-tools/favicon.png',
    ],
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
    icon: [{ url: '/social-tools/favicon.png', type: 'image/png' }],
    shortcut: [{ url: '/social-tools/favicon.png', type: 'image/png' }],
    apple: [
      { url: '/social-tools/apple-icon.png' },
      { url: '/social-tools/apple-icon@3x.png', sizes: '124x124', type: 'image/png' },
    ],
  },
  themeColor: 'black',
  twitter: {
    card: 'summary_large_image',
    title: 'Social Tools',
    description: 'Internal app to create your own graphics',
    siteId: '@kadena_io',
    images: {
      url: 'https://kadena-community.github.io/social-tools/images/tile.png',
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
