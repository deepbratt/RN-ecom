import React, { useState } from "react";
import { View, Image, } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    Text,
    Card,
    CardItem,
    Right,
    Icon,
    Content,
    Button,
    Left,
    Item,
    Picker,

} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dimensions, CheckBox } from 'react-native'
import styles from "./style";

const deviceWidth = Dimensions.get('window').width;

export default function orders(props) {
    const [cart, setCart] = useState(props.prodData);
    const [storeProductChecked, setStoreProductChecked] = useState(true);
    return (
        cart.map((imgData, index) => {
            return (
                <TouchableOpacity onPress={() => props.navigation.navigate('OrderDetails')}>
                <View style={{borderBottomColor:'#DBDBDB',borderBottomWidth:1}}>
                    <Row style={{ padding: 10, flexDirection: "row", }} key={index}>
                        <Col style={{width:'70%',padding:0,margin:0}}>
                            <Text style={{ fontFamily: "Montserrat_bold", fontSize: 14,backgroundColor:'#DBDBDB',padding:10,textAlign:'center' }}>{imgData.orderId} </Text>
                            <Text style={{ fontFamily: "Montserrat_bold", fontSize: 16 }}>{imgData.brand} </Text>
                            <Text style={{ fontFamily: "Montserrat_Semibold", fontSize: 15 }}>{imgData.title} </Text>
                            <Row style={{marginTop:10}}>
                            {
                                imgData.cartOptions.map((cartData,cartIndex) => {
                                    return(
                                        <Col key={cartIndex}>
                                            <Text>
                                            <Text style={{ fontFamily: "Montserrat_bold", fontSize: 14 }}>{cartData.options} : </Text>
                                            {
                                                cartData.optionValues.map((optionData,optionIndex) => {
                                                    return(
                                                        <Text style={{ fontWeight: "normal", fontSize: 14 }}  key={optionIndex} >{optionData.valuesName} </Text>
                                                    )
                                                })
                                            }
                                            </Text>
                                        </Col>
                                    )
                                })
                            }
                            </Row>
                            
                            <Row style={{flexDirection: 'row',marginTop:10}}>
                            {
                                imgData.deliveryStatus === 'pending' ?
                                <>
                                    <Text style={{marginTop:5,fontWeight:"bold",marginRight:5}}>
                                        <Icon name='album' type="MaterialIcons" style={{color:"#62138F",fontSize:16}} />
                                    </Text>
                                    <Text style={{marginTop:5,marginRight:5,fontWeight:"bold",fontSize:14}}>
                                    Delivery expected by {imgData.deliveryEstimation}
                                    </Text>
                                </>
                                :
                                null
                            }

                            {
                                imgData.deliveryStatus === 'delivered' ?
                                <View>
                                    <Row>
                                        <Col style={{width:'8%'}}>
                                            <Text style={{marginTop:5,fontWeight:"bold",marginRight:5}}>
                                                <Icon name='album' type="MaterialIcons" style={{color:"#62138F",fontSize:16}} />
                                            </Text>
                                        </Col>
                                        <Col style={{width:'90%'}}>
                                            <Text style={{marginTop:5,marginRight:5,fontWeight:"bold",fontSize:14}}>
                                                Delivered on {imgData.deliveryEstimation}
                                            </Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{width:'100%'}}>
                                            <Text style={{marginTop:5,fontWeight:"bold",fontSize:14}}>
                                                Return policy valid till {imgData.deliveryEstimation}
                                            </Text>
                                        </Col>
                                    </Row>
                                    
                                </View>
                                :
                                null
                            }
                                
                            </Row>
                        </Col>
                        <Col style={{width:'30%'}}>
                            <Image source={{ uri: imgData.uri }} style={{ height: 130, resizeMode: "contain" }} />
                        </Col>
                    </Row>
                </View>
                </TouchableOpacity>
            );
        })
    );
}
