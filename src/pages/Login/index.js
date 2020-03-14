import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,

} from 'react-native';
import {connect} from "react-redux";
import {compose} from "redux";
import { Field, reduxForm } from 'redux-form';

import InputText from "../../components/InputText";
import {loginUser} from "../../actions/auth.actions";

import Loader from "../../components/Loader";
import {Actions} from 'react-native-router-flux';
import { Container, Content, Item, Form,Input, Icon, Button, Text, Col, Row, Grid, Toast } from 'native-base';
import Styles from './style';


class Login extends Component{

	signup() {
		Actions.signup()
	}

  loginUser = async (values) => {
    try {
      const response =  await this.props.dispatch(loginUser(values));
      console.warn(response);
      if (!response.success) {
          throw response;
      }
  } catch (error) {
      throw error;
  }
  }

  onSubmit = (values) => {
      this.loginUser(values);
  }

  renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
              <InputText
                  onChangeText={onChange}
                  maxLength={maxLength}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  secureTextEntry={secureTextEntry}
                  label={label}
                  {...restInput} />
            {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
  }

	render() {
    const { handleSubmit, loginUser} = this.props;
		return(
      <Container>
        	{/*<View style={styles.container}>
              {(loginUser && loginUser.isLoading) && <Loader />}
              <Logo/>
              <Field
                  name="email"
                  placeholder="Email"
                  component={this.renderTextInput} />
              <Field
                  name="userPassword"
                  placeholder="Password"
                  secureTextEntry={true}
                  component={this.renderTextInput} />
              <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Do not have an account yet?</Text>
                <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
              </View>
            </View>*/}
            <Content style={{ marginTop: 60, borderBottomColor: "#CCC", borderBottomWidth: 7 }} padder>
              {(loginUser && loginUser.isLoading) && <Loader />}
                <Grid style={{}}>
                    <Row style={{ height: 100 }}>
                        <Col style={{ height: 100 }}>
                            <Image source={{
                                uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/wanted_7_logo.png'
                            }}
                                style={{ width: 150, height: 120, marginLeft: 110 }} />
                        </Col>

                    </Row>
                </Grid>

                <Form style={{ marginTop: 40, borderTopColor: "#676767", borderTopWidth: 1 }}>
                    <Item regular style={{ marginTop: 20, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                        <Icon name='mail' style={{ color: "#6A077F" }} />
                        {/*<Input placeholder='Email or Phone Number' keyboardType="email-address"
                        onChangeText={e => setEmail(e)}  value={email} style={{ fontFamily: "Montserrat" }}
                          />*/}
                        <Input
                          name="email"
                          underlineColorAndroid='#fff'
                          placeholder="Email"
                          placeholderTextColor = "#000"
                          selectionColor="#fff"
                          keyboardType="email-address"
                          onSubmitEditing={()=> this.password.focus()}
                          style={{ fontFamily: "Montserrat" }}
                        />
                    </Item>
                    <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                        <Icon name='lock' style={{ color: "#6A077F" }} />
                        {/*<Input placeholder='Password' secureTextEntry={true} style={{ fontFamily: "Montserrat" }}  onChangeText={e => setUserPassword(e)} value={userPassword} />*/}
                        <Input
                          name="userPassword"
                          underlineColorAndroid='rgba(0,0,0,0)'
                          placeholder="Password"
                          secureTextEntry={true}
                          placeholderTextColor = "#000"
                          component={this.renderTextInput}
                          style={{ fontFamily: "Montserrat" }}
                        />
                    </Item>
                    <Grid>
                        <Row>
                            <Col style={{ width: "20%", borderRightColor: "#fff", borderRightWidth: 1 }}>
                                <Button block iconLeft style={{ borderBottomLeftRadius: 5, borderTopLeftRadius: 5, marginTop: 20 }}
                                onPress={e => handleSubmit(e,{email,userPassword})}>
                                    <Icon name='arrow-forward' />
                                </Button>
                            </Col>
                            <Col style={{ width: "80%" }}>
                                <Button block iconLeft style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5, marginTop: 20 }}
                                onPress={e => handleSubmit(e,{email,userPassword})}>
                                    <Text style={{marginRight: "30%"}}> Login</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </Form>

                <Grid style={{ marginTop: 20 }}>
                    <Row>
                        <Col>
                            <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }} onPress={()=>props.navigation.navigate("ForgotPassword")} >
                                Forgot Password
                            </Text>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 7 }}>
                        <Col>
                            <Text style={{ textAlign: 'center' }}>
                                Don't have an account?  <Text style={{ fontWeight: 'bold', color: "#6A077F", textDecorationLine: 'underline' }} onPress={()=>props.navigation.navigate("Signup")}>SIGN-UP</Text>
                            </Text>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        </Container>
			)
	}
}

const validate = (values) => {
    const errors = {};
    if(!values.email) {
        errors.email = "Email is required"
    }
    if(!values.password) {
        errors.password = "Name is required"
    }
    return errors;
};

mapStateToProps = (state) => ({
    loginUser: state.authReducer.loginUser
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "login",
    validate
  })
)(Login);
