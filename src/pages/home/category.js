import React, { useState } from "react";
import CategorySlider from '../../components/categorySlider';
const images = [
    {
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/foodss.png', 
        title: 'Food'
    },
    {
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/7790b70f-f917-4214-81a5-446fb632212a.jpg', 
        title: 'Fashion'
    },
    {
        id: 3,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/furnituress.png', 
        title: 'Furniture'
    },
    {
        id: 4,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/foodss.png', 
        title: 'Food'
    },
    {
        id: 5,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/7790b70f-f917-4214-81a5-446fb632212a.jpg', 
        title: 'Fashion'
    },
    {
        id: 6,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/furnituress.png', 
        title: 'Furniture'
    }
  ]
export default function Category(){
    const [sliderImages] = useState(images);
    return (
        <CategorySlider catData={sliderImages} />
    );
}

