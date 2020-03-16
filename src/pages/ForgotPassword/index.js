import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Form, Item, Input, Icon, Button, Text, Col, Row, Grid } from 'native-base';

export default class ForgotPassword extends Component {
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
                        <Grid>
                            <Row>
                                <Col style={{ width: "20%", borderRightColor: "#fff", borderRightWidth: 1 }} >
                                    <Button block iconLeft style={{ borderBottomLeftRadius: 5, borderTopLeftRadius: 5, marginTop: 20 }} onPress={()=>this.props.navigation.navigate("ForgotOTP")}>
                                        <Icon name='mail' />
                                    </Button>
                                </Col>
                                <Col style={{ width: "80%" }}>
                                    <Button block iconLeft style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5, marginTop: 20 }} onPress={()=>this.props.navigation.navigate("ForgotOTP")}>
                                        <Text style={{marginRight: "27%"}}>Reset using Email ID</Text>
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                        <Grid>
                            <Row>
                                <Col style={{ width: "20%", borderRightColor: "#fff", borderRightWidth: 1 }}>
                                    <Button block iconLeft style={{ borderBottomLeftRadius: 5, borderTopLeftRadius: 5, marginTop: 20 }} onPress={()=>this.props.navigation.navigate("ForgotOTP")}>
                                        <Icon name='phone' type='MaterialIcons' />
                                    </Button>
                                </Col>
                                <Col style={{ width: "80%" }}>
                                    <Button block iconLeft style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5, marginTop: 20 }} onPress={()=>this.props.navigation.navigate("ForgotOTP")}>
                                        <Text style={{marginRight: "10%"}}>Reset using Phone Number</Text>
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </Form>
                    <Grid style={{ marginTop: 20 }}>
                        <Row>
                            <Col>
                                <Text style={{ textAlign: 'center' }}>
                                    Don't have an account?  <Text style={{ fontWeight: 'bold', color: "#6A077F", textDecorationLine: 'underline' }} onPress={()=>this.props.navigation.navigate("Signup")}>SIGN-UP</Text>
                                </Text>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }

}