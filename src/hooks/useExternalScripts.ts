import { useEffect, useState } from 'react'

export default function useExternalScripts({ url }: { url: string }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) {
      return () => {}
    }

    const head: HTMLHeadElement | null = document.querySelector('head')

    const script = document.createElement('script')
    script.setAttribute('src', url)
    script.setAttribute('async', 'true')
    script.setAttribute('defer', 'true')

    head?.appendChild(script)

    return () => {
      head?.removeChild(script)
    }
  }, [url, isMounted])
}
