import '@/styles/global.css'
import { htmlClass, outerWrapper } from '@/styles/app.css'
import { rootLayoutClass } from '@/styles/allStyles.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={htmlClass}>
      <body className={rootLayoutClass}>
        <div className={outerWrapper}>{children}</div>
      </body>
    </html>
  )
}
