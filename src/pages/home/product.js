import React, { useState } from "react";

import ProductSlider from '../../components/productSlider';
const images = [
    {
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess1.png', 
        title: 'Nike React...',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess.png', 
        title: 'Nike Sneakers',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 3,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess2.png', 
        title: 'Amazon Echo',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 4,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess1.png', 
        title: 'Nike React...',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 5,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess.png', 
        title: 'Nike Sneakers',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 6,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess2.png', 
        title: 'Amazon Echo',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    }
  ]
  //console.log(images);
export default function Product(props){
    const [sliderImages] = useState(images);
    return (
        <ProductSlider prodData={sliderImages} {...props} />
    );
}

