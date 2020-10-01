import React from 'react'
import Button from '../Button/Button'
import './Nav.scss'

export default function Nav() {
    return (
        <div className="Nav">
            <div className="Nav__logo">
                <span>Carrito</span>
            </div>
            <Button text='Ver carrito' color='red'/>
        </div>
    )
}
