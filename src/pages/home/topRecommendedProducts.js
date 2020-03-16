import React, { useState } from "react";

import ProductSlider from '../../components/productSlider';
const images = [
    {
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/b0a17130-00b2-47dd-9acf-75fcdf7333111535614137835-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-1.jpg', 
        title: 'Nike Shirt For Men',
        actualPrice: '592.69',
        discount: '13',
        discountPrice: '524.50'
    },
    {
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/1b8dde3b-b07f-427c-8443-769c647cc296.jpg', 
        title: 'Sunglasses',
        actualPrice: '592.69',
        discount: '13',
        discountPrice: '524.50'
    },
    {
        id: 3,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/NAVIFORCE-Fashion-Casual-Mens-Watches-Top-Brand-Luxury-Leather-Business-Quartz-Watch-Men-Wristwatch-Male-Clock.jpg', 
        title: 'Watch For Men &...',
        actualPrice: '592.69',
        discount: '13',
        discountPrice: '524.50'
    },
    {
        id: 4,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/b0a17130-00b2-47dd-9acf-75fcdf7333111535614137835-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-1.jpg', 
        title: 'Nike Shirt For Men',
        actualPrice: '592.69',
        discount: '13',
        discountPrice: '524.50'
    },
    {
        id: 5,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/1b8dde3b-b07f-427c-8443-769c647cc296.jpg', 
        title: 'Sunglasses',
        actualPrice: '592.69',
        discount: '13',
        discountPrice: '524.50'
    },
    {
        id: 6,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/NAVIFORCE-Fashion-Casual-Mens-Watches-Top-Brand-Luxury-Leather-Business-Quartz-Watch-Men-Wristwatch-Male-Clock.jpg', 
        title: 'Watch For Men &...',
        actualPrice: '592.69',
        discount: '13',
        discountPrice: '524.50'
    },
  ]
  //console.log(images);
export default function topRecommendedProducts(){
    const [sliderImages] = useState(images);
    return (
        <ProductSlider prodData={sliderImages} />
    );
}

