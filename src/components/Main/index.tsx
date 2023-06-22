import Image from 'next/image'
import React from 'react'
import { Login } from './Login'

export const Main = () => {
  return (
    <section className='flex flex-col items-center justify-between flex-wrap desktop:gap-10 w-full mx-10 my-0 pb-5 desktop:pt-2 lg:flex-row lg:max-w-[980px] lg:mx-auto'>
        <div className=' desktop:max-w-sm md:max-w-lg md:w-500px lg:h-500px lg:pt-24'>
            <div className='-mb-2 flex justify-center lg:-ml-8 lg:block'>
                <Image src='/facebook.svg' alt='Facebook' height={106} width={301} 
                className='h-10 desktop:h-auto w-auto'/>
            </div>
            <div className='hidden desktop:block desktop:text-center lg:text-left'>
              <p className='text-2xl lg:text-subtitle leading-6 md:leading-8 font-regular'>
              O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
              </p>
            </div>
        </div>
        <div className='desktop:w-396px desktop:h-500px lg:pt-12'>
          <Login />
          <div className='invisible h-4 desktop:visible desktop:h-auto desktop:py-6 px-4 text-center'>
            <span className='text-sm'>
              <a href="" className='font-bold hover:underline'>Cria uma Página</a> para uma celebridade, marca ou empresa.
            </span>
          </div>
        </div>
    </section>
  )
}
