import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
}

const size = {
  small: 14,
  base: 16,
  medium: 18,
  large: 24,
  xlarge: 32,
  xxlarge: 40,
}

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'grid'],
    fontSize: size,
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

export const colors = {
  black0: '#000',
  black: '#050505',
  white: '#f0f0f0',
  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-200': '#bfdbfe',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
}

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'darkMode',
  properties: {
    color: colors,
    background: colors,
  },
})

export const sprinkles = createSprinkles(responsiveProperties, colorProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
