import { style } from '@vanilla-extract/css'
import { dynamicSprinkles } from '@/styles/dynamicStyles.css'

export const backgroundWrapper = style({
  position: 'fixed',
  zIndex: -1,
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
})

export const triangle = style({})

export const svg = dynamicSprinkles({
  width: {
    desktop: '120%',
    mobile: 'auto',
  },
  height: {
    desktop: 'auto',
    mobile: '120%',
  },
})

export const video = dynamicSprinkles({
  width: {
    desktop: '120%',
    mobile: 'auto',
  },
  height: {
    desktop: 'auto',
    mobile: '120%',
  },
  objectFit: 'cover',
  border: 0,
  margin: '-3px',
  marginLeft: {
    desktop: '-3px',
    mobile: '-50%',
  },
})
