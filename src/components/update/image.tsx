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
  const hasAvatar = !!content.profile?.filter(({ image }) => image)

  return (
    <>
      {hasAvatar ? (
        content.profile?.map(({ name, image }) => {
          return !!image ? (
            <Image_
              data-theme={content.theme}
              key={`image-${image.split('/')[4]}`}
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
