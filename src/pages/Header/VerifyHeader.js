import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StatusBar } from "react-native";
import styles from './styles';
export default class VerifyHeader extends Component {
  render() {
    return (
        <Header style={styles.HeadBg} hasTabs>
          <StatusBar barStyle="light-content"/>
          <Left style={styles.barcont}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='keyboard-arrow-left' type="MaterialIcons" style={styles.iconSetBack} />
            </Button>
          </Left>
          <Body style={styles.barcont}>
            
          </Body>
        
        </Header>
    );
  }
}