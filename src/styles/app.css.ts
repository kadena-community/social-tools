import { globalStyle, style } from '@vanilla-extract/css'
import { sprinkles } from '@/styles/styles.css'

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontSize: 12,
  fontFamily: '"Kode Mono", monospace',
  width: '100%',
  height: '100%',
})

globalStyle('body', {
  fontSize: 16,
})

export const htmlClass = sprinkles({
  background: {
    lightMode: 'black0',
    darkMode: 'black0',
  },
  color: {
    lightMode: 'white',
    darkMode: 'white',
  },
})

export const outerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  height: '100%',
})

export const updateOuterWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  width: '100%',
  height: '100%',
  maxWidth: '100vw',
  maxHeight: '100vh',
  overflow: 'hidden',
})
