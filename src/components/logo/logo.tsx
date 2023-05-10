import { filledSvg } from '@/styles/logo.css'

type TProps = {
  color: string
  size: number
  bgColor?: boolean
}

const props: TProps = {
  color: 'white',
  size: 64,
}

export const Logo = ({ color, size, bgColor }: TProps) => {
  return (
    <svg
      className={(bgColor ? [filledSvg] : []).join(' ')}
      width={size}
      height={size}
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="paint0_linear_1_90"
          x1="44.8867"
          y1="48.0739"
          x2="97.812"
          y2="48.0739"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} stopOpacity="0" />
          <stop offset="0.6" stopColor={color} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_90"
          x1="48.3566"
          y1="63.9939"
          x2="91.1318"
          y2="91.7675"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} stopOpacity="0" />
          <stop offset="0.6" stopColor={color} />
        </linearGradient>
        <clipPath id="clip0_1_90">
          <rect width="124" height="124" fill={color} />
        </clipPath>
      </defs>
      <g clipPath="url(#clip0_1_90)">
        <path d="M97.812 20.5515H73.5003L44.8867 50.5781V75.5963L97.812 20.5515Z" fill="url(#paint0_linear_1_90)" />
        <path d="M44.8867 103.448H24.3352V20.5515H44.8867V103.448Z" fill={color} />
        <path
          d="M99.6648 103.448L65.8937 53.7495L52.1404 68.0445L75.8005 103.448H99.6648Z"
          fill="url(#paint1_linear_1_90)"
        />
      </g>
    </svg>
  )
}
