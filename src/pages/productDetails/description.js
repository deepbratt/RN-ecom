import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import {ScrollView,Dimensions,View} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import HTML from 'react-native-render-html';
import styles from './style';
const htmlContent = `
    <h2>Covered In Warranty</h2>
    <p>Manufacturing defects & exchange available within 180 days of purchase, provided the product is not inappropriately used as determined by the Brand.</p>

    <h2>Not Covered in Warranty</h2>
    <p>Wear & tear </p>

    <h2>Covered in Warranty</h2>
    <p>Manufacturing defects & exchange available within
    180 days of purchase, provided the product is not
    inappropriately used as determined by the Brand.</p>
`;

const additionalFeatures = `
    <h2>PRODUCT DETAILS</h2>
    <p>Beige solid jacket, has a mock collar, 2 pockets, zip closure, long sleeves, straight hem, and polyester lining</p>

    <h2>Size & Fit</h2>
    <p>The model (height 6') is wearing a size M </p>

    <h2>Material & Care</h2>
    <p>Material: Polyester</p>
    <p>Machine Wash</p>
`;


export default function Description(){
    return (
        <Content style={{borderBottomWidth: 5, borderBottomColor: '#CCC'}}>
            <Grid style={styles.cpnGrid1}>
                <Row>
                    <Text style={styles.productbrand}> Description </Text>
                </Row>
            </Grid>

            <Grid style={styles.cpnGrid2}>
                <Row style={{flexDirection: 'row',marginTop:5}}>
                    <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />  
                </Row>
            </Grid>

            <Grid style={styles.cpnGrid1}>
                <Row>
                    <Text style={styles.productbrand}> Additional Description </Text>
                </Row>
            </Grid>

            <Grid style={styles.cpnGrid2}>
                <Row style={{flexDirection: 'row',marginTop:5}}>
                    <HTML html={additionalFeatures} imagesMaxWidth={Dimensions.get('window').width} />
                </Row>
            </Grid>
        </Content>
    );
}