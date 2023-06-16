import { Main } from '@/components/Main'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook - entre ou cadastre-se</title>
        <meta name="description" content="Entre no Facebook para começar a compartilhar e se conectar com seus amigos, 
        familiares e com as pessoas que você conhece." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico" />
      </Head>
      <main className='b bg-red-600'>
        <Main />
      </main>
      <footer>

      </footer>
    </>
  )
}
