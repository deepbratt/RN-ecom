import React, {Component} from 'react';
import {StatusBar}  from 'react-native';
import { Container, Content, Form, Item, Icon, Button, Text, Col, Row, Grid,Picker } from 'native-base';
import VerifyHeader from '../Header/VerifyHeader';

export default class SignupDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined,
          selected3: undefined
        };
      }
      onValueChange2(value: 'string'){
        this.setState({
          selected2: value
        });
      }
      onValueChange3(value: 'string'){
        this.setState({
          selected3: value
        });
      }
  render () {
    return (
   
           <Container>
               <StatusBar barStyle="dark-content" />
               <VerifyHeader {...this.props} />
                <Content style={{ marginTop: 5, borderBottomColor: "#CCC", borderBottomWidth: 7 }} padder>
                  

                    < Form style={{  borderTopColor: "#676767"}}>
                        <Item picker regular  style={{ marginTop: 20, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                        <Icon name='wc' type="MaterialIcons" style={{ color: "#6A077F" }}  /> 
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="Choose Gender" value="key0" />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        
                        </Picker>
                        </Item>
                        <Item picker regular style={{ marginTop: 20, borderRadius: 5, borderWidth: 2, borderColor: "#6A077F" }}>
                        <Icon name='date-range' type="MaterialIcons" style={{ color: "#6A077F" }}  />
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected3}
                            onValueChange={this.onValueChange3.bind(this)}
                        >
                            <Picker.Item label="Choose Age" value="key0" />
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="19" value="19" />
                            <Picker.Item label="20" value="20" />
                            <Picker.Item label="21" value="21" />
                            <Picker.Item label="22" value="22" />
                            <Picker.Item label="23" value="23" />
                            <Picker.Item label="24" value="24" />
                            <Picker.Item label="25" value="25" />
                            <Picker.Item label="26" value="26" />
                        </Picker>
                        </Item>
                        <Button block iconLeft style={{ borderRadius: 5, marginTop: 20 }}>
                            <Icon name='arrow-forward' />
                            <Text>Save</Text>
                        </Button>
                    </Form>
    
                </Content>
            </Container>
 
    );
  }
}

