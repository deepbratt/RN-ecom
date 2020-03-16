import React, { useState } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body,Button } from "native-base";
import {ScrollView,Dimensions,Image} from 'react-native';
import {Row, Grid,Col} from 'react-native-easy-grid';
import HTML from 'react-native-render-html';
import styles from './style';
import ShortInfo from "./shortInfo";
import StoreEmployees from './storeEmployees';

const deviceWidth = Dimensions.get('window').width;

const htmlContent = `
Lorem Ipsum is simply dummy text of the printing and 
typesettingindustry. Lorem Ipsum has been the industry's
standard dummytext ever since the 1500s, when an 
unknown printer took a galley of type and scrambled 
`;
const images = [
    {
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/1530276232_26GY61_bath_body_works_interior_storefrontss.jpg', 
        title: 'Perfect Spalsh',
        discount : "Upto 50% Off"
    },
    {
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/Store_Locator01.jpg', 
        title: 'Future Farms',
        discount : "Upto 50% Off"
    },
    {
        id: 3,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/414_03.jpg', 
        title: 'Future Farms',
        discount : "Upto 50% Off"
    }     
  ];

  const storeEmployees = [
    {
        designation : 'Owner',
        employee : [
            {
                uri : 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/09-taron_egerton_gettyimages-1191811915.png',
                name : 'Pipon Das',
                role : 'Owner'
            },
        ]
    },
    {
        designation : 'Store Managers',
        employee : [
            {
                uri : 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/ziemba_justin.png',
                name : 'Sujit Sarkar',
                role : 'Store Managers'
            },
            {
                uri : 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/FEDERLE-Michele-Profile-picture.png',
                name : 'Himo Majumder',
                role : 'Store Managers'
            },
            {
                uri : 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/profile-talent-ant-simpson-feature.png',
                name : 'Debasish Kar',
                role : 'Store Managers'
            },
        ]
    },
    {
        designation : 'Sales',
        employee : [
            {
                uri : 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/LinkedIn-Profile-FB.png',
                name : 'Riju Dey',
                role : 'sales'
            },
        ]
    },
    {
        designation : 'Accounts',
        employee : [
            {
                uri : 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/Rosie-Fernandez-CGU-600x600.png',
                name : 'Subhrodeep Mondal',
                role : 'Accounts'
            },
            {
                uri : 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/Stuart-Deborah-photo-2-crop-1-1024x1024.png',
                name : 'Tanmoy Biswas',
                role : 'Accounts'
            },
        ]
    },
]


export default function Description(){
    const [storeImages, setStoreImages] = useState(images);
    return (
        <Content>
            <ShortInfo />
            <Grid style={styles.cpnGrid2}>
                <Row style={{flexDirection: 'row',marginTop:5}}>
                    <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />  
                </Row>
            </Grid>

            <Grid style={styles.cpnGrid}>
            {
            storeImages.map((imgData, index) => {
                return (
                    <Col style={{ width: deviceWidth / 3, padding: 6 }} key={index}>
                        <Card style={styles.homeImageSlider} >
                            <CardItem cardBody>
                                <Image source={{ uri: imgData.uri }} style={{ flex: 1, height: 150, resizeMode: 'stretch' }} />
                            </CardItem>
                        </Card>
                    </Col>
                );
            })
            }
            </Grid>
            <Grid style={styles.cpnGrid3}>
                <Row>
                    <Col style={{width:'20%'}}>
                        <Button warning><Text>5.0</Text></Button>
                    </Col>
                    <Col style={{width:'50%'}}>
                        <Text style={{fontWeight:'bold',fontSize:16}}>Patel Fashion</Text>
                        <Text style={{fontWeight:'normal',fontSize:12}}>Vijay Nagar, New Delhi</Text>
                    </Col>
                    <Col style={{width:'30%'}}>
                        <Button bordered small style={{justifyContent:'center',alignSelf:'center',borderRadius:10}}>
                            <Text>Following</Text>
                        </Button>
                        <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold'}}>1420</Text>
                    </Col>
                </Row>
            </Grid>
            <StoreEmployees empData={storeEmployees} />
        </Content>
    );
}