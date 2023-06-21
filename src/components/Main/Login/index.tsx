import React from 'react'

export const Login = () => {
  return (
    <div className='bg-white rounded-md overflow-hidden shadow-lg shadow-black/20 p-3.5'>
        <form className='flex flex-col pb-4 gap-4 border-gray-300 border-solid border-b-[1px]'>
            <input type="text" placeholder='E-mail ou telefone'
            className='pt-3 pb-3 px-5 text-lg rounded-md border border-gray-300'/>
            <input type="password" placeholder='Senha'
            className='pt-3 pb-3 px-5 text-lg rounded-md border border-gray-300' />
            <button type="submit" className='py-3 text-xl text-white font-black rounded-md bg-main-blue transition-all hover:bg-main-blue-hover'>
                Entrar
            </button>
            <a href="" className='self-center font-medium text-blue-600 text-sm hover:underline'>
                Esqueceu a senha?
            </a>
        </form>
        <div className='pt-6 pb-2 grid place-items-center'>
            <button className='py-3 px-5 rounded-md text-white font-black bg-main-green hover:bg-main-green-hover'>
                Criar nova conta
            </button>
        </div>   
    </div>
    
  )
}
