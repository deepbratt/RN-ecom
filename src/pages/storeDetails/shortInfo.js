import React, { useState } from 'react';
import { Content, Text,Badge,Icon, Button } from "native-base";
import {Col, Row, Grid} from 'react-native-easy-grid';
import styles from './style.js';
export default function ShortInfo() {
    return(
            <Content padder>
                <Grid>
                    <Col>
                        <Row>
                            <Col style={{width:"auto"}}>
                                <Text style={styles.storeBrand}> Patel Fashion </Text> 
                            </Col>
                        </Row>
                    
                        <Row>
                            <Col>
                                <Text style={styles.wantedStore}>@howrahbridgemarket</Text>
                            </Col>
                        </Row>
                
                        <Row style={{marginTop:5}}>
                            <Icon name="local-shipping" type="MaterialIcons" />
                            <Icon name="verified-user" type="MaterialIcons" />
                            <Icon name="phone" type="MaterialIcons" />
                        </Row>
                    
                        <Row style={{marginTop:7}}>
                            <Col style={{width:"20%"}}>
                                <Text style={styles.available}> OPEN </Text>
                            </Col>
                            <Col>
                                <Text style={styles.instock}> 9:00 - 18:00</Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Button bordered style={{borderRadius:10,marginRight:8}}><Icon name="place" type="MaterialIcons" style={{marginRight:-10}} /><Text>1 Km</Text></Button> 
                            <Button bordered style={{borderRadius:10}}><Icon name="store" type="MaterialIcons"/></Button> 
                        </Row>
                    </Col>
                </Grid>
            </Content>
    );
}