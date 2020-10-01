import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../../context/ProductContext'
import Button from '../Button/Button'
import './MainCard.scss'

export default function MainCard() {

    const {mainProduct, onClickAddProduct} = useContext(ProductContext)
    console.log(mainProduct)

    return (
        <div className="MainCard">
            <img src={mainProduct.pictures[0].url} alt="" className="MainCard__img"/>
            <div className="MainCard__data">
                <h2 className="MainCard__name">{mainProduct.title}</h2>
                <Button onClick={() => onClickAddProduct(mainProduct)} text="Agregar al carrito" />
            </div>

        <div className="MainCard__price">$ {mainProduct.price}</div>
        </div>
    )
}
