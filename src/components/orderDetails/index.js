import React, { useState } from "react";
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
import Timeline from 'react-native-timeline-flatlist'

const timeline = [
    {time: '09:00', title: 'Ordered And Approved', description: 'Thu, 06th jan 2020'},
    {time: '10:45', title: 'Delivered', description: 'Thu, 13th jan 2020 '}
  ];
export default function orderDetails(props) {
    const [cart, setCart] = useState(props.prodData);
    const [storeProductChecked, setStoreProductChecked] = useState(true);
    return (
        cart.map((imgData, index) => {
            return (
            <Grid key={index}>
                <Row style={{ padding: 10, flexDirection: "row", borderBottomColor:'#ccc',borderBottomWidth:1}}>
                    <Col style={{width:'70%'}}>
                        <Text style={{ fontFamily: "Montserrat_bold", fontSize: 16 }}>{imgData.title} </Text>
                        <Text>Black</Text>
                        <Text>Sold By: <Text style={{fontWeight:'bold'}}>Patel Fashion</Text></Text>
                        <Text style={{ fontWeight: "bold", fontSize: 14 }}> {'\u20B9'}{imgData.discountPrice} </Text>
                    </Col>
                    <Col style={{width:'30%'}}>
                        <Image source={{ uri: imgData.uri }} style={{ height: 100, resizeMode: "contain" }} />
                    </Col>
                </Row>

                <Row style={{ padding: 10, flexDirection: "row", borderBottomColor:'#ccc',borderBottomWidth:1}}>
                    <Col>
                     <Timeline data={timeline} />
                     <Text>
                        <Text style={{fontWeight: 'bold'}}>Return Policy valid till Feb 12  </Text>
                        <Text style={{fontWeight: 'bold',color:'#62138F'}}>Know More</Text>
                    </Text>
                    </Col>
                </Row>

                <Row style={{ padding: 10, flexDirection: "row", borderBottomColor:'#ccc',borderBottomWidth:1}}>
                    <Col style={{flexDirection:"row",alignContent:"center",alignSelf:'center',justifyContent:'center'}}>
                        <Text style={{ fontWeight: 'normal'}}>
                            <Icon name='star' type="MaterialIcons" style={{ color: "#F7D54D", fontSize: 24 }} />
                            <Icon name='star' type="MaterialIcons" style={{ color: "#F7D54D", fontSize: 24 }} />
                            <Icon name='star' type="MaterialIcons" style={{ color: "#F7D54D", fontSize: 24 }} />
                            <Icon name='star' type="MaterialIcons" style={{ color: "#F7D54D", fontSize: 24 }} />
                            <Icon name='star' type="MaterialIcons" style={{ color: "#707070", fontSize: 24 }} />
                        </Text>
                    </Col>
                    <Col>
                        <Text style={{ fontFamily: 'Montserrat_bold', fontSize: 20, color:'#1FBCBD' }}> Write a Review</Text>
                    </Col>
                </Row>
                
            </Grid>
            );
        })
    );
}
