import React, { Component } from 'react';
import { Container, Content, Form, Item, Icon, Button, Text, Col, Row, Grid, Picker, Input } from 'native-base';
import { StatusBar } from 'react-native';
import VerifyHeader from '../Header/VerifyHeader';

export default class SignupAddress extends Component{
    render(){
        return(
            <>
                 <Container>
                    <StatusBar barStyle="dark-content" />
                    <VerifyHeader {...this.props} />
                        <Content style={{ marginTop: 5, borderBottomColor: "#CCC", borderBottomWidth: 7 }} padder>
                            <Grid >
                                <Row>
                                    <Col>
                                        <Button block iconLeft style={{ borderRadius: 5, marginTop: 15,textAlign:"left", backgroundColor: "#6A077F",height:60 }}>
                                            <Icon name='my-location' type="MaterialIcons" />
                                            <Text style={{fontSize:18}}>ADD NEW ADDRESS</Text>
                                        </Button>
                                    </Col>
                                </Row>
                            </Grid>
                            <Grid style={{marginTop:10,borderWidth:3,borderRadius:10,height:150,borderColor:"#ccc"}}>
                                <Row >
                                    <Col style={{height:50,borderBottomWidth:2,borderColor:"#ccc",padding:12}}>
                                        <Text style={{color:"#676767",fontWeight:"bold",fontSize:20,fontFamily: "Montserrat"}}>My Address</Text>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col style={{padding:5,textAlign:"center"}}>
                                        <Text style={{color:"#676767",fontSize:18,fontFamily: "Montserrat"}}>No Address Added Yet</Text>
                                    </Col>
                                </Row>
                            </Grid>
                        </Content>
                 </Container>
            </>
        )
    }
}