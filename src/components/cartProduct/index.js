import React, { useState, Component } from "react";
import { View, Image, TouchableHighlight } from "react-native";
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

export default function CartProduct(props) {
    const [cart, setCart] = useState(props.prodData);
    const [storeProductChecked, setStoreProductChecked] = useState(true);
    return (

        cart.map((imgData, index) => {
            return (
                <View style={{borderBottomColor:'#DBDBDB',borderBottomWidth:1}}>
                    <Row style={{ paddingTop: 10, flexDirection: "row", }} key={index}>
                        <CheckBox checked={false} style={{ marginTop: -6 }} onChange={() => setStoreProductChecked(!storeProductChecked)}
                            value={storeProductChecked} />
                        <Col style={{ marginLeft: -32 }}>
                            <Image source={{ uri: imgData.uri }} style={{ height: 150, resizeMode: "contain" }} />
                        </Col>
                        <Col>
                            <Text style={{ fontFamily: "Montserrat_bold", fontSize: 14 }}>{imgData.title} </Text>
                            <Text style={{ fontWeight: "bold", fontSize: 14 }}> {'\u20B9'}{imgData.discountPrice} </Text>
                            <Row>
                                <Text style={{ fontWeight: "normal", fontSize: 12, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
                                    {'\u20B9'}{imgData.actualPrice}
                                </Text>
                                <Text style={{ fontWeight: "bold", fontSize: 10, color: "#2CC0C1", }}> ({imgData.discount}% Off) </Text>
                            </Row>
                            <Row>
                                <Text style={{ fontWeight: "bold", fontSize: 12 }}> {imgData.deliveredBy}</Text>
                            </Row>
                            {imgData.deliveryEstimation ?
                                <Row>
                                    <Text style={{ fontWeight: "normal", fontSize: 10 }}> Delivery by:</Text>
                                    <Text style={{ fontWeight: "bold", fontSize: 10 }}> {imgData.deliveryEstimation}</Text>
                                </Row>
                                :
                                null
                            }
                            <Row>
                                {
                                    imgData.cartOptions.map((pickData, pickIndex) => {
                                        return (
                                            <Picker
                                                key={pickIndex}

                                                mode="dropdown"
                                                style={{ borderColor: 'green', borderWidth: 3 }}
                                                iosIcon={<Icon name="arrow-down" />}
                                                placeholder={pickData.options}
                                                placeholderStyle={{ color: "#bfc6ea" }}
                                            >
                                                {
                                                    pickData.optionValues.map((optionData, optionIndex) => {
                                                        return (
                                                            <Picker.Item label={optionData.valuesName} value={optionData.valuesName} key={optionIndex} />
                                                        )
                                                    })
                                                }
                                            </Picker>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ margin: 8 }}>
                        <Col style={{ marginRight: 7 }}>
                            <Button bordered style={{ borderRadius: 5, justifyContent: 'center', alignSelf: 'center', width: 140 }}>
                                <Text style={{ textAlign: 'center' }}>Remove</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button default style={{ borderRadius: 5, justifyContent: 'center', alignSelf: 'center', width: 140 }}>
                                <Text style={{ textAlign: 'center' }}>Save for Later</Text>
                            </Button>
                        </Col>
                    </Row>
                </View>
            );
        })


    );
}
