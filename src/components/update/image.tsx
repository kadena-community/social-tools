'use client'

import Image_ from 'next/image'
import { TContent } from './page'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export const ImageComp = () => {
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
  const hasAvatar = !!content.profile?.filter((profile) => profile?.image)

  return (
    <>
      {hasAvatar ? (
        content.profile
          ?.filter((d) => d)
          .map(({ name, image }, index: number) => {
            return !!image ? (
              <Image_
                data-theme={content.theme}
                key={`image-${image?.split('/')[4] || name + '--' + index}`}
                alt={name}
                width={64}
                height={64}
                src={image}
              />
            ) : (
              <></>
            )
          })
      ) : (
        <></>
      )}
    </>
  )
}
