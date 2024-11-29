import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Jost } from "next/font/google"
import { ThemeProvider } from "@/providers/ThemeProvider"
import Loader from "@/components/Loader"
// import Header from "@/components/layouts/header"
import "./globals.css"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LilrazDev",
  description: "A Frontend Developer",
  applicationName: "Portfolio",
  openGraph: {
    type: "website",
    url: "https://lilrazdev.vercel.app/",
    title: "Lilrazdev",
    description:
      "Site web de portfolio développé avec NextJS, TypeScript, ShadcnUI et GSAP..",
    siteName: "Portfolio website",
    images: [
      {
        url: "https://camo.githubusercontent.com/b6d9030cf789c657705b36081364a030b4917a500def99c24e76e4743dae3a2e/68747470733a2f2f726561646d652d747970696e672d7376672e6865726f6b756170702e636f6d3f666f6e743d466972612b436f64652670617573653d313030302672616e646f6d3d66616c73652677696474683d343335266c696e65733d53616c75742b2b2546302539462539312538422b3b6a652b737569732b4d4148414d41444f552b414c492b4162646f756c2b72617a616b2b21",
      },
    ],
  },
  authors: {
    name: "MAHAMADOU ALI Abdoul razak",
  },
  generator: "NextJs",
  keywords: ["NextJS", "Portfolio", "GSAP", "ShadcnUI"],
  creator: "MAHAMADOU ALI Abdoul razak",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <Analytics />
      <body className={jost.className}>
        <Loader />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
