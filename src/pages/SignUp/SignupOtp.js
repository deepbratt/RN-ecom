import React, { Component } from 'react';
import { Container, Content, Form, Item, Icon, Button, Text, Col, Row, Grid, Picker, Input } from 'native-base';
import { StatusBar } from 'react-native';
import VerifyHeader from '../Header/VerifyHeader';

export default class SignupOtp extends Component {
    render() {
        return (
            <>
                <Container>
                    <StatusBar barStyle="dark-content" />
                    <VerifyHeader {...this.props} />
                    <Content style={{ marginTop: 5, borderBottomColor: "#CCC", borderBottomWidth: 7 }} padder>
                        <Grid style={{ marginTop: 20 }}>
                            <Row style={{ marginTop: 7 }}>
                                <Col>
                                    <Text style={{ fontWeight: 'bold', color: "#6A077F", textAlign: "center", paddingBottom: 10 }}>Sent a Verification Code To Verify Your Mobile Number</Text>

                                    <Text style={{ fontWeight: 'bold', color: "#6A077F", textAlign: "center" }}>Sent To +8981695676</Text>

                                </Col>
                            </Row>
                            <Row style={{ padding: 20 }}>
                                <Col>
                                    <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>

                                        <Input style={{ fontFamily: "Montserrat" }} keyboardType="numeric" style={{height:70}} />
                                    </Item>
                                </Col>
                                <Col>
                                    <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>

                                        <Input style={{ fontFamily: "Montserrat" }} keyboardType="numeric" style={{height:70}} />
                                    </Item>
                                </Col>

                                <Col>
                                    <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>

                                        <Input style={{ fontFamily: "Montserrat" }} keyboardType="numeric" style={{height:70}} />
                                    </Item>
                                </Col>
                                <Col>
                                    <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>

                                        <Input style={{ fontFamily: "Montserrat" }} keyboardType="numeric" style={{height:70}} />
                                    </Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button block iconLeft style={{ borderRadius: 5, marginTop: 15, backgroundColor: "#6A077F" }}>

                                        <Text>VERIFY PHONE</Text>
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </Content>
                </Container>
            </>
        )
    }
}