import 'nextra-theme-docs/style.css'
import '../app/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
