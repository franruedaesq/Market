import React from 'react'
import './Button.scss'

export default function Button({text, color, onClick}) {
    return (
        <>
         <button onClick={onClick} className={`Button Button--${color}`}>{text}</button>   
        </>
    )
}
