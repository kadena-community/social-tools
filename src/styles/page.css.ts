import { ComplexStyleRule, globalStyle, keyframes, style } from '@vanilla-extract/css'

const background = 'rgba(255,255,255, 0)'

export const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

export const fadeOut = keyframes({
  '0%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0,
  },
  '90%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

const beforeAfterStyles: ComplexStyleRule = {
  content: '',
  position: 'absolute',
  width: 20,
  height: 20,
  zIndex: 1000,
  border: '1px solid rgba(255, 255, 255, 0.2)',
}

export const colorOverride = style({
  color: '#050505 !important',
})

export const area = style({
  position: 'fixed',
  left: 0,
  zIndex: 1001,
  aspectRatio: '1920/1080',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  width: '50vw',
  boxSizing: 'border-box',
  transition: 'opacity 200ms ease-in',
  '::before': {
    ...beforeAfterStyles,
    top: 12,
    left: 12,
    borderRight: 'unset',
    borderBottom: 'unset',
  },
  '::after': {
    ...beforeAfterStyles,
    bottom: 12,
    right: 12,
    borderTop: 'unset',
    borderLeft: 'unset',
  },
})

export const pageWrapper = style({
  maxWidth: '100%',
  width: '100%',
  background,
  marginTop: 40,
  marginBottom: 40,
  paddingTop: 80,
  paddingLeft: 40,
  paddingRight: 40,
  boxSizing: 'border-box',
})

export const avatars = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
})

globalStyle(`${avatars} > *`, {
  marginLeft: 16,
  borderRadius: 8,
  overflow: 'hidden',
  opacity: 0,
  animationName: fadeIn,
  animationDuration: '400ms',
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  animationDelay: '3.2s',
  padding: 4,
  boxSizing: 'border-box',
})

globalStyle(`${avatars} > :nth-child(1)`, {
  marginLeft: 0,
})

globalStyle(`${avatars} > :not(:is([data-theme="light"]))`, {
  border: '2px solid rgba(255, 255, 255, 0.8)',
})

globalStyle(`${avatars} > :is([data-theme="light"])`, {
  border: '2px solid rgba(0,0,0,0.2)',
})

export const card = style({
  position: 'relative',
  padding: '0 40px 40px 40px',
  width: 'calc(100% - 80px)',
  height: 'calc(100% - 80px)',
})

export const cardTitlesWrapper = style({
  marginTop: 40,
  display: 'grid',
  width: '100%',
  gridTemplateColumns: `auto`,
  gap: 16,
})

export const cardTitle = style({
  fontFamily: 'Neue Haas Medium',
  fontSize: '3.4rem',
  fontWeight: 600,
  margin: 0,
  maxWidth: '80%',
  opacity: 0,
  animationName: fadeIn,
  animationDuration: '400ms',
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  animationDelay: '2s',
  selectors: {
    '&:is([data-theme="light"])': {
      color: 'rgba(0, 0, 0, 0.9)',
    },
  },
})

export const sequenceTrailing = style({
  display: 'inline-block',
  fontSize: '2.4rem',
  marginLeft: 16,
  fontWeight: 400,
})

export const cardSubtitle = style({
  fontFamily: 'Neue Haas Regular',
  fontSize: '2.4rem',
  fontWeight: 400,
  margin: 0,
  maxWidth: '70%',
  width: '100%',
  opacity: 0,
  animationName: fadeIn,
  animationDuration: '400ms',
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  animationDelay: '2.4s',
  color: 'rgba(255, 255, 255, 0.6)',
  selectors: {
    '&:is([data-theme="light"])': {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
})

const sharedStyleFooter = {
  marginTop: 80,
}

export const footnote = style({
  ...sharedStyleFooter,
})

export const profileContent = style({
  ...sharedStyleFooter,
  marginRight: 20,
})

export const profilesWrapper = style({
  display: 'flex',
  flexDirection: 'row',
})

const titleStyles = {
  fontFamily: 'Neue Haas Medium',
  fontSize: '2rem',
  fontWeight: 700,
  margin: 0,
  maxWidth: '100%',
  width: '100%',
  color: 'rgba(255,255,255,0.8)',
  opacity: 0,
  animationName: fadeIn,
  animationDuration: '400ms',
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  animationDelay: '2.8s',
}

export const titleH3 = style({
  ...titleStyles,
  color: 'rgba(255, 255, 255, 0.9)',
  selectors: {
    '&:is([data-theme="light"])': {
      color: 'rgba(0, 0, 0, 0.9)',
    },
  },
})

export const titleH4 = style({
  ...titleStyles,
  fontFamily: 'Neue Haas Regular',
  fontStyle: 'italic',
  fontSize: '1.6rem',
  fontWeight: 400,
  marginTop: 8,
  color: 'rgba(255, 255, 255, 0.7)',
  selectors: {
    '&:is([data-theme="light"])': {
      color: 'rgba(0, 0, 0, 0.7)',
    },
  },
})

export const titleH5 = style({
  ...titleStyles,
  fontFamily: 'Neue Haas Regular',
  fontSize: '1.4rem',
  fontWeight: 400,
  marginTop: 8,
  color: 'rgba(255, 255, 255, 0.6)',
  selectors: {
    '&:is([data-theme="light"])': {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
})

export const fadeAfter = style({
  animationName: fadeOut,
  animationDuration: '2000ms',
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  animationDelay: '9s',
})
