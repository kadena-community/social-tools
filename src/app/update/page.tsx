import PageComponent from '@/components/update/page'
import { metadata as _metadata } from '../page'
import { BackgroundVector } from '@/components/background'
import { Sidebar } from '@/components/sidebar'
import { Wrapper } from '../../components/wrapper'

export const metadata = {
  ..._metadata,
  title: 'Kadena Socials',
  description: 'Create Kadena Update Videos',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: null,
  twitter: null,
  authors: [{ name: 'Kadena', url: 'https://kadena.io' }],
}

export default async function Page(props: any) {
  return (
    <>
      <BackgroundVector />
      <PageComponent {...props} />
      <Wrapper>
        <Sidebar />
      </Wrapper>
    </>
  )
}
