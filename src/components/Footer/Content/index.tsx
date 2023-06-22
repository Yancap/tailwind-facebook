import React from 'react'
import styles from './styles.module.css'

interface ContentProps{
    text: string;
}

export const Content = ({text}: ContentProps) => {
  return (
    <li className={`${styles.desk} text-center desktop:text-left text-[12px] text-gray-400`} >
        <a href="" className='hover:underline'>
            {text}
        </a>
    </li>
  )
}
