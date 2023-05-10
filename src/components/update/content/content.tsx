'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { TContent } from '../page'
import {
  cardSubtitle,
  cardTitle,
  cardTitlesWrapper,
  colorOverride,
  footnote,
  profileContent,
  profilesWrapper,
  sequenceTrailing,
  titleH3,
  titleH4,
  titleH5,
} from '@/styles/page.css'

export const Content = () => {
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

  const content: TContent = JSON.parse(_content)

  const addedClass = [content.theme === 'dark' ? '' : colorOverride]

  return (
    <>
      <div className={cardTitlesWrapper}>
        <h1 data-theme={content.theme} className={cardTitle}>
          {content.title}
          {content.seqUpdate ? <span className={sequenceTrailing}>{`#${content.seqUpdate}`}</span> : ''}
        </h1>
        <h2 data-theme={content.theme} className={cardSubtitle}>
          {content.subtitle}
        </h2>
      </div>
      {content.footer ? (
        <div className={footnote}>
          <h3 data-theme={content.theme} className={titleH3}>
            {content.footer.title}
          </h3>
          {content.footer.subtitle ? (
            <h4 data-theme={content.theme} className={titleH4}>
              {content.footer.subtitle}
            </h4>
          ) : (
            <></>
          )}
        </div>
      ) : content.profile ? (
        <div className={profilesWrapper}>
          {content.profile.map((profile) => (
            <div className={profileContent} key={`profile-${profile.image}`}>
              <h3 data-theme={content.theme} className={[titleH3, 'dark'].join(' ')}>
                {profile.name}
              </h3>
              {profile.title ? (
                <h4 data-theme={content.theme} className={titleH4}>
                  {profile.title}
                </h4>
              ) : (
                <></>
              )}
              {profile.account ? (
                <h5 data-theme={content.theme} className={titleH5}>
                  {profile.account}
                </h5>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
