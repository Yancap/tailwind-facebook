import Image from 'next/image'
import React from 'react'

export const Register = () => {
  return (
    <section className='hidden desktop:block absolute rounded-md bg-white shadow-md max-w-md w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex justify-between p-3.5 border-b-[1px] border-gray-300'>
            <div>
                <h2 className='text-4xl font-bold mb-1'>
                    Cadastre-se
                </h2>
                <span className='text-gray-500'>
                    É rápido e fácil.
                </span>
            </div>
            <button className='self-start'>
                <Image src="./close.svg" alt='X' width={16} height={16} className='text-gray-500' style={{color: '#eee'}}/>
            </button>
        </div>
        <div className='p-3.5'>
            <form action="" className='flex flex-col gap-3'>
                <div className='flex gap-3 justify-between basis-full'>
                    <input type="text" placeholder='Nome'
                        className='bg-[#f5f6f7] placeholder:text-gray-400 basis-full
                        desktop:placeholder:text-text-gray-500 shadow-sm shadow-black/20 py-2.5 px-3
                        text-[15px] rounded-sm desktop:rounded-md desktop:shadow-none desktop:border desktop:border-gray-300'
                        required
                    />
                    <input type="text" placeholder='Sobrenome'
                        className='bg-[#f5f6f7] placeholder:text-gray-400 basis-full
                        desktop:placeholder:text-text-gray-400 shadow-sm shadow-black/20 py-2.5 px-3
                        text-[15px] rounded-sm desktop:rounded-md desktop:shadow-none desktop:border desktop:border-gray-300'
                        required
                    />
                </div>

                <input type="text" placeholder='Celular ou email'
                    className='bg-[#f5f6f7] placeholder:text-gray-400 
                    desktop:placeholder:text-text-gray-400 shadow-sm shadow-black/20 py-2.5 px-3
                    text-[15px] rounded-sm desktop:rounded-md desktop:shadow-none desktop:border desktop:border-gray-300'
                />
                <input type="password" placeholder='Nova senha'
                    className='bg-[#f5f6f7] placeholder:text-gray-400 
                    desktop:placeholder:text-text-gray-400 shadow-sm shadow-black/20 py-2.5 px-3
                    text-[15px] rounded-sm desktop:rounded-md desktop:shadow-none desktop:border desktop:border-gray-300'
                />
                <div>
                    <label htmlFor="" className='text-xs text-gray-600'>
                        Data de nascimento
                    </label>
                    <div className='flex justify-between gap-3'>
                        <select name="" id="" className='basis-full border border-gray-300 rounded p-2'>
                            <option value="1">1</option>
                        </select>
                        <select name="" id="" className='basis-full border border-gray-300 rounded p-2'>

                        </select>
                        <select name="" id="" className='basis-full border border-gray-300 rounded p-2'>

                        </select>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}
