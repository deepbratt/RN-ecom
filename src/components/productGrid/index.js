import React, { useState } from "react";
import { View, Image } from "react-native";
import {
    Text,
    Card,
    CardItem,
    Right,
    Icon,
    Content,
    Button
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dimensions } from 'react-native'
import styles from "./style";

const deviceWidth = Dimensions.get('window').width;

export default function ProductGrid(props) {
    const [sliderImages, setSliderImages] = useState(props.prodData);
    return (
        <Grid >
            <Row style={{ flexWrap: 'wrap' }}>
                {
                    sliderImages.map((imgData, index) => {
                        return (
                            <Col style={{ width: deviceWidth / 1 }} key={index}>
                                <Card style={styles.homeImageSlider} >
                                    <CardItem cardBody style={index % 2 === 0 ? styles.greyBackground : {}}>
                                        <Image source={{ uri: imgData.uri }} style={{ flex: 1, height: 150, resizeMode: 'contain', marginLeft: -68 }} />
                                        <Content style={{ marginLeft: -50 }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{imgData.title}</Text>
                                            <Text style={{ fontWeight: 'bold', fontSize: 14, overflow: 'hidden' }}>Colourblocked Straight Kurt.</Text>
                                            <Text style={{ fontWeight: 'normal', fontSize: 12 }}>Sold By: Patel Fashion</Text>
                                            <Text style={{ fontWeight: 'normal', fontSize: 16 }}>
                                                <Icon name='star' type="MaterialIcons" style={{ color: "yellow", fontSize: 14 }} />
                                                <Icon name='star' type="MaterialIcons" style={{ color: "yellow", fontSize: 14 }} />
                                                <Icon name='star' type="MaterialIcons" style={{ color: "yellow", fontSize: 14 }} />
                                                <Icon name='star' type="MaterialIcons" style={{ color: "yellow", fontSize: 14 }} />
                                                <Icon name='star' type="MaterialIcons" style={{ color: "#707070", fontSize: 14 }} />
                                                <Text style={{ fontWeight: 'normal', fontSize: 14 }}>(324)</Text>
                                            </Text>
                                            <Row>
                                                <Text style={{ fontWeight: "bold", fontSize: 12 }}> {'\u20B9'}{imgData.discountPrice} </Text>
                                                <Text style={{ fontWeight: "normal", fontSize: 12, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
                                                    {'\u20B9'}{imgData.actualPrice}
                                                </Text>
                                                <Text style={{ fontWeight: "bold", fontSize: 10, color: "#2CC0C1", }}> ({imgData.discount}% Off) </Text>
                                            </Row>
                                            <Row style={{ marginTop: 5 }}>
                                                <Button bordered small style={{ marginRight: 2 }}>
                                                    <Text style={{ fontSize: 10 }}>Wantedlist</Text>
                                                </Button>
                                                <Button small>
                                                    <Text style={{ fontSize: 10 }}>Move to cart</Text>
                                                </Button>
                                            </Row>
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
