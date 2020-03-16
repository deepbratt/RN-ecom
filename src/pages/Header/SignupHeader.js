import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title,View,Col, Row, Grid, } from 'native-base';
import { StatusBar,Image } from "react-native";
import styles from './styles';
export default class ProductHeader extends Component {
    render() {
        return (
            <Header style={styles.HeadBg} hasTabs>
              <StatusBar barStyle="light-content"/>
              {/*<Left style={styles.barcont}>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name='keyboard-arrow-left' type="MaterialIcons" style={styles.iconSetBack} />
                </Button>
              </Left>*/}
              <Body style={styles.barcont}>
                <View style={{alignSelf:'center',justifyContent:'center'}}>
                <Grid>
                  <Col style={{width:40,alignSelf:'center',justifyContent:'center',marginTop:-7}}>
                    <Image source={{
                        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/logo_2.png'
                    }}
                        style={{ height: 35,width:35 }} />
                  </Col>
                  <Col style={{width:120,alignSelf:'center',justifyContent:'center'}}>
                    <Title style={styles.logotxt}>wanted7 </Title>
                  </Col>
                  </Grid>
                </View>
              </Body>
             
            </Header>
        );
      }
}