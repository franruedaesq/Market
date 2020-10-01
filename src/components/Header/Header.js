import React from 'react'
import './Header.scss'
import MainCard from '../MainCard/MainCard'
import ProductCarousel from '../ProductCarousel/ProductCarousel'

export default function Header() {
    return (
        <div className="Header">
            <MainCard />
            <ProductCarousel />
        </div>
    )
}
