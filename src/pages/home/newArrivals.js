import React, { useState } from "react";

import ProductSlider from '../../components/productSlider';
const images = [
    {
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/20-400x400.png', 
        title: 'Nike Suiter',
        actualPrice: '592.69',
        discount: '13',
        discountPrice: '524.50'
    },
    {
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/groom19productsawards2.jpg', 
        title: 'Groom Sawards2',
        actualPrice: '592.69',
        discount: '13',
        discountPrice: '524.50'
    },
    {
        id: 3,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/3ef70df73e4ee5422c23a759b83bca1b.jpg', 
        title: 'Jeans For Men',
        actualPrice: '592.69',
        discount: '13',
        discountPrice: '524.50'
    },
    {
        id: 4,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/20-400x400.png', 
        title: 'Nike Suiter',
        actualPrice: '592.69',
        discount: '13',
        discountPrice: '524.50'
    },
    {
        id: 5,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/groom19productsawards2.jpg', 
        title: 'Groom Sawards2',
        actualPrice: '592.69',
        discount: '13',
        discountPrice: '524.50'
    },
    {
        id: 6,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/3ef70df73e4ee5422c23a759b83bca1b.jpg', 
        title: 'Jeans For Men',
        actualPrice: '592.69',
        discount: '13',
        discountPrice: '524.50'
    }
  ]
  //console.log(images);
export default function NewArrivals(){
    const [sliderImages] = useState(images);
    return (
        <ProductSlider prodData={sliderImages} />
    );
}

