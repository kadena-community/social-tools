import { footer, pageHeroHeader, pageTitle, pageWrapper, ul } from '@/styles/homePage.css'
import { Logo } from '@/components/logo/logo'

import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div className={pageWrapper}>
        <h1 className={pageTitle}>Kadena Social Tools</h1>
        <h2 className={pageHeroHeader.className} style={pageHeroHeader.style}>
          Tools to create
          <br />
          your own graphics 😉
        </h2>
        <ul className={ul}>
          <li>
            <Link href="/update?content=">Cover page (to replace ?content=)</Link>
          </li>
        </ul>
        <footer className={footer}>
          <div>
            <Logo color="white" size={64} />
          </div>
          <div>
            <p>
              <a href="https://kadena.io" target="_blank">
                Kadena LLC
              </a>
            </p>
            <p>
              Contribute to its development on{' '}
              <a href="https://github.com/kadena-community/social-tools" target="_blank">
                GitHub
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
