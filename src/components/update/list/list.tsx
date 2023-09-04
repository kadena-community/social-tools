'use client'

import { useEffect, useState } from 'react'
import { kadenaAccount, liElement, wrapper } from '@/styles/list.css'
import { useSearchParams } from 'next/navigation'
import { TContent } from '../page'

export const List = () => {
  const [isMounted, setIsMounted] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const _content = searchParams.get('content')

  if (!_content) {
    return <></>
  }

  const { links, tags, theme }: TContent = JSON.parse(_content)

  return (
    <div className={wrapper}>
      <ul>
        <li data-theme={theme} className={[kadenaAccount, liElement].join(' ')}>
          @kadena_io
        </li>
        {
          links ? (
            links.map((link) => {
              if (!link) return <></>

              return (
                <li data-theme={theme} className={liElement} key={`link-${link}`}>
                  {link} {'->'}
                </li>
              )
            })
          ) : (
            <></>
          )
        }
        {
          tags ? (
            tags.map((tag) => {
              if (!tag) return <></>

              return (
                <li data-theme={theme} className={liElement} key={`tag-${tag}`}>
                  #{tag}
                </li>
              )
            })
          ) : (
            <></>
          )
        }
      </ul>
    </div>
  )
}
