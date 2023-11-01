'use client'

import { useSearchParams } from 'next/navigation'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams()
  const showSidebar = searchParams.get('sidebar') !== 'false'

  return <>{showSidebar && <>{children}</>}</>
}
