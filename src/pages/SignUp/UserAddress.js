import React, { Component } from 'react';
import { Container, Content, Form, Item, Icon, Button, ListItem, Text, Col, Row, Grid, Input,Right, Left,Radio } from 'native-base';
import { StatusBar } from 'react-native';
import VerifyHeader from '../Header/VerifyHeader';

export default class UserAddress extends Component {
    render() {
        return (
            <>
                <Container>
                    <StatusBar barStyle="dark-content" />
                    <VerifyHeader {...this.props} />
                    <Content style={{ marginTop: 5, borderBottomColor: "#CCC", borderBottomWidth: 7 }} padder>
                        <Grid >
                            <Row>
                                <Col>
                                    <Button block iconLeft style={{ borderRadius: 5, marginTop: 15, textAlign: "left", backgroundColor: "#6A077F", height: 60 }}>
                                        <Icon name='my-location' type="MaterialIcons" />
                                        <Text style={{ fontSize: 18 }}>Choose Your Location On Map</Text>
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                        <Grid>
                            <Row>
                                <Col>
                                    <Form style={{ marginTop: 10, borderTopColor: "#000", marginBottom: 15, }}>
                                        <Row>
                                            <Col>
                                                <Item regular style={{ marginTop: 10, borderRadius: 7, borderWidth: 2, borderColor: "#6A077F" }}>
                                                    <Input placeholder='First Name' style={{ fontFamily: "Montserrat" }} />
                                                </Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Item regular style={{ marginTop: 10, borderRadius: 7, borderWidth: 2, borderColor: "#6A077F" }}>
                                                    <Input placeholder='Last Name' style={{ fontFamily: "Montserrat" }} />
                                                </Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Item regular style={{ marginTop: 10, borderRadius: 7, borderWidth: 2, borderColor: "#6A077F" }}>
                                                    <Input placeholder='Enter 10 Digit Phone Number' style={{ fontFamily: "Montserrat" }} />
                                                </Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Item regular style={{ marginTop: 10, borderRadius: 7, borderWidth: 2, borderColor: "#6A077F" }}>
                                                    <Input placeholder='Pincode' style={{ fontFamily: "Montserrat" }} />
                                                </Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Item regular style={{ marginTop: 10, borderRadius: 7, borderWidth: 2, borderColor: "#6A077F" }}>
                                                    <Input placeholder='House no, Building Name' secureTextEntry={true} style={{ fontFamily: "Montserrat" }} />
                                                </Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Item regular style={{ marginTop: 10, borderRadius: 7, borderWidth: 2, borderColor: "#6A077F" }}>
                                                    <Input placeholder='Street' secureTextEntry={true} style={{ fontFamily: "Montserrat" }} />
                                                </Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Item regular style={{ marginTop: 10, borderRadius: 7, borderWidth: 2, borderColor: "#6A077F" }}>
                                                    <Input placeholder='LandMark' secureTextEntry={true} style={{ fontFamily: "Montserrat" }} />
                                                </Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Item regular style={{ marginTop: 10, borderRadius: 7, borderWidth: 2, borderColor: "#6A077F", width: "95%" }}>
                                                    <Input placeholder='City' secureTextEntry={true} style={{ fontFamily: "Montserrat" }} />
                                                </Item>
                                            </Col>
                                            <Col>
                                                <Item regular style={{ marginTop: 10, borderRadius: 7, borderWidth: 2, borderColor: "#6A077F", width: "100%" }}>
                                                    <Input placeholder='State' secureTextEntry={true} style={{ fontFamily: "Montserrat" }} />
                                                </Item>
                                            </Col>
                                        </Row>
                                        <Row style={{ borderTopWidth: 1, marginTop: 30, borderColor: "#ccc" }}>
                                            <Col style={{ padding: 8, textAlign: "center" }}>
                                                <Text style={{ color: "#676767", fontSize: 18, fontFamily: "Montserrat" }}>Address Type</Text>
                                            </Col>
                                        </Row>
                                        <ListItem selected={false} >
                                            <Left>
                                                <Radio
                                                    color={"#6A077F"}
                                                    selectedColor={"#6A077F"}
                                                    selected={true}
                                                />
                                                <Text style={{marginLeft:10,fontFamily: "Montserrat"}}>Home Address</Text>
                                            </Left>
                                        </ListItem>
                                        <ListItem selected={false} >
                                            <Left>
                                                <Radio
                                                    color={"#6A077F"}
                                                    selectedColor={"#6A077F"}
                                                    selected={false}
                                                />
                                                <Text style={{marginLeft:10,fontFamily: "Montserrat"}}>Work / Office Address</Text>
                                            </Left>
                                        </ListItem>
                                        <ListItem selected={false} >
                                            <Left>
                                                <Radio
                                                    color={"#6A077F"}
                                                    selectedColor={"#6A077F"}
                                                    selected={false}
                                                />
                                                <Text style={{marginLeft:10,fontFamily: "Montserrat"}}>Others</Text>
                                            </Left>
                                        </ListItem>
                                     
                                        <Button block iconLeft style={{ borderRadius: 7, marginTop: 30 }}>
                                            <Icon name='arrow-forward' type="MaterialIcons" />
                                            <Text>Save</Text>
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Grid>
                    </Content>
                </Container>
            </>
        );
    }
}