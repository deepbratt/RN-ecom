import React, { useState } from "react";
import StoreSlider from '../../components/storeSlider';
const images = [
    {
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/106326582-1578495013907gettyimages-929121910.jpeg', 
        title: 'Perfect Spalsh',
        discount : "Upto 50% Off"
    },
    {
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/silpukhuri-shopping-corner-silphukhri-guwahati-departmental-stores-17mq1yoz6k.jpg', 
        title: 'Future Farms',
        discount : "Upto 50% Off"
    }    
  ]
export default function FeaturedCategoryStores(){
    const [sliderImages] = useState(images);
    return (
        <StoreSlider storeData={sliderImages} />
    );
}

