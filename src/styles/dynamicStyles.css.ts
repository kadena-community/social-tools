import { defineProperties, createRainbowSprinkles } from 'rainbow-sprinkles'

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
}

export const colors = {
  black: '#000',
  white: '#fff',
  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-200': '#bfdbfe',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
}

const properties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  dynamicProperties: {
    gridTemplateAreas: true,
    width: true,
    height: true,
    background: true,
    objectFit: true,
    margin: true,
    marginLeft: true,
    marginRight: true,
    fontSize: true,
    fontWeight: true,
    overflow: true,
  },
  staticProperties: {
    display: ['block', 'flex', 'grid'],
    color: colors,
    background: colors,
  },
})
export const dynamicSprinkles = createRainbowSprinkles(properties)

export type Sprinkles = Parameters<typeof dynamicSprinkles>[0]
