import React, { useState } from "react";
import { View,Image,TouchableOpacity } from "react-native";
import {Text} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { NavigationContainer } from 'react-navigation';
import styles from "./style";

export default function ProductSlider(props){
    const [sliderImages,setSliderImages] = useState(props.prodData);
    return (
        <Grid>
        {
        sliderImages.map((imgData,index) => {
            return(
                <TouchableOpacity onPress={() => {props.navigation.navigate('ProductDetails', {title: imgData.title}) }} key={index}>
                <Col style={styles.homeImageSlider} >
                    <Row style={{height:150}}>
                        <View style={{flex:1}}>
                            <Image source={{uri:imgData.uri}} style={{height:150,resizeMode:'stretch'}} />
                        </View>
                    </Row>
                    <View>
                        <Text style={{textAlign: 'center',fontWeight:'bold',fontSize:12}}>{imgData.title}</Text>
                    </View>
                    <View>
                        <Text style={{textAlign: 'center',fontWeight:"normal",fontSize:10,textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                            {'\u20B9'}{imgData.actualPrice} 
                        </Text>
                        <Text style={{textAlign: 'center',fontWeight:"bold",fontSize:8,color:"#2CC0C1",}}> ({imgData.discount}% Off ) </Text>
                    </View>
                    <View>
                        <Text style={{textAlign: 'center',fontWeight:"bold",fontSize:12}}> {'\u20B9'}{imgData.discountPrice} </Text>
                    </View>
                </Col>
                </TouchableOpacity>
            );
        })
        }   
        </Grid>
    );
}

