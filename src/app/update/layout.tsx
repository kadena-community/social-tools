import '@/styles/global.css'
import { updateOuterWrapper } from '@/styles/app.css'

export const dynamic = 'force-static'

export default function UpdateLayout({ children }: { children: React.ReactNode }) {
  return <div className={updateOuterWrapper}>{children}</div>
}
