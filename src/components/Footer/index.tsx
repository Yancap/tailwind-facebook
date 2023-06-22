import React from 'react'
import { Content } from './Content';

export const Footer = () => {
  const lang = `English (US),Español,Français 
  (France),Italiano,Deutsch,العربية,हिन्दी,中文(简体),日本語,`.split(',')
  const contentFooter = `Cadastre-se,Entrar,Messenger,
  Facebook Lite,Watch,Locais,Jogos,Marketplace,Meta Pay,Loja da Meta,
  Meta Quest,Instagram,Campanhas de arrecadação de fundos,Serviços,Central 
  de Informações de Votação,Política de Privacidade,Central de Privacidade,
  Grupos,Sobre,Criar anúncio,Criar Página,Desenvolvedores,Carreiras,Cookies,
  Escolhas para anúncios,Termos,Ajuda,Carregamento de contatos e não usuários,
  Configurações`.split(",");
  return (
    <section className='w-full max-w-[980px] mx-auto pt-8'>
        <ul className='grid grid-cols-2 gap-x-10 desktop:flex desktop:flex-wrap desktop:gap-x-3 
        desktop:gap-y-1 md:gap-x-2 desktop:items-center 
        desktop:pb-2.5 desktop:border-b-[1px] 
        desktop:border-b-gray-300'>
          <li className='text-center desktop:text-left text-[12px] text-gray-400'>
            Português (Brasil)
          </li>
          {lang.map(content => <Content key={content}  text={content}/>)}
          <button className='place-self-center px-2.5 text-[12px] border rounded-sm border-gray-400 bg-slate-100 transition-all hover:brightness-95'>
            +
          </button>
        </ul>
        <div>
          <ul className='hidden desktop:flex flex-wrap gap-x-4 gap-y-0.5 md:gap-x-2 items-center pt-2 border-b-gray-300'>
            {contentFooter.map(content => <Content key={content} text={content}/>)}
          </ul>
          <nav className='flex mt-3 desktop:hidden items-center justify-center gap-4'>
            
            <li className='text-[10px] text-gray-400 list-none'>
              Sobre
            </li>
            <li className='text-[10px] text-gray-400 list-item'>
              Ajuda
            </li>
            <li className='text-[10px] text-gray-400 list-item'>
              Mais
            </li>
          </nav>
          <div className='py-3 text-center desktop:text-left'>
            <span className='text-[12px] text-gray-500'>Meta © 2023</span>
          </div>
        </div>
    </section>
  )
}
