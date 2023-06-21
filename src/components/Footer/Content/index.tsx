import React from 'react'

interface ContentProps{
    text: string;
}

export const Content = ({text}: ContentProps) => {
  return (
    <li className='text-[12.25px] text-gray-500 md:text-gray-400 md:font-bold'>
        <a href="" className='hover:underline'>
            {text}
        </a>
    </li>
  )
}
