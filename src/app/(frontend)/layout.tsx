import { Building2, Shield } from 'lucide-react'
// import { Outlet, useLocation } from 'react-router'
import Link from 'next/link'
import '@/styles/index.css'

export default function Layout({ children }) {

  return (
    <html>
      <body>
        <div className="min-h-screen bg-background">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <Link href="/" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xl tracking-tight text-primary">Grundwerkinvest</div>
                    <div className="text-xs text-muted-foreground">Real Estate Business</div>
                  </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                  <Link
                    href="/properties"
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    All Objects
                  </Link>
                  <a
                    href="#contact"
                    className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    Schedule Call
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="pt-20">{children}</main>

          {/* Footer */}
          <footer className="bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="text-xl tracking-tight">Grundwerkinvest</div>
                  </div>
                  <p className="text-primary-foreground/80 max-w-md mb-6">
                    Your trusted partner for ready-made real estate investment businesses in
                    Germany. Secure, profitable, and fully managed.
                  </p>
                  <div className="flex items-center gap-4">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="text-sm text-primary-foreground/80">Licensed & Regulated</span>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                    </li>
                    <li>
                      <Link
                        href="/properties"
                        className="text-primary-foreground/80 hover:text-accent transition-colors"
                      >
                        All Properties
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4">Contact</h4>
                  <ul className="space-y-2 text-primary-foreground/80">
                    <li>Alexander Unrian</li>
                    <li>Selbitz, Germany</li>
                    <li>+49 173 4194304</li>
                    <li>info@grundwerkinvest.de</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
                <p>
                  © 2026 Grundwerkinvest. All rights reserved. | Privacy Policy | Terms of Service
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}



// import React from 'react'
// // import './styles.css'
// import '@/styles/tailwind.css'
//
// export const metadata = {
//   description: 'A blank template using Payload in a Next.js app.',
//   title: 'Payload Blank Template',
// }
//
// export default async function RootLayout(props: { children: React.ReactNode }) {
//   const { children } = props
//
//   return (
//     <html lang="en">
//       <body>
//         <main>{children}</main>
//       </body>
//     </html>
//   )
// }
