import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon,Grid,View } from 'native-base';
import { Image, } from "react-native";
import styles from './style';
const FooterWantedLogo = require('../../../assets/icons/colorlogo.png');
export default class footerHomePage extends Component {
  render() {
    return (
     
        <Footer>
          <FooterTab style={styles.footerTab}>
            <Grid>
                <Button vertical>
                    <Icon type="MaterialIcons" name="store" style={styles.footerIcon} />
                </Button>
                <Button vertical>
                  <View style={{padding:5,borderBottomColor:'#fff',borderBottomWidth:1,borderRadius:100,marginBottom:10,backgroundColor:'#fff'}}>
                    <Image name={FooterWantedLogo} source={FooterWantedLogo} style={{height:80,width:80}} />
                  </View>
                </Button>
                <Button vertical>
                    <Icon type="MaterialIcons" name="local-offer" style={styles.activeFooterIcon} />
                </Button>
            </Grid>
          </FooterTab>
        </Footer>
      
    );
  }
}