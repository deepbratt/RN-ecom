import React, { useState } from "react";
import { View, Image } from "react-native";
import {
    Text,
    Card,
    CardItem,
    Right,
    Icon,
    Content
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dimensions } from 'react-native'
import styles from "./style";

const deviceWidth = Dimensions.get('window').width;

export default function ProductSlider(props) {
    const [sliderImages, setSliderImages] = useState(props.prodData);
    return (
        <Grid padder>
            <Row style={{ flexWrap: 'wrap' }}>
                {
                    sliderImages.map((imgData, index) => {
                        return (
                            <Col style={{ width: deviceWidth / 2.1, padding: 6 }} key={index}>
                                <Card style={styles.homeImageSlider} >
                                    <CardItem cardBody>
                                        <Image source={{ uri: imgData.uri }} style={{ flex: 1, height: 150, resizeMode: 'stretch' }} />
                                    </CardItem>
                                    <CardItem cardFooter>
                                        <Content>
                                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>{imgData.title}</Text>
                                            <Text style={{ textAlign: 'center', fontWeight: "normal", fontSize: 12, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
                                                {'\u20B9'}{imgData.actualPrice}
                                            </Text>
                                            <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 10, color: "#2CC0C1", }}> ({imgData.discount}% Off ) </Text>
                                            <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 12 }}> {'\u20B9'}{imgData.discountPrice} </Text>
                                        </Content>
                                    </CardItem>
                                </Card>
                            </Col>

                        );
                    })
                }
            </Row>
        </Grid>
    );
}

