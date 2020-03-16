import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import {ScrollView,Dimensions} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import styles from './style';

const specifications = {
    "ProductId": "5e4e9a3dea88292d54b694a1",
    "productHSN": " 6404",
    "productBrand": "NIKE",
    "productISBN": "ISBN-10, 1629796913",
    "productSAC": "ISBN-10, 1629796913",
    "productUPC": "0885259766736",
    "productLength": "10",
    "productWidth": "200",
    "productHeight": "120",
    "productDimensionUnit": "cm",
    "productNetWeight": "500",
    "productNetWeightUnit": "lb",
};

export default function Description(){
    return (
        <Content style={{borderBottomWidth: 5, borderBottomColor: '#CCC'}}>
            <Grid style={styles.cpnGrid1}>
                <Row>
                    <Text style={styles.productbrand}> Product Specifications </Text>
                </Row>
            </Grid>

          <Card transparent style={{marginLeft:-5}}>
            <CardItem> 
                <Text style={{fontWeight:"bold"}}> HSN : </Text>
                <Text> {specifications.productHSN}</Text>
            </CardItem>

            <CardItem> 
                <Text style={{fontWeight:"bold"}}> Brand :</Text>
                <Text> {specifications.productBrand}</Text>
            </CardItem>  

            <CardItem> 
                <Text style={{fontWeight:"bold"}}> ISBN :</Text>
                <Text> {specifications.productISBN}</Text>
            </CardItem> 

            <CardItem> 
                <Text style={{fontWeight:"bold"}}> SAC :</Text>
                <Text> {specifications.productSAC}</Text>
            </CardItem>  

            <CardItem> 
                <Text style={{fontWeight:"bold"}}> UPC :</Text>
                <Text> {specifications.productUPC}</Text>
            </CardItem>  

            <CardItem> 
                <Text style={{fontWeight:"bold"}}> Length :</Text>
                <Text> {specifications.productLength} {specifications.productDimensionUnit}</Text>
            </CardItem>  

            <CardItem> 
                <Text style={{fontWeight:"bold"}}> Width :</Text>
                <Text> {specifications.productWidth} {specifications.productDimensionUnit}</Text>
            </CardItem>

            <CardItem> 
                <Text style={{fontWeight:"bold"}}> Height :</Text>
                <Text> {specifications.productHeight} {specifications.productDimensionUnit}</Text>
            </CardItem>

            <CardItem> 
                <Text style={{fontWeight:"bold"}}> Weight :</Text>
                <Text> {specifications.productNetWeight} {specifications.productNetWeightUnit}</Text>
            </CardItem>
              
         
          </Card>
        </Content>
    );
}