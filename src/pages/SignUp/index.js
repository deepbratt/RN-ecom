import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ScrollView,StatusBar,KeyboardAvoidingView,AsyncStorage } from "react-native";
import { Container, Content, Form, Item, Input, Icon, Button, Text, Picker,
InputGroup, Grid, Row, Col,Toast } from 'native-base';
import styles from "./style";
import SignupHeader from '../Header/SignupHeader';

const { Platform } = React;
export default function SignUp(props){
    const [salutation,setSalutation] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [reEnterPass,setReEnterPass] = useState('');


   const handleSubmit = (e,{salutation,firstName,lastName,email,phone,userPassword,reEnterPass}) => {
        e.preventDefault();
        var userType = 'customer';
        var userStatus = 'pending';
        var emailVerificationStatus = 'pending';
        var phoneVerificationStatus = 'pending';
        axios.post(`http://wanted7-backendapi.herokuapp.com/api/users/mobileApp/userExist`, { email })
        .then(result => {
            console.log(result.data.count)
            if(result.data.count > 0){
                emailExist(true)
            }else{
                axios.post(`http://wanted7-backendapi.herokuapp.com/auth/signup`, { userType,emailVerificationStatus,phoneVerificationStatus, 
                salutation, firstName, lastName, email,phone,userPassword,userStatus })
                .then(result =>
                    AsyncStorage.setItem('MyWanted7Store', result.data.id),
                    props.navigation.navigate("Home")
                );
            }
        })
    }
    
    function emailExist(data){
        if(data){
            Toast.show({
                text: "Email Already Exist",
                buttonText: "Okay",
                delay: 10000,
                type: "warning",
                position: "bottom"
            });
        }
    }
    
    return (
        <>
            <Container>
                <SignupHeader />
                <ScrollView>
                    <Content style={{padding: 10 }}>
                    <KeyboardAvoidingView
                    behavior={Platform.OS === "android" ? "padding" : null}
                    keyboardVerticalOffset={Platform.OS === "android" ? 10 : ''}>
                    
                        <Form>
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                            <Picker
                                mode="dropdown"
                                placeholder="Choose salutation"
                                selectedValue={salutation}
                                onValueChange={e => setSalutation(e)}
                            >
                                <Picker.Item label="Mr." value="Mr." />
                                <Picker.Item label="Mrs." value="Mrs." />
                                <Picker.Item label="Miss" value="Miss" />
                            </Picker>
                            </Item>
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                                <Input name="firstName" placeholder='First Name' style={{ fontFamily: "Montserrat" }} 
                                onChangeText={e => setFirstName(e)} value={firstName}
                                    />
                            </Item>
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>

                                <Input name="lastName" placeholder='Last Name' style={{ fontFamily: "Montserrat" }}  
                                onChangeText={e => setLastName(e)} value={lastName}
                                />
                            </Item>
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                                <Icon name='mail' type="MaterialIcons" style={{ color: "#6A077F" }}  />
                                <Input name="email" placeholder='Email Id' style={{ fontFamily: "Montserrat" }} 
                                keyboardType="email-address"
                                onChangeText={e => setEmail(e)}  value={email} />
                            </Item>
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                                <Icon name='phone' type="MaterialIcons" style={{ color: "#6A077F" }}  />
                                <Input name="phone" placeholder='Phone Number' style={{ fontFamily: "Montserrat" }} 
                                onChangeText={e => setPhone(e)} value={phone}  />
                            </Item>
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                                <Icon name='lock' type="MaterialIcons" style={{ color: "#6A077F" }}  />
                                <Input name="userPassword" placeholder='Password' secureTextEntry={true} style={{ fontFamily: "Montserrat" }} 
                                onChangeText={e => setUserPassword(e)} value={userPassword}  />
                            </Item>
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                                <Icon name='lock' type="MaterialIcons" style={{ color: "#6A077F" }}  />
                                <Input name="reEnterPass" placeholder='Re-Enter Password' secureTextEntry={true} style={{ fontFamily: "Montserrat" }} 
                                    onChangeText={e => setReEnterPass(e)}  value={reEnterPass} />
                            </Item>
                            <Button block iconLeft style={{ borderRadius: 5, marginTop: 30 }} 
                                onPress={e => handleSubmit(e,{salutation,firstName,lastName,email,phone,userPassword,reEnterPass})}>
                                <Icon name='arrow-forward' type="MaterialIcons" />
                                <Text>SignUp</Text>
                            </Button>
                        </Form>
                        
                        </KeyboardAvoidingView>
                        <Grid>
                            <Row>
                                <Col style={{ borderColor: "#ccc", borderBottomWidth: 4, marginBottom: 15, marginLeft: 5, width: "38%" }}>
                                </Col>
                                <Col style={{ width: "14%", marginLeft: 14 }}>
                                    <Text style={{ textAlign: "center", fontSize: 30 }}>OR</Text>
                                </Col>
                                <Col style={{ borderColor: "#ccc", borderBottomWidth: 4, marginLeft: 14, marginBottom: 15, width: "38%" }}>

                                </Col>
                            </Row>
                        </Grid>
                        <Button block iconLeft style={{ borderRadius: 5, marginTop: 15, backgroundColor: "#4267b2" }}>
                            <Icon name="logo-facebook" />
                            <Text>SignUp With Facebook</Text>
                        </Button>
                        <Grid style={{ marginTop: 10 }}>

                            <Row >
                                <Col>
                                    <Text style={{ textAlign: 'center' }}>
                                        Already have an account?  <Text style={{ fontWeight: 'bold', color: "#6A077F", textDecorationLine: 'underline' }} onPress={()=>props.navigation.navigate("Login")}>LOGIN</Text>
                                    </Text>
                                </Col>
                            </Row>
                        </Grid>
                    </Content>
                </ScrollView>
                
            </Container>
        </>
    );
}