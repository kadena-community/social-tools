import { globalStyle, keyframes, style } from '@vanilla-extract/css'

export const appear = keyframes({
  '0%': {
    opacity: 0,
    top: -60,
  },
  '100%': {
    opacity: 1,
    top: -40,
  },
})

export const wrapper = style({
  position: 'absolute',
  top: -60,
  right: 40,
  opacity: 0,
  animationName: appear,
  animationDuration: '1000ms',
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  animationDelay: '3.4s',
})

export const kadenaAccount = style({
  fontWeight: 700,
  marginBottom: 8,
})

globalStyle(`${wrapper} ul`, {
  display: 'block',
  listStyle: 'none',
  fontSize: '1.4rem',
  textAlign: 'right',
  margin: 0,
})

export const liElement = style({
  color: 'rgba(255, 255, 255, 0.9)',
  selectors: {
    '&:is([data-theme="light"])': {
      color: 'rgba(0, 0, 0, 0.9)',
    },
  },
})
