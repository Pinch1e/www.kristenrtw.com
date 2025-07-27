import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Great_Vibes } from "next/font/google"
import "styles/globals.css"

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={greatVibes.variable}>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
