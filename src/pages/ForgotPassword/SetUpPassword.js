import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Form, Item, Input, Icon, Button, Text, Col, Row, Grid } from 'native-base';

export default class SetUpPassword extends Component {
    render() {
        return (
            <Container>
                <Content style={{ marginTop: 60, borderBottomColor: "#CCC", borderBottomWidth: 7 }} padder>
                    <Grid style={{}}>
                        <Row style={{ height: 100 }}>
                            <Col style={{ height: 100 }}>
                                <Image source={{
                                    uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/logo.png'
                                }}
                                    style={{ width: 150, height: 120, marginLeft: 110 }} />
                            </Col>

                        </Row>
                    </Grid>

                    < Form style={{ marginTop: 40, borderTopColor: "#676767", borderTopWidth: 1 }}>
                        <Item regular style={{ marginTop: 20, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                            <Icon name='lock' style={{ color: "#6A077F" }} />
                            <Input placeholder='Enter New Password' secureTextEntry={true} style={{ fontFamily: "Montserrat" }}
                            />
                        </Item>
                        <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                            <Icon name='lock' style={{ color: "#6A077F" }} />
                            <Input placeholder='Confirm New Password' secureTextEntry={true} style={{ fontFamily: "Montserrat" }} />
                        </Item>
                        <Grid>
                            <Row>
                                <Col style={{ width: "20%", borderRightColor: "#fff", borderRightWidth: 1 }}>
                                    <Button block iconLeft style={{ borderBottomLeftRadius: 5, borderTopLeftRadius: 5, marginTop: 20 }}>
                                        <Icon name='arrow-forward' />
                                    </Button>
                                </Col>
                                <Col style={{ width: "80%" }}>
                                    <Button block iconLeft style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5, marginTop: 20 }} onPress={()=>this.props.navigation.navigate("Home")}>
                                        <Text style={{marginRight: "30%"}}> Update</Text>
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </Form>
                </Content>
            </Container>
        );
    }

}