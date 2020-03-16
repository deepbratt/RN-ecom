import React, { useState } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title,Item,Input,Text,Content} from 'native-base';
import { StatusBar,View,Image } from "react-native";
import styles from './styles';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
const wantedLogo = require("../../../assets/icons/logo2.png");

const tabData = [
  {
    label: 'ALL',
    routeName: 'Home'
  },
  {
    label: 'WANTED7',
    routeName: 'Wanted7'
  },
  {
    label: 'WMALLS',
    routeName: 'WMalls'
  },
]

export default function HomeHeader(props){
  const [logoClick,currentLogoClick] = useState(false);
    return (
      <>
        <Header style={styles.HeadBg}>
          <StatusBar barStyle="light-content"/>
          <Left style={styles.barcont}>
            <Button
              transparent
              onPress={() => Actions.drawerOpen()}>
              <Icon name="dehaze" type="MaterialIcons" style={styles.iconSet}/>
            </Button>
          </Left>
          <Body style={styles.barcont}>
            <Title style={styles.logotxt}>wanted7</Title>
          </Body>
          <Right style={styles.barcont}>
            <Button transparent style={{marginRight:-15}} onPress={()=>currentLogoClick(!logoClick)}>
              <Image name={wantedLogo} source={wantedLogo} style={styles.iconSetLogo} />
            </Button>
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

        {
          logoClick === true ?
            <View style={styles.tabRow}>
              <Grid>
                {
                  tabData.map((data,index) => {
                    return(
                      <Col key={index} style={styles.tabstyle}>
                        <Button transparent
                          style={props.navigation.state.routeName === data.routeName ? styles.activetabstyle: styles.tabtextstyle}
                          onPress={()=>props.navigation.navigate(data.routeName)} onClick={()=>currentLogoClick(logoClick)}>
                          <Text>{data.label}</Text>
                        </Button>
                      </Col>
                    )
                  })
                }
              </Grid>
          </View>
        :
          <View></View>
        }


        </>
    );
}
