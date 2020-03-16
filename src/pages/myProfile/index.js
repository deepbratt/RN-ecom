import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView,KeyboardAvoidingView,AsyncStorage } from "react-native";
import { Container, Content, Form, Item, Input, Icon, Button, Text, Picker, Grid,Toast,Thumbnail } from 'native-base';
import Header from '../Header/ProfileHeader';
const image = "https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/upload-here.png";
const { Platform } = React;

export default function myProfile(props){
    const [profileImage,setProfileImage] = useState(image);
    const [salutation,setSalutation] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [reEnterPass,setReEnterPass] = useState('');

    const [emailValid,setEmailValid] = useState(false);
    const [phoneValid,setPhoneValid] = useState(false);
    const [userData,setUserData] = useState('');

    const pickImage = async() => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing  : true,
            aspect: [4,3]
        });
        if(!result.cancelled){
            setProfileImage(result.uri);
        }
    }

    useEffect(() => {
        /*checkEmailExist(email);
        checkPhoneExist(phone);*/
        AsyncStorage.getItem('MyWanted7Store').then((token) => {
            axios.post('http://wanted7-backendapi.herokuapp.com/api/users/fetchData',{userId : token})
            .then(result => {
                setUserData(result.data[0] !== undefined  ?  result.data[0] :  '' )
            })
        });
    });


    const checkEmailExist = async(email) => {        
        await axios.post(`http://wanted7-backendapi.herokuapp.com/api/users/mobileApp/userExist`, { email })
        .then(result => {
            setEmailValid(result.data.count > 0 ? true : false);
        });
    }

    const checkPhoneExist = async(phone) => {        
        await axios.post(`http://wanted7-backendapi.herokuapp.com/api/users/mobileApp/userExistPhone`, { phone })
        .then(result => {
            setPhoneValid(result.data.count > 0 ? true : false);
        });
    }

    function handleUpdate(e,userData){
        e.preventDefault();
        let evalid;
        const newSalutation = salutation !== '' && salutation !== userData.salutation ? salutation : userData.salutation;
        const newFirstName = firstName !== '' && firstName !== userData.firstName ? firstName : userData.firstName;
        const newLastName = lastName !== '' && lastName !== userData.lastName ? lastName : userData.lastName;
        const newUserPassword = userPassword !== '' && userPassword !== userData.userPassword ? firstName : userData.userPassword;
        const newReEnterPass = reEnterPass !== '' && reEnterPass !== userData.userPassword ? reEnterPass : userData.userPassword;

        const newEmail = email !== '' && email !== userData.email ? 
            evalid = checkEmailExist(email)
        : 
        evalid = userData.email;
        console.log(evalid);
        
        emailValid ? console.log('Already Exist') : console.log(email)
        
        
        const newPhone = phone !== '' && phone !== userData.phone ? 
        checkPhoneExist(phone) 
        : 
        userData.phone;
        phoneValid ? console.log('Already Exist') : console.log(phone)
        
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
                <Header {...props}/>
                <ScrollView>
                    <Content style={{padding: 10 }}>
                    <KeyboardAvoidingView
                    behavior={Platform.OS === "android" ? "padding" : null}
                    keyboardVerticalOffset={Platform.OS === "android" ? 64 : ''}>
                        <Form>
                            <Grid>
                                <Thumbnail large source={{uri:profileImage}}/>
                                <Button bordered small style={{alignSelf:'center',marginLeft:5,borderRadius:10}} 
                                    onPress={() => pickImage()}>
                                    <Text>Change Image</Text>
                                </Button>
                            </Grid>
                            
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                            <Picker
                                mode="dropdown"
                                placeholder="Choose salutation"
                                selectedValue={userData.salutation}
                                onValueChange={e => setSalutation(e)}
                            >
                                <Picker.Item label="Mr." value="Mr."/>
                                <Picker.Item label="Mrs." value="Mrs."/>
                                <Picker.Item label="Miss" value="Miss"/>
                            </Picker>
                            </Item>
                        
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                                <Input name="firstName" placeholder='First Name' style={{ fontFamily: "Montserrat" }} 
                                onChangeText={e => setFirstName(e)} defaultValue={userData.firstName}
                                    />
                            </Item>
                        
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>

                                <Input name="lastName" placeholder='Last Name' style={{ fontFamily: "Montserrat" }}  
                                onChangeText={e => setLastName(e)} defaultValue={userData.lastName}
                                />
                            </Item>
                               
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                                <Icon name='mail' type="MaterialIcons" style={{ color: "#6A077F" }}  />
                                <Input name="email" placeholder='Email Id' style={{ fontFamily: "Montserrat" }} 
                                keyboardType="email-address"
                                onChangeText={e => setEmail(e)}  defaultValue={userData.email} />
                            </Item>
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                                <Icon name='phone' type="MaterialIcons" style={{ color: "#6A077F" }}  />
                                <Input name="phone" placeholder='Phone Number' style={{ fontFamily: "Montserrat" }} 
                                onChangeText={e => setPhone(e)} defaultValue={userData.phone}  />
                            </Item>
                            <Text style={{paddingTop:10,fontWeight:'bold'}}>Change Password</Text>
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                                <Icon name='lock' type="MaterialIcons" style={{ color: "#6A077F" }}  />
                                <Input name="userPassword" placeholder='New Password' secureTextEntry={true} style={{ fontFamily: "Montserrat" }} 
                                onChangeText={e => setUserPassword(e)} defaultValue={userPassword}  />
                            </Item>
                            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                                <Icon name='lock' type="MaterialIcons" style={{ color: "#6A077F" }}  />
                                <Input name="reEnterPass" placeholder='Re-Enter Password' secureTextEntry={true} style={{ fontFamily: "Montserrat" }} 
                                    onChangeText={e => setReEnterPass(e)}  defaultValue={reEnterPass} />
                            </Item>
                            <Button block iconLeft style={{ borderRadius: 5, marginTop: 30 }} 
                                onPress={e => handleUpdate(e,userData)}>
                                <Text>Update</Text>
                            </Button>
                        </Form>
                        
                        </KeyboardAvoidingView>
                    </Content>
                </ScrollView>
                
            </Container>
        </>
    );
}