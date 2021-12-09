import Head from 'next/head'

export default function HeadBasic() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="theme-color" content="#f5f5f5" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#1e1e1e" media="(prefers-color-scheme: dark)" />
    </Head>
  )
}
