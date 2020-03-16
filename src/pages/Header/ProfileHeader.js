import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StatusBar } from "react-native";
import styles from './styles';
export default class ProfileHeader extends Component {
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
            <Title style={styles.logotxt}>wanted7</Title>
          </Body>
          <Right style={styles.barcont}>
            <Button transparent style={{marginRight:-20}}>
              <Icon name='search' type="MaterialIcons" style={styles.iconSet} />
            </Button>
            <Button transparent>
              <Icon name='shopping-cart' type="MaterialIcons" style={styles.iconSet} />
            </Button>
          </Right>
        </Header>
    );
  }
}