import React,{useContext} from 'react'
import './Body.scss'
import ProductContext from '../../context/ProductContext'

import Section from '../Section/Section'

export default function Body() {

    const {shoppingCart, totalPrice} = useContext(ProductContext)
    console.log(shoppingCart)
    return (
        <div className="Body">
            <Section productArr={shoppingCart} />
            <Section total={shoppingCart} totalPrice={totalPrice}/>
        </div>
    )
}
