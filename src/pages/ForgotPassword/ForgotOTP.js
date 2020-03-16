import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Form, Item, Input, Icon, Button, Text, Col, Row, Grid } from 'native-base';
import Modal from "react-native-modal";
import OtpScreen from './OtpScreen';

export default class ForgotOTP extends Component {

    state = {
        isModalVisible: false
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        console.log(this.state.isModalVisible);
    };

    SetModal = (data) => {
        if(data === "false"){
            this.setState({
                isModalVisible : false
            });
        }
    }

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
                        <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                            <Icon name='phone' type="MaterialIcons" style={{ color: "#6A077F" }} />
                            <Input placeholder='Phone Number' keyboardType="numeric" style={{ fontFamily: "Montserrat" }} />
                            <Button style={{ borderBottomRightRadius: 5, borderTopRightRadius: 5, height: 50, backgroundColor: "#cccccc", borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderLeftColor: "#6A077F", borderLeftWidth: 1 }} onPress={this.toggleModal}>
                                <Text style={{ fontSize: 14, fontWeight: "100", color: "#000" }}> SEND OTP </Text>
                            </Button>
                        </Item>
                        <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                            <Icon name='mail' style={{ color: "#6A077F" }} />
                            <Input placeholder='Email ID' style={{ fontFamily: "Montserrat" }} />
                            <Button style={{ borderBottomRightRadius: 5, borderTopRightRadius: 5, height: 50, backgroundColor: "#cccccc", borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderLeftColor: "#6A077F", borderLeftWidth: 1 }} onPress={this.toggleModal}>
                                <Text style={{ fontSize: 14, fontWeight: "100", color: "#000" }}> SEND OTP </Text>
                            </Button>

                        </Item>
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

                    <Modal isVisible={this.state.isModalVisible} onBackButtonPress={this.toggleModal}
                        coverScreen={true}
                        onSwipeComplete={this.toggleModal}
                        swipeDirection={['up', 'left', 'right', 'down']}
                        style={{ justifyContent: 'flex-end', margin: 0 }}><OtpScreen navigation={this.props.navigation} checkStatus={this.SetModal}/>
                    </Modal>
                </Content>
            </Container>
        );
    }

}