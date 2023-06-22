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
        <ul className='flex flex-wrap gap-x-3 gap-y-1 md:gap-x-2 items-center pb-2.5 border-b-[1px] border-b-gray-300'>
          <li className='text-[12px] text-gray-400'>
            Português (Brasil)
          </li>
          {lang.map(content => <Content  text={content}/>)}
          <button className='px-2.5 text-[12px] border rounded-sm border-gray-400 bg-slate-100 transition-all hover:brightness-95'>
            +
          </button>
        </ul>
        <div>
        <ul className='flex flex-wrap gap-x-4 gap-y-0.5 md:gap-x-2 items-center pt-2 border-b-gray-300'>
          {contentFooter.map(content => <Content  text={content}/>)}
        </ul>
        <div className='py-3'>
          <span className='text-[12px] text-gray-500'>Meta © 2023</span>
        </div>
        </div>
    </section>
  )
}
