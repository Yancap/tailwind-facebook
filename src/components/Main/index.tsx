import Image from 'next/image'
import React from 'react'

export const Main = () => {
  return (
    <section className='flex justify-evenly gap-8 w-980px mx-auto my-0 pb-5'>
        <div className='w-500px h-500px pt-20'>
            <div className='-ml-8 -mb-2'>
                <Image src='/facebook.svg' alt='Facebook' height={106} width={301}/>
            </div>
            <div>
              <p className='text-subtitle leading-8 font-regular'>
                O Facebook ajuda-te a comunicar e a partilhar 
                com as pessoas que fazem parte da tua vida.
              </p>
            </div>
        </div>
        <div className='w-396px h-500px bg-white'>
          <form action="">
            form
          </form>
        </div>
    </section>
  )
}
