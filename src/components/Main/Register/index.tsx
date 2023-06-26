import Image from 'next/image'
import { useState } from 'react'

interface RegisterProps{
    setModal: (b: boolean)=>void;
}

export const Register = ({setModal}: RegisterProps) => {
  const [gender, setGender] = useState(false)
  const days = new Array(31).fill(31).map((x, index) => index + 1)
  const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
  const years = new Array(118).fill(118).map((x, index) => index + 1906).reverse()
  
  return (
    <section className='h-screen w-screen bg-white/70 absolute top-0 left-0'>
        <div className='hidden desktop:block absolute rounded-md bg-white shadow-black/20 shadow-lg max-w-md w-full left-1/2 top-8 -translate-x-1/2'>
            <div className='flex justify-between p-3.5 border-b-[1px] border-gray-300'>
                <div>
                    <h2 className='text-4xl font-bold mb-1'>
                        Cadastre-se
                    </h2>
                    <span className='text-gray-500'>
                        É rápido e fácil.
                    </span>
                </div>
                <button className='self-start' onClick={() => setModal(false)}>
                    <Image src="./close.svg" alt='X' width={16} height={16} className='text-gray-500' style={{color: '#eee'}}/>
                </button>
            </div>
            <div className='p-3.5'>
                <form action="" className='flex flex-col gap-3'>
                    <div className='flex gap-3 justify-between basis-full'>
                        <input type="text" placeholder='Nome'
                            className='bg-[#f5f6f7] placeholder:text-gray-400 basis-full outline-none
                            desktop:placeholder:text-text-gray-500 shadow-sm shadow-black/20 py-2.5 px-3
                            text-[15px] rounded-sm desktop:rounded-md desktop:shadow-none desktop:border desktop:border-gray-300'
                            required
                        />
                        <input type="text" placeholder='Sobrenome'
                            className='bg-[#f5f6f7] placeholder:text-gray-400 basis-full outline-none
                            desktop:placeholder:text-text-gray-400 shadow-sm shadow-black/20 py-2.5 px-3
                            text-[15px] rounded-sm desktop:rounded-md desktop:shadow-none desktop:border desktop:border-gray-300'
                            required
                        />
                    </div>

                    <input type="text" placeholder='Celular ou email'
                        className='bg-[#f5f6f7] placeholder:text-gray-400 outline-none
                        desktop:placeholder:text-text-gray-400 shadow-sm shadow-black/20 py-2.5 px-3
                        text-[15px] rounded-sm desktop:rounded-md desktop:shadow-none desktop:border desktop:border-gray-300'
                    />
                    <input type="password" placeholder='Nova senha'
                        className='bg-[#f5f6f7] placeholder:text-gray-400 outline-none
                        desktop:placeholder:text-text-gray-400 shadow-sm shadow-black/20 py-2.5 px-3
                        text-[15px] rounded-sm desktop:rounded-md desktop:shadow-none desktop:border desktop:border-gray-300'
                    />
                    <div>
                        <label htmlFor="" className='text-xs text-gray-600'>
                            Data de nascimento
                        </label>
                        <div className='flex justify-between gap-3'>
                            <select name="days" id="days" className='basis-full border border-gray-300 rounded p-2'>
                                {days.map(day => (
                                    <option value={day} key={day}>{day}</option>
                                ))}
                            </select>
                            <select name="months" id="months" className='basis-full border border-gray-300 rounded p-2'>
                                {months.map(month => (
                                        <option value={month} key={month}>{month}</option>
                                    ))}
                            </select>
                            <select name="" id="" className='basis-full border border-gray-300 rounded p-2'>
                                {years.map(year => (
                                        <option value={year} key={year}>{year}</option>
                                    ))}
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="" className='text-xs text-gray-600'>
                            Gênero
                        </label>
                        <ul className='flex justify-between gap-3 flex-grow'>
                            <li className='text-[15px] basis-4/12 flex items-center gap-2 justify-between border border-gray-300 rounded py-2 px-3'>
                                <label  htmlFor="fem" >
                                    Feminino
                                </label>
                                <input type="radio"  name="gender" id="fem" onChange={({target}) => setGender(false)}/>
                            </li>
                            <li className='text-[15px] basis-4/12 flex items-center gap-2 justify-between border border-gray-300 rounded py-2 px-3'>
                                <label  htmlFor="masc">
                                    Masculino
                                </label>
                                <input type="radio"  name="gender" id="masc" onChange={({target}) => setGender(false)}/>
                                
                            </li>
                            <li className='text-[15px] basis-4/12 flex items-center gap-2 justify-between border border-gray-300 rounded py-2 px-3'>
                                <label  htmlFor="pers">
                                    Personalizado
                                </label>
                                <input type="radio" name="gender" id="pers" onChange={({target}) => setGender(target.checked)}/>
                            </li>

                            
                        </ul>
                        {gender && 
                        <div className='flex flex-col gap-2 mt-3'>
                            <select name="" id="" className='basis-full border border-gray-300 rounded p-2'>
                                <option selected={true} value="" disabled={true}>Selecione seu pronome</option>
                                <option value="1">Feminino: "Deseje a ela um feliz aniversário!"</option>
                                <option value="2">Masculino: "Deseje a ele um feliz aniversário!"</option>
                                <option value="3">Neutro: "Deseje a ele(a) um feliz aniversário!"</option>
                            </select>
                            <span className='text-xs text-gray-400'>
                                Seu pronome fica visivel para todos.
                            </span>
                            <input type="text" placeholder='Gênero (opcional)'
                                className='bg-[#f5f6f7] placeholder:text-gray-400 
                                desktop:placeholder:text-text-gray-400 shadow-sm shadow-black/20 py-2.5 px-3
                                text-[15px] rounded-sm desktop:rounded-md desktop:shadow-none desktop:border desktop:border-gray-300'
                            />
                        </div>}
                    </div>

                    <div className='flex flex-col gap-3'>
                        <p className='text-[11px] text-gray-400'>
                            As pessoas que usam nosso serviço podem ter enviado suas informações de contato
                            para o Facebook. <a href="" className='text-main-blue'>Saiba mais</a>
                        </p>
                        <p className='text-[11px] text-gray-400'>
                            Ao clicar em Cadastre-se, você concorda com nossos <a href="" className='text-main-blue'>Termos</a>,
                            <a href="" className='text-main-blue'> Privacidade</a> e <a href="" className='text-main-blue'>Política de Cookies</a>.
                            Você poderá receber notificações por SMS e cancelar isso quando quiser.
                        </p>
                    </div>
                    <button type='submit'
                        className='self-center mb-4 text-base px-10 py-1.5 rounded rounded-md text-white 
                        font-bold bg-main-green-hover hover:filter hover:contrast-75'>
                    Cadrastre-se
                </button>
                </form>
            </div>
        </div>
    </section>
  )
}
