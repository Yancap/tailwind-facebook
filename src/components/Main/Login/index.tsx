import React from 'react'


interface LoginProps{
    setModal: (b: boolean)=>void;
}
export const Login = ({setModal}: LoginProps) => {
  return (
    <div className='bg-white desktop:rounded-md overflow-hidden desktop:shadow-lg desktop:shadow-black/20 p-3.5'>
        <form className='flex flex-col pb-4 gap-2 desktop:gap-3.5 desktop:border-gray-300 desktop:border-solid desktop:border-b-[1px]'>
            <input type="text" placeholder='E-mail ou telefone'
            className='bg-[#f5f6f7] placeholder:text-gray-500 
            desktop:placeholder:text-text-gray-400 shadow-sm shadow-black/20 py-2.5 px-4 desktop:py-3 desktop:px-5 
            text-base rounded-sm desktop:rounded-md desktop:shadow-none desktop:border desktop:border-gray-300'/>

            <input type="password" placeholder='Senha'
            className='bg-[#f5f6f7] placeholder:text-gray-500 
            desktop:placeholder:text-text-gray-400 shadow-sm shadow-black/20 py-2.5 px-4 desktop:py-3 desktop:px-5 
            text-base rounded-sm desktop:rounded-md desktop:shadow-none desktop:border desktop:border-gray-300'/>

            <button type="submit" className='bg-main-blue-hover mt-2 py-2 text-[17px] desktop:text-xl text-white font-bold rounded 
            desktop:rounded-md desktop:py-3 desktop:bg-main-blue transition-all 
            hover:bg-main-blue-hover desktop:mt-0' >
                Entrar
            </button>
            <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0" className='self-center font-medium text-blue-600 text-sm hover:underline'>
                Esqueceu a senha?
            </a>

            <div className='flex items-center justify-between gap-4 desktop:hidden pt-4'>
                <div className='h-px bg-gray-300 w-full' />
                <span className='text-sm text-gray-500'>
                    ou
                </span>
                <div className='h-px bg-gray-300 w-full' />
            </div>
        </form>
        <div className=' desktop:pt-6 pb-2 grid place-items-center'>
            <button onClick={() =>{
                window.screen.width < 450 ?
                 window.location.href = "https://m.facebook.com/reg/?cid=103&locale2=pt_BR&refid=8&wtsid=rdr_0T6OqNEuL0ciqKifB&refsrc=deprecated&_rdr"
                 : setModal(true)
            }}
            className='border border-gray-300 px-16 py-1.5 
            rounded desktop:rounded-md desktop:py-3 desktop:border-none 
            desktop:px-5 desktop:text-white desktop:font-bold desktop:bg-main-green 
            hover:bg-main-green-hover'>
                Criar nova conta
            </button>
        </div>   
    </div>
    
  )
}
