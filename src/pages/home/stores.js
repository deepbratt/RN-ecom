import React, { useState } from "react";
import StoreSlider from '../../components/storeSlider';
const images = [
    {
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/1530276232_26GY61_bath_body_works_interior_storefrontss.jpg', 
        title: 'Perfect Spalsh',
        discount : "Upto 50% Off"
    },
    {
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/Store_Locator01.jpg', 
        title: 'Future Farms',
        discount : "Upto 50% Off"
    }    
  ]
export default function Stores(){
    const [sliderImages] = useState(images);
    return (
        <StoreSlider storeData={sliderImages} />
    );
}

