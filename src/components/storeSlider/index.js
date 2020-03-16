import React, { useState } from "react";
import { View,Image } from "react-native";
import {
  Text
} from "native-base";
import styles from "./style";
import { Row, Grid } from 'react-native-easy-grid';

export default function StoreSlider(props){
    const [sliderImages,setSliderImages] = useState(props.storeData);
    return (
        <>
        {
        sliderImages.map((imgData,index) => {
            return(
                <Grid key={index}>
                    <Row>
                        <View style={styles.catImage}>
                            <Image source={{uri:imgData.uri}} style={styles.storeImage} />
                        </View>
                        <View style={styles.bottomText}>
                            <View style={styles.textBackground}>
                                <Text style={{fontSize:16,textAlign:'center'}}>{imgData.title}</Text>
                                <Text style={{fontSize:14,textAlign:'center',color:'#06B5B6'}}>{imgData.discount}</Text>
                                <Text style={{fontSize:14,textAlign:'center',fontWeight:'bold',marginBottom:5}}>Shop Now</Text>
                            </View>
                        </View>
                    </Row>
                </Grid>
            );
        })
        }   
        </>
    );
}

