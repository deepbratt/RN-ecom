import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Container, Content, Item, Icon, Button, Col, Row, Grid } from 'native-base';

export default class Form extends Component{

	render(){
		return(
			<View style={styles.container}>
           <Item regular style={{ marginTop: 20, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
            <Icon name='mail' style={{ color: "#6A077F" }} />
              <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder="Email"
                  placeholderTextColor = "#000"
                  selectionColor="#fff"
                  keyboardType="email-address"
                  onSubmitEditing={()=> this.password.focus()}
              />
            </Item>
            <Item regular style={{ marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
             <Icon name='lock' style={{ color: "#6A077F" }} />
              <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor = "#000"
                  ref={(input) => this.password = input}
                  />
              </Item>
              <Grid>
              <TouchableOpacity style={styles.button} onPress={this.props.onAuthButtonPress}>
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
                            <Text style={{marginRight: "30%",color:'#fff'}}> Login</Text>
                        </Button>
                    </Col>
                </Row>
                </TouchableOpacity>
            </Grid>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:360,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#000',
    marginVertical: 10
  },


});