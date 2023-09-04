import { ComplexStyleRule, style } from '@vanilla-extract/css'

export const sidebarWrapper = style({
  position: 'fixed',
  zIndex: 1000,
  right: 0,
  width: '24vw',
  maxWidth: 400,
  minWidth: 280,
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: '12px 24px',
  borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
  background: 'rgba(0,0,0,.4)',
  marginLeft: 12,
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  boxSizing: 'border-box',
  paddingBottom: 40,
})

export const video = style({
  border: '1px solid #999',
  width: '98%',
})

export const title = style({
  margin: 0,
})
export const description = style({
  margin: 0,
  marginBottom: 24,
})

const inputs: ComplexStyleRule = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '8px 4px',
  fontSize: 16,
  background: 'transparent',
  border: 'none',
  borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
  color: 'white',
}

export const span = style({
  width: '100%',
  fontSize: 14,
  marginBottom: 4,
  fontWeight: 'bold',
  color: 'rgba(255, 255, 255, 0.7)',
})

export const input = style({
  ...inputs,
  userSelect: 'none',
  outline: 'none',
  padding: 8,
  ':hover': {
    background: 'rgba(255, 255, 255, 0.2)'
  }
})

export const lastInputLabel = style({
  marginBottom: '0 !important',
})

export const select = style({
  ...inputs,
  border: '1px solid rgba(255, 255, 255, 0.2)',
  outline: 'none',
  marginBottom: 16,
  ':hover': {
    background: 'rgba(255, 255, 255, 0.2)'
  }
})

export const fieldset = style({
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '0 16px',
  marginTop: 40,
  ':hover': {
    border: '1px solid rgba(255, 255, 255, 0.2)',
    background: 'rgba(255, 255, 255, 0.04)',
  }
})

export const nestedFieldset = style({
  margin: '8px 0 16px 0',
  marginBottom: 24,
  padding: 16,
  ':last-of-type': {
    marginBottom: 0,
  }
})

export const legend = style({
  padding: '0 8px 0 8px',
})

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  selectors: {
    [`${fieldset} &`]: {
      marginBottom: 16,
    },
    [`${container} > &`]: {
      marginBottom: 20,
    }
  },
  ':last-of-type': {
    marginBottom: 0,
  }
})

export const button = style({
  ...inputs,
  marginTop: 0,
  background: 'red',
  selectors: {
    [`${fieldset} + &`]: {
      marginBottom: 20,
      background: 'blue'
    }
  }
})

export const savebutton = style({
  background: 'white',
  color: 'black',
  fontWeight: 'bold',
})


