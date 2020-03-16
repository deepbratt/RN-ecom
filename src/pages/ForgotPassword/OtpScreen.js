import React, { Component } from "react";
import { View, Image } from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Left, Right, Grid, Col, Row, Icon } from "native-base";
import OtpInputs from "react-native-otp-inputs";


export default class OtpScreen extends Component {
    state = {
        isModalVisible: false,
        btnAction: true
    };

    toggleModal = () => {
        this.props.checkStatus("false");
    };

    checkOtp = (data) => {
        const btnAction = false;
        if(data.length === 4){
            this.setState({
                btnAction
            });
        }
    }

    Navigate = (data) => {
        this.props.navigation.navigate("Signup");
    }

    render() {
        return (
            
            <Card transparent>
                <CardItem>
                    <Grid style={{ height: 350, textAlign: "center", }}>
                        <Row style={{marginTop: 30}}>
                            <Col>
                                <Text style={{textAlign: "center", fontWeight: "bold", color: "#62138F"}}>Enter Verification Code to change your password</Text>
                            </Col>
                        </Row>

                        <Row >
                            <Col>
                                <OtpInputs
                                    handleChange={code => this.checkOtp(code)}
                                    numberOfInputs={4} inputStyles={{ borderWidth: 1, borderColor: "#676767", padding: 18, height: 80, marginTop: -20, fontSize: 20 , borderRadius: 5}}
                                    focusStyles={{ color: "red" }}
                                />
                            </Col>
                        </Row>
                        <Row style={{marginTop: 30}}>
                            <Col>
                                <Text style={{textAlign: "center", fontWeight: "900", color: "#62138F"}}>Didn't get the code yet?</Text>
                            </Col>
                        </Row>
                        <Row style={{marginTop: -40}}>
                            <Col>
                                <Text style={{textAlign: "center", fontWeight: "bold", color: "#62138F", textDecorationLine: "underline"}}>Resend OTP</Text>
                            </Col>
                        </Row>
                        <Row style={{marginTop: -30}}>
                            <Col>
                                <Button primary disabled={this.state.btnAction} block style={{ borderRadius: 5 }} onPress={()=> {this.props.navigation.navigate("SetUpPassword"); this.toggleModal();}}>
                                    <Text> VERIFY </Text>
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </CardItem>
            </Card>
        );
    }
}