import React from 'react'
import './ProductCarousel.scss'

import ProductCard from '../PorductCard/ProductCard'

export default function ProductCarousel() {
    return (
        <div className="ProductCarousel">
            <ProductCard />
            <ProductCard />
        </div>
    )
}
