import Image from 'next/image'
import React from 'react'
import { Login } from './Login'

export const Main = () => {
  return (
    <section className='flex justify-between flex-wrap gap-10 bg-red-400 lg:max-w-980px w-auto mx-10 lg:mx-auto my-0 pb-5 pt-2'>
        <div className='w-500px max-w-[500px] h-500px pt-24  '>
            <div className='-ml-8 -mb-2'>
                <Image src='/facebook.svg' alt='Facebook' height={106} width={301}/>
            </div>
            <div>
              <p className='t text-2xl lg:text-subtitle leading-8 font-regular'>
                O Facebook ajuda-te a comunicar e a partilhar 
                com as pessoas que fazem parte da tua vida.
              </p>
            </div>
        </div>
        <div className='w-396px h-500px pt-12'>
          <Login />
          <div className='py-6 px-4'>
            <span className='t text-sm'>
              <a href="" className='font-black hover:underline'>Cria uma Página</a> para uma celebridade, marca ou empresa.
            </span>
          </div>

        </div>
    </section>
  )
}
