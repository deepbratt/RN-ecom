import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body,Icon,Left,Right,Badge,Thumbnail } from "native-base";
import {ScrollView,Dimensions,View,TouchableOpacity,ImageBackground,Image} from 'react-native';
import {Row ,Col , Grid} from 'react-native-easy-grid';
import * as Progress from 'react-native-progress';
import styles from './style';
const profileImage = require("../../../assets/contacts/sankhadeep.png");
const ratings = [
    {
        ratingId: 1,
        ratingCount: 3.0 ,
        feedback: "Its Not Good For January Type Winter.But You Have To Wear It with inner or Some Layering.",
        ratingImg: "https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/prod1.jpg",
        userId: "133",
        date: '10 Jan 2020'
    },
    {
        ratingId: 2,
        ratingCount: 3.0 ,
        feedback: "Its Not Good For January Type Winter.But You Have To Wear It with inner or Some Layering.",
        ratingImg: "https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/prod1.jpg",
        userId: "133",
        date: '14  Jan 2020'
    },
    {
        ratingId: 3,
        ratingCount: 3.0 ,
        feedback: "Its Not Good For January Type Winter.But You Have To Wear It with inner or Some Layering.",
        ratingImg: "https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/prod1.jpg",
        userId: "133",
        date: '16 Jan 2020'
    },
]
export default function Ratings(){
    return (
            <ScrollView behaviour="height" keyboardVerticalOffset={64} style={{flex:1}} vertical={true} scrollEnabled={false}>
            <View>
            <Grid style={styles.cpnGrid1}>
                <Row>
                    <Text style={styles.productbrand}> Ratings & Reviews </Text>
                </Row>
            </Grid>
            
            <Grid style={{marginTop:15}}>
                <Row>
                    <Col style={{width:"20%",marginLeft:15}}>
                        <Badge warning>
                            <Text style={styles.rating}> 4.7 <Icon name='star' type="MaterialIcons" style={{color:"#fff",fontSize:14}} /></Text>
                        </Badge>
                    </Col>
                    <Col style={{flexDirection:"row",alignContent:"center"}}>
                        <Text style={{fontWeight:"normal",fontSize:14,marginTop:5,fontWeight:"bold"}}>450 </Text>
                        <Text style={{fontWeight:"normal",fontSize:14,marginTop:5}}>Ratings and</Text>
                        <Text style={{fontWeight:"normal",fontSize:14,marginTop:5,fontWeight:"bold"}}> 300 </Text>
                        <Text style={{fontWeight:"normal",fontSize:14,marginTop:5}}>Reviews</Text>
                    </Col>
                </Row>
            </Grid>

            <Grid style={{marginTop:20,borderBottomWidth:1,borderColor:"#CCC",paddingBottom:20}}>
                <Row style={{flexDirection:"row",marginBottom:10}}>
                    <Col style={{width:"30%"}}>
                        <Text style={{fontWeight:"bold",fontSize:14,marginTop:-5,textAlign:"center",color:"#707070"}}>5 star</Text>
                    </Col>
                    <Col style={{width:"70%"}}>
                        <Progress.Bar progress={0.7} width={200} color={'#FFCA00'}/>
                    </Col>
                </Row>

                <Row style={{flexDirection:"row",marginBottom:10}}>
                    <Col style={{width:"30%"}}>
                        <Text style={{fontWeight:"bold",fontSize:14,marginTop:-5,textAlign:"center",color:"#707070"}}>4 star</Text>
                    </Col>
                    <Col style={{width:"70%"}}>
                        <Progress.Bar progress={0.5} width={200} color={'#FFCA00'}/>
                    </Col>
                </Row>

                <Row style={{flexDirection:"row",marginBottom:10}}>
                    <Col style={{width:"30%"}}>
                        <Text style={{fontWeight:"bold",fontSize:14,marginTop:-5,textAlign:"center",color:"#707070"}}>3 star</Text>
                    </Col>
                    <Col style={{width:"70%"}}>
                        <Progress.Bar progress={0.3} width={200} color={'#FFCA00'}/>
                    </Col>
                </Row>

                <Row style={{flexDirection:"row",marginBottom:10}}>
                    <Col style={{width:"30%"}}>
                        <Text style={{fontWeight:"bold",fontSize:14,marginTop:-5,textAlign:"center",color:"#707070"}}>2 star</Text>
                    </Col>
                    <Col style={{width:"70%"}}>
                        <Progress.Bar progress={0.3} width={200} color={'#FFCA00'}/>
                    </Col>
                </Row>

                <Row style={{flexDirection:"row",marginBottom:10}}>
                    <Col style={{width:"30%"}}>
                        <Text style={{fontWeight:"bold",fontSize:14,marginTop:-5,textAlign:"center",color:"#707070"}}>1 star</Text>
                    </Col>
                    <Col style={{width:"70%"}}>
                        <Progress.Bar progress={0.2} width={200} color={'#FFCA00'}/>
                    </Col>
                </Row>
            </Grid>

            {
                ratings.length > 0 
                ?
                ratings.map((data,index) => {
                    return(
                        <View key={index}>
                        <Grid style={{marginTop:20,borderBottomWidth:1,borderColor:"#CCC",paddingBottom:20,paddingRight:10}}>
                            <Row stlye={{flexDirection:"row"}}>
                                <Col style={{width:"20%",marginLeft:15,borderRightColor:"#CCC",borderRightWidth:1}}>
                                    <Badge warning>
                                        <Text style={styles.rating}> 4.7 <Icon name='star' type="MaterialIcons" style={{color:"#fff",fontSize:14}} /></Text>
                                    </Badge>

                                    <Thumbnail source={profileImage}  style={{alignSelf : 'center',height:60,width:60,marginTop:5,marginLeft:-10}} />

                                    <Text style={{fontSize:13,marginTop:5,marginRight:5,textAlign:"center"}}>Debashis Nath</Text>
                                </Col>
                                <Col style={{alignContent:"center",flexDirection:"column"}}>
                                    <Text style={{fontWeight:"normal",fontSize:14,marginTop:-5,fontWeight:"normal",paddingLeft:5,fontStyle:"italic"}}>"
                                    Its Not Good For January Type Winter. But You Have To Wear It with inner or Some Layering.
                                    Its Not Good For January Type Winter. But You Have To Wear It with inner or Some Layering."
                                    </Text>

                                    <Text style={{fontWeight:"bold",fontSize:12,marginTop:5,paddingLeft:5,fontStyle:"italic",textAlign:"right"}}>
                                    - 10 Jan 2020
                                    </Text>

                                    <Image
                                        source={{
                                            uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/prod1.jpg',
                                        }}
                                        style={{height:70,width:50,marginLeft:5,marginTop:5}}
                                        />
                                </Col>
                            </Row>
                            </Grid>
                        </View>
                    )
                })

                :
                <Grid style={{marginTop:10,borderBottomWidth:1,borderColor:"#CCC",paddingBottom:20,paddingRight:10}} key={"__"+66}>
                    <Row style={{marginTop: 10,flexDirection:"row"}}>
                        <Col>
                            <Text style={{fontSize: 14,textAlign:"center"}}>
                                {' '}No Ratings Available for this product.
                            </Text>
                        </Col>
                        
                    </Row>
                </Grid>
            }
            </View>
            </ScrollView>    

            

 
    );
}