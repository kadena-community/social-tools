'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { svg, triangle } from '@/styles/background.css'
import { useSearchParams } from 'next/navigation'
import { TContent } from '../update/page'

let currentTheme: TContent['theme'] = 'dark'

export const Image = () => {
  const searchParams = useSearchParams()
  const [hasThemeChange, setHasThemeChange] = useState(false)
  const [color_white, setColor_white] = useState(['white', 'black'])
  const [color_blue1, setColor_blue1] = useState([
    'black',
    '#000AFD',
    '#0047FD',
    '#000AFD',
    '#0047FD',
    '#000AFD',
    '#0047FD',
    'black',
  ])
  const [color_blue2, setColor_blue2] = useState([
    'black',
    '#0047FD',
    '#2856ca',
    '#0047FD',
    '#2856ca',
    '#0047FD',
    '#2856ca',
    'black',
  ])
  const [color_blue3, setColor_blue3] = useState([
    'black',
    '#0074FD',
    '#00f5fd',
    '#0074FD',
    '#00f5fd',
    '#0074FD',
    '#00f5fd',
    'black',
  ])
  const [color_blue4, setColor_blue4] = useState([
    'black',
    '#1400FD',
    '#fd00f5',
    '#1400FD',
    '#fd00f5',
    '#1400FD',
    '#fd00f5',
    'black',
  ])
  const [color_blue5, setColor_blue5] = useState([
    'black',
    '#3100F6',
    '#00f687',
    '#3100F6',
    '#00f687',
    '#3100F6',
    '#00f687',
    'black',
  ])
  const [color_blue6, setColor_blue6] = useState([
    'black',
    '#1D18FE',
    '#18a6fe',
    '#1D18FE',
    '#18a6fe',
    '#1D18FE',
    '#18a6fe',
    'black',
  ])
  const [color_blue7, setColor_blue7] = useState([
    'black',
    '#301EFF',
    '#781eff',
    '#301EFF',
    '#781eff',
    '#301EFF',
    '#781eff',
    'black',
  ])
  const [color_pink1, setColor_pink1] = useState([
    'black',
    '#FD00B6',
    '#fd004c',
    '#FD00B6',
    '#fd004c',
    '#FD00B6',
    '#fd004c',
    'black',
  ])
  const [color_pink2, setColor_pink2] = useState([
    'black',
    '#F20091',
    '#f20010',
    '#F20091',
    '#f20010',
    '#F20091',
    '#f20010',
    'black',
  ])
  const [color_pink3, setColor_pink3] = useState([
    'black',
    '#EA83DA',
    '#8d83ea',
    '#EA83DA',
    '#8d83ea',
    '#EA83DA',
    '#8d83ea',
    'black',
  ])

  const dur = Object.values({
    d1: 30,
    d2: 30,
    d3: 10,
    d4: 10,
    d5: 20,
    d6: 30,
    d7: 10,
    d8: 10,
    d9: 10,
    d10: 20,
    d11: 10,
    d12: 20,
    d13: 10,
    d14: 10,
    d15: 10,
    d16: 10,
    d17: 10,
    d18: 10,
    d19: 10,
    d20: 10,
    d21: 10,
    d22: 10,
    d23: 10,
    d24: 10,
    d25: 10,
    d26: 10,
    d27: 10,
    d28: 10,
    d29: 10,
    d30: 20,
    d31: 10,
    d32: 10,
    d33: 10,
    d34: 10,
    d35: 10,
    d36: 10,
    d37: 10,
    d38: 10,
    d39: 10,
    d40: 10,
    d41: 10,
    d42: 10,
    d43: 10,
    d44: 10,
    d45: 10,
    d46: 10,
    d47: 10,
    d48: 10,
    d49: 10,
    d50: 10,
    d51: 10,
    d52: 10,
    d53: 10,
    d54: 10,
    d55: 10,
    d56: 10,
    d57: 10,
    d58: 10,
    d59: 10,
    d60: 10,
    d61: 30,
    d62: 10,
    d63: 10,
    d64: 10,
    d65: 10,
    d66: 10,
    d67: 10,
    d68: 10,
    d69: 10,
  }).reduce(
    (res: { [key: string]: string }, value: number, index: number) => ({
      ...res,
      [`d${index + 1}`]: `${value}s`,
    }),
    {}
  )
  const [colorIndex, setColorIndex] = useState(0)

  const animatePropsTriangle = {
    animate: { rotate: 120, scale: 4 },
    transition: {
      duration: 100,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  }
  const animatePropsSpotLeft = {
    animate: { rotate: -20, scale: 4 },
    transition: {
      duration: 100,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  }
  const animatePropsSpotRight = {
    animate: { rotate: -20, scale: 4 },
    transition: {
      duration: 100,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  }

  const svgWidth = 1920
  const svgHeight = 1920

  const _content = searchParams.get('content')
  const content: TContent = _content ? JSON.parse(_content) : null

  useEffect(() => {
    if (currentTheme !== content?.theme && content?.theme === 'light') {
      currentTheme = content.theme
      setColor_white(['white', 'white', 'white'])
      setColor_blue1(['white', '#000AFD', '#0047FD', '#000AFD', '#0047FD', '#000AFD', '#0047FD', 'white'])
      setColor_blue2(['white', '#0047FD', '#2856ca', '#0047FD', '#2856ca', '#0047FD', '#2856ca', 'white'])
      setColor_blue3(['white', '#0074FD', '#00f5fd', '#0074FD', '#00f5fd', '#0074FD', '#00f5fd', 'white'])
      setColor_blue4(['white', '#1400FD', '#fd00f5', '#1400FD', '#fd00f5', '#1400FD', '#fd00f5', 'white'])
      setColor_blue5(['white', '#3100F6', '#00f687', '#3100F6', '#00f687', '#3100F6', '#00f687', 'white'])
      setColor_blue6(['white', '#1D18FE', '#18a6fe', '#1D18FE', '#18a6fe', '#1D18FE', '#18a6fe', 'white'])
      setColor_blue7(['white', '#301EFF', '#781eff', '#301EFF', '#781eff', '#301EFF', '#781eff', 'white'])
      setColor_pink1(['white', '#FD00B6', '#fd004c', '#FD00B6', '#fd004c', '#FD00B6', '#fd004c', 'white'])
      setColor_pink2(['white', '#F20091', '#f20010', '#F20091', '#f20010', '#F20091', '#f20010', 'white'])
      setColor_pink3(['white', '#EA83DA', '#8d83ea', '#EA83DA', '#8d83ea', '#EA83DA', '#8d83ea', 'white'])
    } else if (currentTheme !== content?.theme && content?.theme === 'dark') {
      currentTheme = content.theme
      setColor_white(['white', 'black'])
      setColor_blue1(['black', '#000AFD', '#0047FD', '#000AFD', '#0047FD', '#000AFD', '#0047FD', 'black'])
      setColor_blue2(['black', '#0047FD', '#2856ca', '#0047FD', '#2856ca', '#0047FD', '#2856ca', 'black'])
      setColor_blue3(['black', '#0074FD', '#00f5fd', '#0074FD', '#00f5fd', '#0074FD', '#00f5fd', 'black'])
      setColor_blue4(['black', '#1400FD', '#fd00f5', '#1400FD', '#fd00f5', '#1400FD', '#fd00f5', 'black'])
      setColor_blue5(['black', '#3100F6', '#00f687', '#3100F6', '#00f687', '#3100F6', '#00f687', 'black'])
      setColor_blue6(['black', '#1D18FE', '#18a6fe', '#1D18FE', '#18a6fe', '#1D18FE', '#18a6fe', 'black'])
      setColor_blue7(['black', '#301EFF', '#781eff', '#301EFF', '#781eff', '#301EFF', '#781eff', 'black'])
      setColor_pink1(['black', '#FD00B6', '#fd004c', '#FD00B6', '#fd004c', '#FD00B6', '#fd004c', 'black'])
      setColor_pink2(['black', '#F20091', '#f20010', '#F20091', '#f20010', '#F20091', '#f20010', 'black'])
      setColor_pink3(['black', '#EA83DA', '#8d83ea', '#EA83DA', '#8d83ea', '#EA83DA', '#8d83ea', 'black'])
    }
  }, [content])

  if (!_content) {
    return <></>
  }

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svg.className}
      style={svg.style}
    >
      <g clipPath="url(#clip0_411_7312)">
        <motion.rect width={svgWidth} height={svgHeight} fill={currentTheme === 'dark' ? 'black' : 'white'} />
        <motion.rect width={svgWidth} height={svgHeight} fill="url(#paint0_linear_411_7312)" />
        <motion.rect width={svgWidth} height={svgHeight} fill="url(#paint1_linear_411_7312)" />
        <motion.rect width={svgWidth} height={svgHeight} fill="url(#paint2_linear_411_7312)" />
        <mask
          id="mask0_411_7312"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={svgWidth}
          height={svgHeight}
        >
          <motion.rect width={svgWidth} height={svgHeight} fill="url(#paint3_linear_411_7312)" />
        </mask>
        <g mask="url(#mask0_411_7312)">
          <motion.rect
            width={svgWidth}
            height={svgHeight}
            fill="url(#paint4_linear_411_7312)"
            {...(animatePropsSpotRight as any)}
          />
          <motion.rect
            width={svgWidth}
            height={svgHeight}
            fill="url(#paint5_linear_411_7312)"
            {...(animatePropsSpotRight as any)}
          />
          <motion.rect
            width={svgWidth}
            height={svgHeight}
            fill="url(#paint6_linear_411_7312)"
            {...(animatePropsSpotRight as any)}
          />
          <motion.rect
            width={svgWidth}
            height={svgHeight}
            fill="url(#paint7_linear_411_7312)"
            {...(animatePropsSpotRight as any)}
          />
          <motion.rect
            width={svgWidth}
            height={svgHeight}
            fill="url(#paint8_linear_411_7312)"
            {...(animatePropsSpotRight as any)}
          />
        </g>
        <mask
          id="mask1_411_7312"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={svgWidth}
          height={svgHeight}
        >
          <mask
            id="mask2_411_7312"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={svgWidth}
            height={svgHeight}
          >
            <motion.rect width={svgWidth} height={svgHeight} fill="url(#paint9_linear_411_7312)" />
          </mask>
          <g mask="url(#mask2_411_7312)">
            <motion.rect
              width={svgWidth}
              height={svgHeight}
              fill="url(#paint10_linear_411_7312)"
              {...(animatePropsSpotLeft as any)}
            />
            <motion.rect
              width={svgWidth}
              height={svgHeight}
              fill="url(#paint11_linear_411_7312)"
              {...(animatePropsSpotLeft as any)}
            />
            <motion.rect
              width={svgWidth}
              height={svgHeight}
              fill="url(#paint12_linear_411_7312)"
              {...(animatePropsSpotLeft as any)}
            />
            <motion.rect
              width={svgWidth}
              height={svgHeight}
              fill="url(#paint13_linear_411_7312)"
              {...(animatePropsSpotLeft as any)}
            />
            <motion.rect
              width={svgWidth}
              height={svgHeight}
              fill="url(#paint14_linear_411_7312)"
              {...(animatePropsSpotLeft as any)}
            />
            <motion.rect
              width={svgWidth}
              height={svgHeight}
              fill="url(#paint15_linear_411_7312)"
              {...(animatePropsSpotLeft as any)}
            />
            <motion.rect
              width={svgWidth}
              height={svgHeight}
              fill="url(#paint16_linear_411_7312)"
              {...(animatePropsSpotLeft as any)}
            />
            <motion.rect
              width={svgWidth}
              height={svgHeight}
              fill="url(#paint17_linear_411_7312)"
              {...(animatePropsSpotLeft as any)}
            />
          </g>
        </mask>
        <g mask="url(#mask1_411_7312)">
          <motion.rect width={svgWidth} height={svgHeight} fill="url(#paint18_linear_411_7312)" />
          <motion.rect width={svgWidth} height={svgHeight} fill="url(#paint19_linear_411_7312)" />
        </g>
        <mask
          id="mask3_411_7312"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={svgWidth}
          height={svgHeight}
        >
          <motion.rect
            width={svgWidth}
            height={svgHeight}
            fill="url(#paint20_linear_411_7312)"
            {...(animatePropsTriangle as any)}
          />
        </mask>
        <g mask="url(#mask3_411_7312)">
          <motion.rect
            className={triangle}
            width={svgWidth}
            height={svgHeight}
            fill="url(#triangle_left)"
            {...(animatePropsTriangle as any)}
          />
        </g>
        <mask
          id="mask4_411_7312"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={svgWidth}
          height={svgHeight}
        >
          <mask
            id="mask5_411_7312"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={svgWidth}
            height={svgHeight}
          >
            <mask
              id="mask6_411_7312"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={svgWidth}
              height={svgHeight}
            >
              <motion.rect
                width={svgWidth}
                height={svgHeight}
                fill="url(#paint22_linear_411_7312)"
                {...(animatePropsTriangle as any)}
              />
            </mask>
            <g mask="url(#mask6_411_7312)">
              <motion.rect
                width={svgWidth}
                height={svgHeight}
                fill="url(#paint23_linear_411_7312)"
                {...(animatePropsTriangle as any)}
              />
            </g>
          </mask>
          <g mask="url(#mask5_411_7312)">
            <motion.rect
              width={svgWidth}
              height={svgHeight}
              fill="url(#paint24_linear_411_7312)"
              {...(animatePropsTriangle as any)}
            />
          </g>
        </mask>
        <g mask="url(#mask4_411_7312)">
          <motion.rect
            width={svgWidth}
            height={svgHeight}
            fill="url(#paint25_linear_411_7312)"
            {...(animatePropsTriangle as any)}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_411_7312"
          x1="1920"
          y1="0"
          x2="1547.24"
          y2="829.912"
          gradientUnits="userSpaceOnUse"
        >
          <animate attributeName="x1" dur={dur.d1} values="1920;800;1920;" repeatCount="indefinite" />
          <animate
            attributeName="x2"
            dur={dur.d2}
            values="1547.24;1547.24;1547.24;300;700;300;200;1000;1547.24;"
            repeatCount="indefinite"
          />
          <stop stopColor={color_blue1[colorIndex]}>
            <animate attributeName="stop-color" dur={dur.d3} values={color_blue1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_blue1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d4} values={color_blue1.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_411_7312"
          x1="-897.781"
          y1="0"
          x2="0"
          y2="782.333"
          gradientUnits="userSpaceOnUse"
        >
          <animate
            attributeName="x1"
            dur={dur.d5}
            values="-897.781;-497.781;-297.781;0;0;0;-297.781;-497.781;-897.781;"
            repeatCount="indefinite"
          />
          <animate attributeName="x2" dur={dur.d6} values="0;0;897.781;897.781;897.781;0;0;" repeatCount="indefinite" />
          <stop stopColor={color_pink1[colorIndex]}>
            <animate attributeName="stop-color" dur={dur.d7} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d8} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_411_7312"
          x1="524.16"
          y1="777.6"
          x2="464.702"
          y2="600.548"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_white[colorIndex]} stopOpacity="0" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_411_7312"
          x1="778.56"
          y1="829.44"
          x2="0"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <animate attributeName="x1" dur={dur.d9} values="778.56;778.56;0;0;778.56;" repeatCount="indefinite" />
          <animate
            attributeName="x2"
            dur={dur.d10}
            values="0;600;300;800;200;800;400;1230.18;800;300;600;0;"
            repeatCount="indefinite"
          />
          <animate attributeName="y1" dur={dur.d11} values="829.44;429.44;429.44;829.44;" repeatCount="indefinite" />
          <animate attributeName="y2" dur={dur.d12} values="0;63.8355;" repeatCount="indefinite" />
          <stop stopColor={color_white[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d13} values={color_white.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_white[colorIndex]}>
            <animate attributeName="stop-color" dur={dur.d14} values={color_white.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_411_7312"
          x1="489.6"
          y1="889.38"
          x2="280.179"
          y2="637.062"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_blue2[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d15} values={color_blue2.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.0311999" stopColor={color_blue3[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d16} values={color_blue3.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_blue4[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d17} values={color_blue4.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_411_7312"
          x1="489.6"
          y1="889.38"
          x2="280.179"
          y2="637.062"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_blue2[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d18} values={color_blue2.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.0311999" stopColor={color_blue3[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d19} values={color_blue3.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_blue4[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d20} values={color_blue4.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_411_7312"
          x1="489.6"
          y1="889.38"
          x2="280.179"
          y2="637.062"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_blue2[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d21} values={color_blue2.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.0311999" stopColor={color_blue3[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d22} values={color_blue3.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_blue4[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d23} values={color_blue4.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_411_7312"
          x1="489.6"
          y1="889.38"
          x2="280.179"
          y2="637.062"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_blue2[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d24} values={color_blue2.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.0311999" stopColor={color_blue3[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d25} values={color_blue3.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_blue4[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d26} values={color_blue4.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_411_7312"
          x1="489.6"
          y1="889.38"
          x2="280.179"
          y2="637.062"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_blue2[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d27} values={color_blue2.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.0311999" stopColor={color_blue3[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d28} values={color_blue3.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_blue4[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d29} values={color_blue4.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_411_7312"
          x1="804"
          y1="921.24"
          x2="1230.96"
          y2="1000"
          gradientUnits="userSpaceOnUse"
        >
          <animate
            attributeName="y2"
            dur={dur.d30}
            values="1000;500;57.0952;0;500;1000;1000;1000;1000;800;400;1000;"
            repeatCount="indefinite"
          />
          <stop stopColor={color_white[colorIndex]} stopOpacity="0" />
          <stop offset="1" stopColor={color_white[colorIndex]} />
        </linearGradient>
        <linearGradient
          id="paint10_linear_411_7312"
          x1="496.32"
          y1="775.98"
          x2="951.124"
          y2="967.686"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d31} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.055789" stopColor={color_pink1[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d32} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d33} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint11_linear_411_7312"
          x1="496.32"
          y1="775.98"
          x2="951.124"
          y2="967.686"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d34} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.055789" stopColor={color_pink1[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d35} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d36} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint12_linear_411_7312"
          x1="496.32"
          y1="775.98"
          x2="951.124"
          y2="967.686"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d37} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.055789" stopColor={color_pink1[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d38} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d39} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint13_linear_411_7312"
          x1="496.32"
          y1="775.98"
          x2="951.124"
          y2="967.686"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d40} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.055789" stopColor={color_pink1[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d41} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d42} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint14_linear_411_7312"
          x1="496.32"
          y1="775.98"
          x2="951.124"
          y2="967.686"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d43} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.055789" stopColor={color_pink1[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d44} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d45} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint15_linear_411_7312"
          x1="496.32"
          y1="775.98"
          x2="951.124"
          y2="967.686"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d46} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.055789" stopColor={color_pink1[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d47} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d48} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint16_linear_411_7312"
          x1="496.32"
          y1="775.98"
          x2="951.124"
          y2="967.686"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d49} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.055789" stopColor={color_pink1[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d50} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d51} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint17_linear_411_7312"
          x1="496.32"
          y1="775.98"
          x2="951.124"
          y2="967.686"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_pink1[colorIndex]} stopOpacity="0" />
          <stop offset="0.055789" stopColor={color_pink1[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d52} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d53} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint18_linear_411_7312"
          x1="705.12"
          y1="220.32"
          x2="944.58"
          y2="497.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_pink2[colorIndex]}>
            <animate attributeName="stop-color" dur={dur.d54} values={color_pink2.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_pink3[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d55} values={color_pink3.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint19_linear_411_7312"
          x1="705.12"
          y1="220.32"
          x2="944.58"
          y2="497.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_pink2[colorIndex]}>
            <animate attributeName="stop-color" dur={dur.d56} values={color_pink2.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_pink3[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d57} values={color_pink3.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint20_linear_411_7312"
          x1="636"
          y1="540"
          x2="646.519"
          y2="552.303"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.369697" stopColor={color_pink1[colorIndex]}>
            <animate attributeName="stop-color" dur={dur.d58} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.999498" stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d59} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="triangle_left"
          x1="765.6"
          y1="505.44"
          x2="967.548"
          y2="286.907"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_pink1[colorIndex]} stopOpacity="0.41">
            <animate attributeName="stop-color" dur={dur.d60} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.00783044" stopColor={color_pink1[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d61} values={color_pink1.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint22_linear_411_7312"
          x1="0"
          y1="1080"
          x2="782.493"
          y2="561.567"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_blue5[colorIndex]} stopOpacity="0.72">
            <animate attributeName="stop-color" dur={dur.d62} values={color_blue5.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.779847" stopColor={color_blue6[colorIndex]} stopOpacity="0.83">
            <animate attributeName="stop-color" dur={dur.d63} values={color_blue6.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint23_linear_411_7312"
          x1="811.68"
          y1="392.04"
          x2="1349.6"
          y2="1018.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_blue7[colorIndex]} stopOpacity="0.75">
            <animate attributeName="stop-color" dur={dur.d64} values={color_blue7.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="0.0245935" stopColor={color_blue4[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d65} values={color_blue4.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint24_linear_411_7312"
          x1="590.88"
          y1="899.64"
          x2="595.644"
          y2="363.115"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_blue7[colorIndex]}>
            <animate attributeName="stop-color" dur={dur.d66} values={color_blue7.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_blue7[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d67} values={color_blue7.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient
          id="paint25_linear_411_7312"
          x1="734.4"
          y1="482.76"
          x2="744.766"
          y2="472.091"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color_blue7[colorIndex]}>
            <animate attributeName="stop-color" dur={dur.d68} values={color_blue7.join(';')} repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor={color_blue7[colorIndex]} stopOpacity="0">
            <animate attributeName="stop-color" dur={dur.d69} values={color_blue7.join(';')} repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <clipPath id="clip0_411_7312">
          <motion.rect width={svgWidth} height={svgHeight} fill={color_white[colorIndex]} />
        </clipPath>
      </defs>
    </svg>
  )
}
