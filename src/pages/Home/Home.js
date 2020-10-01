import React, { useEffect, useState } from 'react'
import './Home.scss'
import {ProductProvider} from '../../context/ProductContext'

import Nav from '../../components/Nav/Nav'
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'

export default function Home() {

    const [productList, setProductList] = useState([])
    const [product, setProduct ] = useState({pictures: [{url:''}]})
    const [shoppingCart, setShoppingCart ] = useState([])
    const [ totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        getProducts()
        
    }, [])

    useEffect(() => {
        getTotalPrice()
    }, [shoppingCart])


    const getProducts = async() => {
        const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=gamer');
        const jsonData = await data.json();
        console.log(jsonData.results)
        setProductList(jsonData.results)
    }

    useEffect(() => {
        getProduct("MLA881001777")
    }, [productList])

    const getProduct = async(id) => {
        const data = await fetch(`https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/items/${id}`);
        const dataJson = await data.json();
        setProduct(dataJson)
        console.log(dataJson)
    }
    const onClickAddProduct = (product) => {
        console.log(shoppingCart)
        setShoppingCart([...shoppingCart, product])
    }

    const getTotalPrice = () => {
        if(shoppingCart.length > 0){
            var total = shoppingCart.reduce((accum,item) => accum + item.price, 0)
            console.log(total)
            setTotalPrice(total)
        }
    }
    const Product = {
        products: productList,
        mainProduct: product,
        onClickAddProduct,
        shoppingCart,
        totalPrice

    }



    return (
        <ProductProvider value={Product}>
            <div className="Home">
                <Nav />
                <Header />
                <Body />
            </div>
        </ProductProvider>
    )
}
