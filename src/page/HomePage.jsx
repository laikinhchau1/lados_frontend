import React from 'react'
import { Slider } from '../components/Slider/Slider'
import FlashSale from '../components/FlashSale/FlashSale'
import Banner from '../components/Banner/Banner'
import ProductCardTab from '../components/ProductCardTab/ProductCardTab'
import NewProduct from '../components/NewProduct/NewProduct'
import Policy from '../components/Policy/Policy'


const HomePage = () => {
    return (
        <div>
            <Slider />
            <FlashSale />
            <Banner />
            <ProductCardTab />
            <NewProduct />
            <Policy />
        </div>
    )
}

export default HomePage