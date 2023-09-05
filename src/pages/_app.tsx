import type { AppProps } from 'next/app'
import Image from 'next/image'
import { Roboto_Flex } from 'next/font/google'

import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'

import Logo from '@/assets/logo.svg'

globalStyles()

const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.variable}>
      <Header>
        <Image src={Logo} alt="Logo do Ignite Shop" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
