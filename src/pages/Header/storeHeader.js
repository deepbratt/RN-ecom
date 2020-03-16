import React, { useState } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title,Item,Input,Text,Content} from 'native-base';
import { StatusBar,View,Image } from "react-native";
import styles from './styles';
import { Col, Row, Grid } from 'react-native-easy-grid';
const wantedLogo = require("../../../assets/icons/logo2.png");


export default function HomeHeader(props){
  const [logoClick,currentLogoClick] = useState(false);
    return (
      <>
        <Header style={styles.HeadBg}>
          <StatusBar barStyle="light-content"/>
          <Left style={styles.barcont}>
            <Button
              transparent
              onPress={() => props.navigation.openDrawer()}>
              <Icon name="dehaze" type="MaterialIcons" style={styles.iconSet}/>
            </Button>
          </Left>
          <Body style={styles.barcont}>
            <Title style={styles.logotxt}>wanted7</Title>
          </Body>
          <Right style={styles.barcont}>
            <Button transparent style={{marginRight:-23}}>
              <Icon  name="shopping-cart" type="MaterialIcons" style={styles.iconSet}/>
            </Button>
            <Button transparent>
              <Icon  name="notifications" type="MaterialIcons"  style={styles.iconSet} />
            </Button>
          </Right>
        </Header>
        <View style={styles.searchBoxRow}>
          <Item regular style={styles.searchBox}>
            <Icon active name='search' />
            <Input placeholder='Search for Products, Brands and More' />
          </Item>
        </View>
        
        
        
        </>
    );
}