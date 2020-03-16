import React, { useState } from "react";

import ProductSlider from '../../components/productSlider';
const images = [
    {
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/MCMI02620363_Laundry_Mobile_StageBanner_2.jpg', 
        title: 'Washing Machines',
        actualPrice: '14592.69',
        discount: '13',
        discountPrice: '13524.50'
    },
    {
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/69e912fc2b6d1b87e1790cad712571d7.jpg', 
        title: 'Belario Men Wear',
        actualPrice: '2192.69',
        discount: '13',
        discountPrice: '1524.50'
    },
    {
        id: 3,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/71jt2qsDZ-L._UY550_.jpg', 
        title: 'Women Saree',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 4,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/MCMI02620363_Laundry_Mobile_StageBanner_2.jpg', 
        title: 'Washing Machines',
        actualPrice: '14592.69',
        discount: '13',
        discountPrice: '13524.50'
    },
    {
        id: 5,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/69e912fc2b6d1b87e1790cad712571d7.jpg', 
        title: 'Belario Men Wear',
        actualPrice: '2192.69',
        discount: '13',
        discountPrice: '1524.50'
    },
    {
        id: 6,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/71jt2qsDZ-L._UY550_.jpg', 
        title: 'Women Saree',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    }
  ]
  //console.log(images);
export default function MostViewedProducts(){
    const [sliderImages] = useState(images);
    return (
        <ProductSlider prodData={sliderImages} />
    );
}

