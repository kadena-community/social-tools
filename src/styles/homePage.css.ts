import { globalStyle, keyframes, style } from '@vanilla-extract/css'
import { dynamicSprinkles } from '@/styles/dynamicStyles.css'

const background = 'rgba(255,255,255, 0)'

export const pageWrapper = style({
  maxWidth: '60rem',
  width: '100%',
  background,
  marginTop: 40,
  marginBottom: 40,
  paddingLeft: 40,
  paddingRight: 40,
  boxSizing: 'border-box',
})

export const pageTitle = style({
  fontWeight: 500,
  margin: 0,
  marginBottom: 80,
  fontFamily: 'Neue Haas Medium, sans-serif',
})

export const titleAccent = style({
  background: 'linear-gradient(50deg, #ff00e9, #00c0ff 90%)',
  backgroundClip: 'text',
  color: 'transparent',
  fontWeight: 800,
} as any)

export const pageHeroHeader = dynamicSprinkles({
  display: 'block',
  fontWeight: 500,
  fontSize: {
    desktop: '24px',
    mobile: '20px',
  },
  overflow: 'hidden',
  margin: 0,
})

export const footer = style({
  maxWidth: '100%',
  width: '100%',
  background,
  display: 'flex',
  flexDirection: 'row',
  marginTop: 120,
})

export const ul = style({
  width: '100%',
  fontSize: '1.4rem',
  marginBottom: 40,
})

globalStyle(`${ul} li`, {
  color: 'rgba(255, 255, 255, 0.8)',
  fontWeight: 400,
})

globalStyle(`${footer} div`, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginRight: 8,
})

globalStyle(`${footer} div:first-of-type`, {
  marginLeft: -12,
})

globalStyle(`${footer} div p`, {
  margin: 0,
  fontSize: '1rem',
  minHeight: 22,
})

globalStyle(`a`, {
  color: 'white',
  fontWeight: 600,
})

globalStyle(`a:hover`, {
  color: '#00c0ff',
})

globalStyle(`${footer} div p:last-of-type`, {
  color: 'rgba(255, 255, 255, 0.6)',
})

const heartBeat = keyframes({
  '0%': { opacity: 0.4 },
  '60%': { opacity: 1.0 },
  '80%': { opacity: 0.4 },
  '100%': { opacity: 1.0 },
})

export const heart = style({
  transition: 'all 200ms ease-in',
  animation: heartBeat,
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  animationFillMode: 'forwards',
  color: 'red',
})

export const googleFontsFootnote = style({
  marginTop: 20,
  fontSize: 14,
})
