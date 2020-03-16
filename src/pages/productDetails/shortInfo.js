import React, { useState } from 'react';
import { Content, Text,Badge,Icon } from "native-base";
import {Col, Row, Grid} from 'react-native-easy-grid';
import styles from './style.js';
export default function ShortInfo() {
    return(
            <Content style={styles.shortinfoContent} padder>
                    <Grid>
                        <Row>
                            <Col style={{width:"auto"}}>
                                <Text style={styles.productbrand}> Nike </Text> 
                            </Col>
                            <Col>
                                <Text style={styles.productname}>WolfSkin Mens Jacket</Text>
                            </Col>
                        </Row>
                    </Grid>
                    
                    <Grid style={{marginTop:5}}>
                        <Row>
                            <Col style={{width:"20%"}}>
                                <Badge warning>
                                    <Text style={styles.rating}> 5.0 <Icon name='star' type="MaterialIcons" style={{color:"#fff",fontSize:14}} /></Text>
                                </Badge>
                            </Col>
                            <Col>
                                <Text style={styles.ratingnumbers}>450 Ratings</Text>
                            </Col>
                        </Row>
                    </Grid>

                    <Grid style={{marginTop:5}}>
                        <Row>
                            <Col>
                                <Badge success>
                                    <Text style={{fontSize:12}}>Extra 20% discount</Text>
                                </Badge>
                            </Col>
                            
                        </Row>
                    </Grid>

                    <Grid style={{marginTop:7}}>
                        <Row>
                                <Text style={styles.productPrice}> {'\u20B9'} 1049.00 </Text>
                                <Text style={styles.productMrp}> {'\u20B9'} 2999.00 </Text>
                                <Text style={styles.productdiscount}>(65% Off )</Text>
                        </Row>
                        <Row style={{marginTop:2}}>
                            <Col>
                                <Text style={styles.productincltax}> (Incl. of all taxes) </Text>
                            </Col>
                        </Row>

                        <Row style={{marginTop:7}}>
                            <Col style={{width:"20%"}}>
                                <Text style={styles.instock}> In Stock : </Text>
                            </Col>

                            <Col>
                                <Text style={styles.available}> 15 Available</Text>
                                {/* //unavailble class for out of stock  */} 
                            </Col>
                        </Row>
                    </Grid>
            </Content>
    );
}