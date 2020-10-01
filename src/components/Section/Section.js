import React, { useEffect } from 'react'
import './Section.scss'

export default function Section({productArr, total, totalPrice}) {
    
    return (
        <div className="Section">
            {productArr? productArr.map((item,index) => <li key={index}>{item.title}</li>) : ''}
            {total ? <h1>Total de productos: {total.length}</h1> : ''}
            {totalPrice ? <h2>Precio total: $ {totalPrice}</h2> : ''}
        </div>
    )
}
