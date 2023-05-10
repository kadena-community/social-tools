import { backgroundWrapper, video } from '@/styles/background.css'
import { Image as ImageComponent } from './image'

export const Background = () => {
  return (
    <div className={backgroundWrapper}>
      <video autoPlay loop muted playsInline className={video.className} style={video.style}>
        <source src="/video/background.mp4" type="video/mp4" />
        <source src="/video/background.webm" type="video/webm" />
      </video>
    </div>
  )
}

export const BackgroundVector = () => {
  return (
    <div className={backgroundWrapper}>
      <ImageComponent />
    </div>
  )
}
