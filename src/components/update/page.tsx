'use client'

import debounce from 'lodash.debounce'

import { area, avatars, card, pageWrapper } from '@/styles/page.css'
import { Logo } from '@/components/logo/logo'
import { List } from './list/list'

import { ImageComp } from './image'
import { Content } from './content/content'
import { useCallback, useEffect, useRef, useState } from 'react'

export type TContent = {
  title: string
  seqUpdate?: string
  subtitle: string
  profile?: {
    image?: string
    name: string
    title: string
    account?: string
  }[]
  footer?: {
    title: string
    subtitle?: string
  }
  tags?: string[]
  links?: string[]
  theme?: 'dark' | 'light'
  contentType?: 'profile' | 'summary'
}

export default function Page() {
  const [isMounted, setIsMounted] = useState(false)
  const [transform, setTransform] = useState('')
  const [left, setLeft] = useState('')
  const areaRef = useRef<HTMLDivElement | null>(null)
  const sidebarRef = useRef<HTMLDivElement | null>(null)

  const setTransformHandlerDebounced = useCallback(() => {
    if (window && areaRef?.current && sidebarRef?.current) {
      const width = window.innerWidth - sidebarRef.current?.clientWidth
      const height = window.innerHeight
      let newScale = width / areaRef.current.clientWidth

      if (areaRef.current.clientHeight * newScale > height) {
        newScale = height / areaRef.current.clientHeight
      }

      setTransform(`scale(${newScale})`)
      setLeft(`${(areaRef.current.clientWidth * (newScale - 1)) / 2}px`)
    }
  }, [areaRef, sidebarRef])

  const setTransformHandler = debounce(setTransformHandlerDebounced, 100)

  useEffect(() => {
    sidebarRef.current = document.querySelector('#sidebar')
  }, [])

  useEffect(() => {
    setIsMounted(true)
    setTransformHandler()

    if (window && !isMounted) {
      window.addEventListener('resize', setTransformHandler)
    }

    return () => {
      window.removeEventListener('resize', setTransformHandler)
    }
  }, [setTransformHandler, isMounted])

  useEffect(() => {
    setTransformHandler()
  }, [areaRef, sidebarRef, isMounted, setTransformHandler])

  if (!isMounted) {
    return <></>
  }

  return (
    <div className={area} style={{ transform, left }} ref={areaRef}>
      <div className={pageWrapper}>
        <div className={card}>
          <div className={avatars}>
            <Logo color="white" size={64} bgColor />
            <ImageComp />
          </div>
          <List />
          <Content />
        </div>
      </div>
    </div>
  )
}
