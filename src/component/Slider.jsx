import React from 'react'
import Offer from './Offer'
import './Slider.css'
const Slider = () => {
  return (
    <div className='slidebar'>
        <Offer discount='Flat 50%' url='https://www.shopickr.com/wp-content/uploads/2015/10/amazon-india-electronics-sale-2015-banner1.jpg'/>
        <Offer discount='Flat 20%' url='https://www.cherrypickindia.in/wp-content/uploads/2020/12/1-848x487.jpg'/>
        <Offer discount='Upto 80%' url='https://imgmedia.lbb.in/media/2020/02/5e3bb072cfd7029447ae3b74_1580970098487.jpg'/>
        <Offer discount='Upto 20%' url='https://cdn1.vectorstock.com/i/1000x1000/28/15/shopping-basket-with-grocery-products-sale-banner-vector-33852815.jpg'/>
        <Offer discount='Free' url='https://c1.wallpaperflare.com/preview/466/330/389/liquor-bottles-alcohol-drink.jpg'/>
    </div>
  )
}

export default Slider