import React, { Component } from "react";
import { Image,ImageBackground,AsyncStorage } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Thumbnail,
  Separator
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from "./style";

const drawerCover = require("../../../assets/drawer-cover.png");
const profileImage = require("../../../assets/contacts/sankhadeep.png");

const datas = [
  {
    name: "Home",
    route: "Home",
    icon: "home",
    bg: "#C5F442"
  },
  {
    name: "My Profile",
    route: "MyProfile",
    icon: "person",
    bg: "#477EEA",
    arrow : 'keyboard-arrow-right',
    line: true
  },
  {
    name: "My Wishlist",
    route: "Wishlist",
    icon: "bookmark",
    bg: "#DA4437",
    arrow : 'keyboard-arrow-right'
  },
  {
    name: "My Orders",
    route: "Orders",
    icon: "gift",
    bg: "#C5F442",
    arrow : 'keyboard-arrow-right'
  },
  {
    name: "My Favorites",
    route: "Favorites",
    icon: "happy",
    bg: "#C5F442",
    arrow : 'keyboard-arrow-right'
  },
  {
    name: "My Address",
    route: "Address",
    icon: "map",
    bg: "#C5F442",
    arrow : 'keyboard-arrow-right',
    line: true
  },
  {
    name: "Cart",
    route: "cart",
    icon: "cart",
    bg: "#C5F442",
    arrow : 'keyboard-arrow-right'
  },
  {
    name: "Product Details",
    route: "productdetails",
    icon: "cart",
    bg: "#C5F442",
    arrow : 'keyboard-arrow-right'
  },
  {
    name: "Logout",
    route: "logout",
    icon: "exit",
    bg: "#C5F442",
    arrow : 'keyboard-arrow-right'
  },
  {
    name: "AddressLisitng",
    route: "AddressLisitng",
    icon: "cart",
    bg: "#C5F442",
    arrow : 'keyboard-arrow-right'
  },
  {
    name: "Store Details",
    route: "storedetails",
    icon: "cart",
    bg: "#C5F442",
    arrow : 'keyboard-arrow-right'
  },
  {
    name: "Order Details",
    route: "orderdetails",
    icon: "cart",
    bg: "#C5F442",
    arrow : 'keyboard-arrow-right'
  }
]

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      custId : ''
    };
    this.checkStorage();
  }

  checkStorage = async() => {
    let myStorage = await AsyncStorage.getItem('MyWanted7Store');
    let customerId = JSON.parse(myStorage);
    console.warn(this.props);
    //this.setState({custId : customerId})
  }

  render() {
    console.warn(this.props.isLoggedIn);
    const {custId} = this.state;
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <ImageBackground source={drawerCover} style={styles.drawerCover}>

          <Grid>
            <Row style={{justifyContent : 'flex-end'}}>
            <Col style={{alignSelf : 'center' }}>
              <Thumbnail source={profileImage}  style={styles.drawerImage} />
            </Col>
            <Col style={{ height: 100,alignSelf : 'center' ,justifyContent : 'center',marginLeft:-30}}>
              <Text style={styles.profileText}>Hello, </Text>
              <Text style={styles.profileText,{fontWeight:'bold',color:'#fff'}}>Sankhadeep D. </Text>
              <Text style={styles.profileText,{fontWeight:'bold',color:'#fff'}}>{custId}</Text>
            </Col>
            </Row>
          </Grid>
          </ImageBackground>

          <List
            dataArray={datas}
            renderRow={data =>
              <>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={styles.sideBarIcon}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.arrow &&
                  <Right>
                      <Icon
                        active
                        name={data.arrow}
                        type="MaterialIcons"
                        style={styles.sideBarIcon}
                      />
                  </Right>}
              </ListItem>
              {data.line &&
                <Separator style={styles.sideBarSeperator} />
               }
              </>
            }
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
