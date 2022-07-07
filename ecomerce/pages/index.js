import React from 'react'

import { Product, FooterBanner, HeroBanner } from '../component';
import {client} from '../lib/client';

export const Home = ({products , bannerData}) => {
  return (
    <div>

      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
        {console.log(bannerData)}


      <div className='products-heading'>

        <h2>Best selling products</h2>
        <p>speakers of many variation</p>

      </div>
      <div className='products-container'>
        {
         products?.map(
            (product) => <Product key = {product._id} product ={product} />)
        }




      </div>
      {console.log('hehe',bannerData[0])}
        <FooterBanner footerBanner = {bannerData && bannerData[0] }/>
    </div>
  )
}
export const getServerSideProps= async() => {

const query  = '*[_type == "product"]'
const products = await client.fetch(query);
const bannerQuery  = '*[_type == "banner"]'
const bannerData = await client.fetch(bannerQuery);

return{

props : {products , bannerData}

}

}
export default Home
