import React from 'react'

interface ContentProps{
    text: string;
}

export const Content = ({text}: ContentProps) => {
  return (
    <li className='text-[12px] text-gray-400 '>
        <a href="" className='hover:underline'>
            {text}
        </a>
    </li>
  )
}
