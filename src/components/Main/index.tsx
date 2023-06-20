import Image from 'next/image'
import React from 'react'
import { Login } from './Login'

export const Main = () => {
  return (
    <section className='flex flex-col items-center justify-between flex-wrap gap-10 w-auto mx-10 my-0 pb-5 pt-2 lg:flex-row lg:max-w-980px lg:mx-auto'>
        <div className='w-500px max-w-[500px] lg:h-500px lg:pt-24'>
            <div className=' -mb-2 flex justify-center lg:-ml-8 lg:block'>
                <Image src='/facebook.svg' alt='Facebook' height={106} width={301}/>
            </div>
            <div className='text-center lg:text-left'>
              <p className='t text-2xl lg:text-subtitle leading-8 font-regular'>
                O Facebook ajuda-te a comunicar e a partilhar 
                com as pessoas que fazem parte da tua vida.
              </p>
            </div>
        </div>
        <div className='w-396px h-500px lg:pt-12'>
          <Login />
          <div className='py-6 px-4 text-center lg:text-left'>
            <span className=' text-sm'>
              <a href="" className='font-black hover:underline'>Cria uma Página</a> para uma celebridade, marca ou empresa.
            </span>
          </div>
        </div>
    </section>
  )
}
