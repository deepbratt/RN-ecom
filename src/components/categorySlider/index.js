import React, { useState } from "react";
import { View,Image,TouchableOpacity } from "react-native";
import {
  Text
} from "native-base";
import styles from "./style";

export default function CategorySlider(props){
    const [sliderImages,setSliderImages] = useState(props.catData);
    const [activeData, setActiveData] = useState(1);
   
    return (
        <>
        {
        sliderImages.map((imgData,index) => {
            return(
                <TouchableOpacity onPress={() => setActiveData(imgData.id)} key={index} underlayColor='#fff'>
                    <View key={index}>
                        <View style={activeData ===imgData.id ?  styles.activeTopSlider : styles.homeImageSlider}>
                            <View style={{flex:2}}>
                                <Image source={{uri:imgData.uri}} style={activeData === imgData.id ?  styles.activeCatImage : styles.catImage} />
                            </View>
                            {
                                activeData === imgData.id ?

                                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent:'flex-end' ,alignItems: 'center'}}>
                                    <Text style={{color:'#fff',fontWeight:'bold'}}>{imgData.title}</Text>
                                </View>
                                :
                                <View style={{justifyContent: 'center',height:'auto'}}>
                                    <Text style={{textAlign: 'center',padding:5}}>{imgData.title}</Text>
                                </View>
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            );
        })
        }   
        </>
    );
}

