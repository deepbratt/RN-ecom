import React, { useState } from "react";

import ProductSlider from '../../components/productSlider';
const images = [
    {
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/essential-phone.jpg', 
        title: 'Oppo F9 Pro',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/6519347_orig.jpg', 
        title: 'Nike Shirts Men',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 3,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/MAIN-1_06.jpg', 
        title: 'Wild Stone Perfume',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 4,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/essential-phone.jpg', 
        title: 'Oppo F9 Pro',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 5,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/6519347_orig.jpg', 
        title: 'Nike Shirts Men',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 6,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/MAIN-1_06.jpg', 
        title: 'Wild Stone Perfume',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    }
  ]
  //console.log(images);
export default function featuredProducts(){
    const [sliderImages] = useState(images);
    return (
        <ProductSlider prodData={sliderImages} />
    );
}

